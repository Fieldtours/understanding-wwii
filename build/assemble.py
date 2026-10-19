# Build Understanding WWII (index.html) from the Into Europe template + the research files.
# usage: python3 assemble.py  -> app/index.html
import json, re, glob, html, os, math, sys
B = '/home/claude/uwwii/build'; RS = '/home/claude/uwwii/Research'
T = open(f'{B}/template.html').read()
J = lambda o: json.dumps(o, ensure_ascii=False, separators=(',', ':'))
E = html.escape
def rep(old, new, count=1, s=None):
    global T
    src = T if s is None else s
    n = src.count(old)
    if n != count: raise SystemExit(f'rep: expected {count} got {n}: {old[:80]!r}')
    out = src.replace(old, new)
    if s is None: T = out
    return out
def setconst(name, js, kw='const'):
    global T
    pat = re.compile(r'^' + kw + ' ' + re.escape(name) + r'=.*$', re.M)
    m = pat.findall(T)
    if len(m) != 1: raise SystemExit(f'setconst {name}: {len(m)} matches')
    T = pat.sub(lambda _: f'{kw} {name}={js};', T)
def section(sid, inner):
    global T
    a = T.index(f'<section role="tabpanel" id="{sid}"'); a2 = T.index('>', a) + 1
    b = T.index('</section>', a2)
    T = T[:a2] + inner + T[b:]

# ---------------- data ----------------
STOPS = {}; REG = {}
for f in sorted(glob.glob(f'{RS}/regions/*.json')):
    d = json.load(open(f)); REG[d['region']] = d
    for s in d['stops']:
        s['region'] = d['region']; STOPS[s['id']] = s
DROP = {'sicily-museum'}
D = json.load(open(f'{RS}/days.json'))
INTRO = json.load(open(f'{RS}/day_intros.json')) if os.path.exists(f'{RS}/day_intros.json') else [''] * len(D['days'])
BP = json.load(open(f'{RS}/bigpicture.json'))
PP = json.load(open(f'{RS}/people.json'))
BT = json.load(open(f'{RS}/battles.json'))
RNAME = {'britain': 'Britain', 'dunkirk': 'Dunkirk & the Channel coast', 'normandy': 'Normandy', 'west-france': 'Western France',
         'paris-east': 'Paris, Champagne & Alsace', 'ardennes': 'Belgium & Luxembourg', 'netherlands': 'The Netherlands',
         'germany-west': 'Western & southern Germany', 'germany-east': 'Berlin & eastern Germany', 'poland': 'Poland',
         'central': 'Czechia & Austria', 'italy': 'Italy', 'mediterranean': 'Malta & Crete', 'norway': 'Norway', 'east': 'Russia & Belarus'}
RORDER = list(RNAME)
def mins(m):
    h, r = divmod(int(m), 60)
    return (f'{h} hr' if h else '') + (' ' if h and r else '') + (f'{r} min' if r else '') or '30 min'
def conf(c): return {'LOW': 'AREA'}.get(c, c)
missing = []
DAYS = []; POOLID = {}; DAYREG = []
for n, (title, ids, town, la, lo, reg) in enumerate(D['days'], 1):
    st = []
    for sid in ids.split(','):
        s = STOPS.get(sid)
        if not s or sid in DROP or s.get('lat') is None: missing.append(sid); continue
        cat = s['cat'] + ' · ' + s.get('country', '')
        st.append([s['name'], mins(s['min']), round(s['lat'], 6), round(s['lon'], 6), conf(s['conf']), cat, s['text'], s['look'], s['plan'],
                   'Private land — view from the road' if s.get('private') else '', s['pri']])
        POOLID[sid] = f'd{n}-{len(st)}'
    names = [x[0].split(',')[0].split(':')[0].split(' (')[0] for x in st]
    route = ' → '.join(names) + f' · {len(st)} stop' + ('s' if len(st) != 1 else '')
    DAYS.append({'n': n, 't': title, 'r': route, 'q': INTRO[n - 1] if n - 1 < len(INTRO) else '', 'stops': st})
    DAYREG.append(reg)
