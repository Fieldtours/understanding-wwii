# Collect the drawn map pictures into the app's RASTER list (g = group number, 0 = overview).
# Levels that only repeat a coarser tier are left out to keep the guide small:
#   regional levels finer than the overview only (lv>=2 repeats the overview);
#   close-up levels lv>=2 (the middle tier covers them); middle levels lv>=1 inside a regional box.
import json, os, shutil, glob
U = '/home/claude/gmap/uw'; G = json.load(open(f'{U}/groups.json'))
REG = [g for g in G if g['tier'] == 'reg']
def inside(b, r): return b[0] >= r[0] and b[1] >= r[1] and b[2] <= r[2] and b[3] <= r[3]
order = ['ov'] + [g['id'] for t in ('reg', 'mid', 'close') for g in G if g['tier'] == t]
tier = {g['id']: g for g in G}
OUT = '/home/claude/uwwii/build/app/maps'; os.makedirs(OUT, exist_ok=True)
for f in glob.glob(OUT + '/*.jpg'): os.remove(f)
R = []; size = 0; missing = []
for gi, gid in enumerate(order):
    f = f'{U}/raster/{gid}.json'
    if not os.path.exists(f): missing.append(gid); continue
    g = tier.get(gid)
    for t in json.load(open(f)):
        lv = t['lv']
        if gid == 'ov' and lv in (0, -1): continue
        if g and g['tier'] == 'reg' and lv >= 2: continue
        if g and g['tier'] == 'close' and lv >= 2: continue
        if g and g['tier'] == 'mid' and lv >= 1 and any(inside(g['b'], r['b']) for r in REG): continue
        src = os.path.join(U, 'tiles', os.path.basename(t['src']))
        name = f"uw-g{gi}-{'b' if lv < 0 else lv}-{os.path.basename(t['src']).rsplit('-', 2)[-2]}-{os.path.basename(t['src']).rsplit('-', 1)[-1]}"
        w, h = t['w'], t['h']
        if g and g['tier'] in ('reg', 'mid') and lv == 0:   # regional 450 and middle 1050 px/degree instead of 600 and 1400: same map, smaller file
            from PIL import Image
            im = Image.open(src); w, h = max(1, round(w * .75)), max(1, round(h * .75))
            im.resize((w, h), Image.LANCZOS).save(os.path.join(OUT, name), quality=74, optimize=True, progressive=True)
        else: shutil.copy(src, os.path.join(OUT, name))
        size += os.path.getsize(os.path.join(OUT, name))
        R.append({'b': t['b'], 'w': w, 'h': h, 'g': gi, 'lv': lv, 'src': 'maps/' + name})
json.dump(R, open('/home/claude/uwwii/build/raster.json', 'w'), separators=(',', ':'))
print(len(R), 'tiles', round(size / 1e6, 1), 'MB', 'missing groups:', len(missing), missing[:20])
