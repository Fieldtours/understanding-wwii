# Adds Understanding WWII to the dzcharlie.com home page folder (run on the Mac copy, after a backup).
# usage: python3 home_patch.py <home folder> <pages> <mb>
import sys, re, os
H = sys.argv[1]; PAGES = sys.argv[2]; MB = sys.argv[3]
p = os.path.join(H, 'index.html'); s = open(p, encoding='utf-8').read()
if 'understanding-wwii' in s: print('already there'); sys.exit()
s = s.replace('--ie:#22392b;--ie-t:#f2ecd9;--ie-k:#e4b65c;', '--ie:#22392b;--ie-t:#f2ecd9;--ie-k:#e4b65c;--uw:#24323f;--uw-t:#efe9da;--uw-k:#e0877d;', 1)
css = ('.g-uw{background:var(--uw);color:var(--uw-t)}.g-uw small{color:var(--uw-k)}.g-uw p{color:#d6d9dc}.g-uw .act{border-left:1px solid #3e4a57}\n'
       '.g-uw .act a{background:var(--uw-t);color:var(--uw)}.g-uw .act a.sm{background:none;color:var(--uw-t)}\n'
       '.dl.uw{background:var(--uw);color:var(--uw-t);border-color:var(--uw)}.dl.uw small{color:var(--uw-k)}.dl.uw p{color:#d6d9dc}.dl.uw .meta em{color:var(--uw-k)}\n')
i = s.index('.g-ie{'); s = s[:i] + css + s[i:]
card = '''    <article class="guide g-uw">
      <img class="cover" src="site/uw-wide.jpg" alt="Understanding WWII guide cover: an RAF operations room with plotters around a map table">
      <div class="txt"><small>WORLD WAR II · EUROPE · 1939–1945</small><h3>UNDERSTANDING WWII</h3>
        <p>The whole war in Europe, from Westerplatte to Berlin: Dunkirk, the Battle of Britain, Normandy, Arnhem, Bastogne, Stalingrad and the camps. 160 sites in 15 areas, 12 battle maps.</p></div>
      <div class="act">
        <a href="understanding-wwii/">Open the guide →</a>
        <a class="sm" href="understanding-wwii/pdf/Understanding-WWII-Europe-1939-1945.pdf" download>Download the PDF</a>
      </div>
      <span class="tag">NEW</span>
    </article>

'''
i = s.index('    <article class="guide g-ie">'); s = s[:i] + card + s[i:]
dl = f'''      <a class="dl uw" href="understanding-wwii/pdf/Understanding-WWII-Europe-1939-1945.pdf" download><small>EUROPE · 1939–1945</small><b>Understanding WWII</b><p>The whole war in Europe: 160 sites, the timeline, key figures and the battles.</p><span class="meta"><span>{PAGES} pages · {MB} MB</span><em>⬇ PDF</em></span></a>
'''
i = s.index('    </div>\n    <div class="install">'); s = s[:i] + dl + s[i:]
s = s.replace('<a href="into-europe/">Into Europe · Italy</a><a href="places/">', '<a href="into-europe/">Into Europe · Italy</a><a href="understanding-wwii/">Understanding WWII</a><a href="places/">')
open(p, 'w', encoding='utf-8').write(s)
r = os.path.join(H, '_redirects'); t = open(r).read()
if 'understanding-wwii' not in t:
    t = t.replace('# Spanish Civil War -> spanishwar.netlify.app', '# Understanding WWII -> understanding-wwii.netlify.app (update it by dragging "Understanding WWII / UPLOAD THIS TO NETLIFY - Understanding WWII")\n# Spanish Civil War -> spanishwar.netlify.app')
    t = t.replace('/into-europe/*            https://intoeurope.netlify.app/:splat                200', '/into-europe/*            https://intoeurope.netlify.app/:splat                200\n/understanding-wwii/*     https://understanding-wwii.netlify.app/:splat        200')
    open(r, 'w').write(t)
sm = os.path.join(H, 'sitemap.xml'); x = open(sm).read()
if 'understanding-wwii' not in x:
    x = x.replace('  <url><loc>https://dzcharlie.com/into-europe/</loc>', '  <url><loc>https://dzcharlie.com/understanding-wwii/</loc><lastmod>2026-10-19</lastmod><priority>0.9</priority></url>\n  <url><loc>https://dzcharlie.com/into-europe/</loc>', 1)
    open(sm, 'w').write(x)
print('done')