unused = [k for k in STOPS if k not in POOLID and k not in DROP]
print('stops on tour', len(POOLID), 'missing', missing, 'not on any day', unused)
USED = [STOPS[k] for k in POOLID]

# timeline
PH = {k: v for k, v in BP['PHASES'].items()}
TL = [[t[0], t[1], t[2], conf(t[3]), t[4], t[5], '', t[7], t[8], t[9], t[10] if len(t) > 10 else ''] for t in BP['TL'] if t[4] is not None]
# museums
MUS = []
for s in USED:
    if s['cat'] == 'Museum' or 'museum' in s['name'].lower():
        dn = int(POOLID[s['id']][1:].split('-')[0])
        MUS.append([s['name'], s['town'] + ', ' + s.get('country', ''), s['lat'], s['lon'], f'Day {dn}', s['text'], mins(s['min'])])
# key sites: cemeteries, memorials and camps (all on the tour)
DSITES = []
for s in USED:
    if s['cat'] in ('Cemetery', 'Camp memorial', 'Memorial'):
        DSITES.append([s['name'], f"{s['when']} · {s['cat'].lower()}", s['lat'], s['lon'], 'DOC', s['text'], s['look'], True])
# links
LINKS = []
for s in USED:
    L = [l for l in s.get('links', []) if isinstance(l, list) and len(l) == 2]
    if s.get('url') and not any(l[1] == s['url'] for l in L): L.append(['Official website', s['url']])
    if L: LINKS.append([s['name'], L])
# "where the sources disagree" per stop (shown in the stop card)
IMP = {}
for s in USED:
    if s.get('disputed'): IMP[f"{s['lat']:.3f},{s['lon']:.3f}"] = [s['disputed']]
# overnight bases (one per day)
BASES = []; seen = set()
for (title, ids, town, la, lo, reg) in D['days']:
    if town in seen: continue
    seen.add(town); BASES.append({'name': '', 'addr': '', 'info': '', 'lat': la, 'lon': lo, 'base': town})
DAYNAMES = [d['t'] for d in DAYS]
# areas for the planner (centre of each region's stops)
AREAS = []
for r in RORDER:
    ss = [s for s in USED if s['region'] == r]
    if not ss: continue
    c = [round(sum(s['lat'] for s in ss) / len(ss), 3), round(sum(s['lon'] for s in ss) / len(ss), 3)]
    towns = []
    for s in ss:
        t = s['town'].split(',')[0].split('(')[0].strip()
        if t not in towns: towns.append(t)
    AREAS.append({'id': r, 'name': RNAME[r], 'short': RNAME[r].upper(), 'blurb': ', '.join(towns[:6]), 'c': c})
AP_OVR = {s['name']: s['region'] for s in USED}
# tours (ready-made routes)
def rng(x):
    a, b = x.split('-'); return list(range(int(a), int(b) + 1))
TOURS = [dict(t, days=rng(t['days'])) for t in D['tours']]
# battles: link guide stops and timeline positions that fall inside each map
BR = {'fallweiss': ('1939-08', '1939-10', [1]), 'fallgelb': ('1940-05', '1940-06', [1]), 'britain': ('1940-05', '1940-11', [2]),
      'barbarossa': ('1941-06', '1941-12', [3]), 'stalingrad': ('1942-08', '1943-02', [4]), 'uranus': ('1942-11', '1943-02', [4]),
      'kursk': ('1943-07', '1943-08', [4, 5]), 'cassinoanzio': ('1944-01', '1944-06', [5]), 'normandy': ('1944-06', '1944-08', [6]),
      'marketgarden': ('1944-09', '1944-09', [7]), 'bulge': ('1944-12', '1945-01', [7]), 'berlin': ('1945-04', '1945-05', [8])}
for b in BT:
    w, s_, e, n_ = b['box']; ids = []; a0, a1, phs = BR.get(b['id'], ('0000', '9999', list(range(1, 9))))
    for t in TL:
        if w <= t[5] <= e and s_ <= t[4] <= n_ and t[7] in phs: ids.append('tl' + str(t[0]))
    for s in USED:
        if w <= s['lon'] <= e and s_ <= s['lat'] <= n_ and s['pri'] <= 2 and a0 <= (s.get('sort') or '')[:7] <= a1: ids.append(POOLID[s['id']])
    b['sites'] = ids[:14]; b.pop('src', None)
