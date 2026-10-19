# Draw the Understanding WWII app maps from the saved OpenMapTiles vector tiles.
# Every group at several levels (L0 full, L1 half, ... down to ~640 px for the overview, ~260 px for the others),
# plus a names-free copy of the overview; cut into 1024 px JPEG tiles. Plain one-colour tiles are dropped.
# usage: python3 make_tiles_uw.py [group ids...]   (default: all not yet drawn)   env REDO=1 to redraw
import sys, json, subprocess, os, math
sys.path.insert(0, '/home/claude/gmap'); sys.path.insert(0, '/home/claude/gmap/uw')
from tiles import stitch, cut, merc
from vtjobs import vt_jobs
from PIL import Image
U = '/home/claude/gmap/uw'; G = json.load(open(f'{U}/groups.json'))
PPD = {'ov': 150, 'reg': 600, 'mid': 1400, 'close': 4550}
G = [{'id': 'ov', 'tier': 'ov', 'b': [-12, 31.5, 48, 71.2]}] + G
want = sys.argv[1:] or [g['id'] for g in G]
OUT = f'{U}/tiles'; os.makedirs(OUT, exist_ok=True); os.makedirs(f'{U}/raster', exist_ok=True)
os.makedirs('/home/claude/gmap/png/parts', exist_ok=True)
def lvls(g):
    b = g['b']; p = PPD[g['tier']]
    W = round((b[2] - b[0]) * p); H = round((merc(b[3]) - merc(b[1])) * 180 / math.pi * p)
    L = 0; out = []
    while True:
        w, h = round(W / 2**L), round(H / 2**L)
        out.append({'g': g['id'], 'lv': L, 'b': b, 'w': w, 'h': h})
        if max(w, h) / 2 < (640 if g['tier'] == 'ov' else 260) or L >= 4: break
        L += 1
    if g['tier'] == 'ov': out.append(dict(out[0], lv=-1))
    return out
def tag(l): return 'b' if l['lv'] < 0 else str(l['lv'])
for g in G:
    if g['id'] not in want: continue
    rf = f"{U}/raster/{g['id']}.json"
    if os.path.exists(rf) and not os.environ.get('REDO'): continue
    R = []
    for l in lvls(g):
        stem = f"/home/claude/gmap/png/parts/uw-{g['id']}-{tag(l)}"
        J = vt_jobs(l, g['tier'], stem, bare=l['lv'] < 0)
        jf = f"{U}/jobs-{g['id']}-{tag(l)}.json"; json.dump(J, open(jf, 'w'))
        r = subprocess.run(['node', 'shoot.js', jf], cwd='/home/claude/gmap', env=dict(os.environ, RENDER='render_vt.html', SHOOT_MS='900000'), capture_output=True, text=True)
        if 'timeout' in r.stdout or 'READY' not in r.stdout: print('PROBLEM', g['id'], tag(l), r.stdout[-300:], r.stderr[-300:], flush=True)
        png = f"/home/claude/gmap/png/uw-{g['id']}-{tag(l)}.png"; stitch(J, l, png)
        l2 = dict(l, g=g['id'])
        for t in cut(png, l2, 'uw', OUT):
            fn = os.path.join(OUT, os.path.basename(t['src']))
            if all(b - a < 8 for a, b in Image.open(fn).getextrema()): os.remove(fn); continue
            R.append(t)
    json.dump(R, open(rf, 'w'))
    print(g['id'], len(R), 'tiles', round(sum(os.path.getsize(os.path.join(OUT, os.path.basename(t['src']))) for t in R) / 1e6, 1), 'MB', flush=True)
