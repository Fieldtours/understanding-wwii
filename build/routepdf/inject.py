# Puts "Download Route PDF" into a finished guide page (safe to run again: replaces the old copy),
# copies the two helper libraries next to it, and tells the offline helper (sw.js) to keep them.
# Usage: python3 inject.py path/to/guide.html [more pages in the same folder...]
import re, sys, os, shutil
HERE = os.path.dirname(os.path.abspath(__file__))
block = open(os.path.join(HERE, 'routepdf.html')).read()
LIBS = ['jspdf.umd.min.js', 'qrcode.js']
for f in sys.argv[1:]:
    s = open(f).read()
    s = re.sub(r'<!-- routepdf start.*?<!-- routepdf end -->\n?', '', s, flags=re.S)
    i = s.rfind('</body>')
    s = s[:i] + block + s[i:] if i >= 0 else s + block
    open(f, 'w').write(s)
    d = os.path.dirname(os.path.abspath(f))
    os.makedirs(os.path.join(d, 'lib'), exist_ok=True)
    for l in LIBS:
        shutil.copy(os.path.join(HERE, 'lib', l), os.path.join(d, 'lib', l))
    sw = os.path.join(d, 'sw.js')
    if os.path.exists(sw):
        t = open(sw).read()
        if 'lib/jspdf.umd.min.js' not in t:
            for key in ('const CORE_FILES=[', 'CORE=['):
                if key in t:
                    t = t.replace(key, key + '"lib/jspdf.umd.min.js","lib/qrcode.js",', 1)
                    break
            open(sw, 'w').write(t)
    print('ok', f)
