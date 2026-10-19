# Names-free copies (lv -1) of the regional and middle maps, at half resolution.
# The app shows them instead of a stretched map with giant blurry place names when you zoom in past a map's detail.
import sys, json, subprocess, os, math
sys.path.insert(0, '/home/claude/gmap'); sys.path.insert(0, '/home/claude/gmap/uw')
from tiles import stitch, cut, merc
from vtjobs import vt_jobs
from PIL import Image
U = '/home/claude/gmap/uw'; G = json.load(open(f'{U}/groups.json'))
PPD = {'reg': 300, 'mid': 700}
OUT = f'{U}/tiles'
tiers = sys.argv[1:] or ['reg', 'mid']
for g in G:
    if g['tier'] not in tiers: continue
    rf = f"{U}/raster/{g['id']}.json"; R = json.load(open(rf))
    if any(t['lv'] == -1 for t in R): continue
    b = g['b']; p = PPD[g['tier']]
    l = {'g': g['id'], 'lv': -1, 'b': b, 'w': round((b[2] - b[0]) * p), 'h': round((merc(b[3]) - merc(b[1])) * 180 / math.pi * p)}
    stem = f"/home/claude/gmap/png/parts/uw-{g['id']}-b"
    J = vt_jobs(l, g['tier'], stem, bare=True)
    jf = f"{U}/jobs-{g['id']}-b.json"; json.dump(J, open(jf, 'w'))
    r = subprocess.run(['node', 'shoot.js', jf], cwd='/home/claude/gmap', env=dict(os.environ, RENDER='render_vt.html', SHOOT_MS='900000'), capture_output=True, text=True)
    if 'READY' not in r.stdout: print('PROBLEM', g['id'], r.stdout[-300:], r.stderr[-300:], flush=True)
    png = f"/home/claude/gmap/png/uw-{g['id']}-b.png"; stitch(J, l, png)
    n = 0
    for t in cut(png, l, 'uw', OUT):
        fn = os.path.join(OUT, os.path.basename(t['src']))
        if all(b2 - a < 8 for a, b2 in Image.open(fn).getextrema()): os.remove(fn); continue
        R.append(t); n += 1
    json.dump(R, open(rf, 'w'))
    print(g['id'], n, 'bare tiles', flush=True)
