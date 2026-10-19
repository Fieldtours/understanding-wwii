# Plan the map boxes for Understanding WWII.
#  close-ups: stops within 15 km grouped; box = stops +-0.07 lat / +-0.09 lon (scaled by latitude), 4550 px/deg
#  middle:    stops within 40 km grouped; box = stops +-0.2 lat / +-0.26 lon, 1400 px/deg
#  regional:  hand-made boxes over the areas with stops, 600 px/deg
#  overview:  all of Europe (Natural Earth), 300 px/deg
import json, glob, math
S = []
for f in sorted(glob.glob('/home/claude/uwwii/Research/regions/*.json')):
    d = json.load(open(f))
    for s in d['stops']:
        if s.get('lat') is None or s['id'] in ('sicily-museum',): continue
        S.append({'id': s['id'], 'lat': s['lat'], 'lon': s['lon'], 'r': d['region']})
def km(a, b): return 6371 * math.hypot(math.radians(a['lat'] - b['lat']), math.radians(a['lon'] - b['lon']) * math.cos(math.radians(a['lat'])))
def cluster(R):
    G = []
    for s in S:
        hit = [g for g in G if any(km(s, t) <= R for t in g)]
        if not hit: G.append([s]); continue
        m = hit[0]; m.append(s)
        for h in hit[1:]: m.extend(h); G.remove(h)
    return G
def merc(lat): return math.log(math.tan(math.pi/4 + math.radians(lat)/2))
def box(g, dla, dlo):
    k = 1 / math.cos(math.radians(sum(s['lat'] for s in g) / len(g))) * math.cos(math.radians(50))  # keep boxes ~square in km
    return [round(min(s['lon'] for s in g) - dlo*k, 4), round(min(s['lat'] for s in g) - dla, 4),
            round(max(s['lon'] for s in g) + dlo*k, 4), round(max(s['lat'] for s in g) + dla, 4)]
def size(b, ppd):
    w = (b[2] - b[0]) * ppd; h = (merc(b[3]) - merc(b[1])) * 180 / math.pi * ppd
    return round(w), round(h)
OUT = []
REG = [  # regional tier boxes (W S E N)
 ('rg-seeng', [-3.3, 50.5, 1.6, 53.6]), ('rg-chan', [-2.0, 48.6, 3.4, 51.3]), ('rg-bret', [-4.8, 47.0, -1.9, 48.6]),
 ('rg-lim', [0.7, 45.7, 1.4, 46.1]), ('rg-east', [2.1, 48.3, 7.9, 50.9]), ('rg-low', [3.2, 49.4, 7.6, 53.0]),
 ('rg-nger', [7.5, 51.6, 14.5, 54.4]), ('rg-cger', [10.0, 49.0, 15.2, 52.9]), ('rg-sger', [10.5, 47.4, 14.8, 49.7]),
 ('rg-pl-n', [17.5, 53.4, 22.0, 54.7]), ('rg-pl-c', [18.0, 50.8, 24.3, 53.4]), ('rg-pl-s', [14.0, 49.6, 23.7, 50.9]),
 ('rg-it', [12.0, 41.2, 14.2, 42.1]), ('rg-malta', [14.1, 35.75, 14.65, 36.1]), ('rg-crete', [23.5, 35.2, 24.4, 35.65]),
 ('rg-oslo', [8.2, 59.6, 11.0, 60.0]), ('rg-narvik', [16.9, 68.2, 17.8, 68.6]),
]
for k, b in REG:
    w, h = size(b, 600); OUT.append({'id': k, 'tier': 'reg', 'b': b, 'qb': b, 'w': w, 'h': h})
for i, g in enumerate(sorted(cluster(40), key=lambda g: (g[0]['r'], g[0]['id']))):
    b = box(g, 0.2, 0.26); w, h = size(b, 1400)
    OUT.append({'id': 'm-' + min(x['id'] for x in g), 'tier': 'mid', 'b': b, 'qb': b, 'w': w, 'h': h, 'stops': [s['id'] for s in g]})
for i, g in enumerate(sorted(cluster(15), key=lambda g: (g[0]['r'], g[0]['id']))):
    b = box(g, 0.07, 0.09); w, h = size(b, 4550)
    OUT.append({'id': 'c-' + min(x['id'] for x in g), 'tier': 'close', 'b': b, 'qb': b, 'w': w, 'h': h, 'stops': [s['id'] for s in g]})
json.dump(OUT, open('/home/claude/gmap/uw/groups.json', 'w'), indent=1)
for t in ('reg', 'mid', 'close'):
    L = [g for g in OUT if g['tier'] == t]
    px = sum(g['w'] * g['h'] for g in L)
    print(t, len(L), 'boxes', round(px / 1e6), 'Mpx', 'max', max((g['w'], g['h']) for g in L))
print(len(S), 'stops')