# glossary
GLOSS = BP['GLOSS']
FACTORS = [[f[0], f[1], f[2] if len(f) > 2 else ''] for f in BP['FACTORS']]
CLOCK = BP['CLOCK']
# panels (regional map panels for long routes): one per region, in order
PANELS_JS = '[' + ','.join('{t:%s,in:p=>apRegionOf(p)===%s}' % (J(RNAME[r].upper()), J(r)) for r in RORDER) + ']'
REGIONS = [[a['short'], a['c'][0], a['c'][1]] for a in AREAS]
AAR = {}
for s in USED:
    a = s.get('aar') or {}
    if not a: continue
    q = a.get('q')
    if s.get('solemn'): q = None
    AAR[POOLID[s['id']]] = {'when': a.get('when', ''), 'sort': s.get('sort', '') + 'T12:00' if s.get('sort') and len(s['sort']) == 10 else s.get('sort', ''),
                            'ev': a.get('ev', ''), 'q': q, 'rem': a.get('rem', ''), 'solemn': bool(s.get('solemn')), 'st': a.get('st', '')}
json.dump({'POOLID': POOLID}, open(f'{B}/poolid.json', 'w'))

# ---------------- constants in the page ----------------
setconst('IMP', J(IMP)); setconst('TL', J(TL)); setconst('PHASES', J(PH)); setconst('DAYS', J(DAYS)); setconst('MUS', J(MUS))
setconst('LINKS', J(LINKS)); setconst('BASES', J(BASES)); setconst('DAYNAMES', J(DAYNAMES)); setconst('DD_SEQ', '{}')
setconst('FACTORS', J(FACTORS)); setconst('CLOCK', J(CLOCK)); setconst('DSITES', J(DSITES)); setconst('REGIONS', J(REGIONS))
setconst('TOWNS', '[]'); setconst('LINES', '[]'); setconst('GLOSS', J(GLOSS)); setconst('BATTLES', J(BT))
setconst('AP_AREAS', J(AREAS)); setconst('AP_OVR', J(AP_OVR))
# PANELS spans several lines in the template
a = T.index('const PANELS=['); b = T.index('}];', a) + 3
T = T[:a] + 'const PANELS=' + PANELS_JS + ';' + T[b:]
# APP config
a = T.index('const APP={'); b = T.index('return best}};', a) + len('return best}};')
APP = ('const APP={clusters:null,centerLat:50.5,easyDays:0,easyExclude:[],easyFits:12,dayChoices:[1,2,3,4,5,6,7],\n'
       ' isEasy:p=>p.pri<=1,\n'
       ' modeEasy:["Must-see only","Only the essential sites of each day, for a quicker trip."],\n'
       ' modeFull:["Everything","Every site on the route, as the days allow."],\n'
       ' bigMapTitle:"EUROPE 1939 – 1945 — CEMETERIES, MEMORIALS AND CAMPS",heroMapTitle:"THE WAR IN EUROPE — EVERY SITE IN THIS GUIDE",heroMapCap:"Overview · red dots = sites in this guide · tap to enlarge",\n'
       ' tlMapTitle:"THE WAR IN DATE ORDER, 1939 – 1945",tlOmit:[],\n'
       ' tours:' + J(TOURS) + ',dayReg:' + J(DAYREG) + ',\n'
       ' baseFor:(last)=>{let best=0,bd=1e9;BASES.forEach((b,i)=>{const d=Math.hypot(b.lat-last.lat,(b.lon-last.lon)*0.64);if(d<bd){bd=d;best=i}});return best}};')
T = T[:a] + APP + T[b:]
json.dump({'DAYS': len(DAYS), 'TL': len(TL), 'MUS': len(MUS), 'DSITES': len(DSITES), 'stops': len(POOLID)}, open(f'{B}/counts.json', 'w'))
exec(open(f'{B}/assemble_tour.py').read())
exec(open(f'{B}/assemble_html.py').read())
exec(open(f'{B}/assemble_misc.py').read())
open(f'{B}/app/index.html', 'w').write(T)
print('wrote', len(T))
