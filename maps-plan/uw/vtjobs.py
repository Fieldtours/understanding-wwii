# Jobs for render_vt.html: the tile zoom used for each drawing is fixed per tier (the zooms we saved).
import math, sys
sys.path.insert(0, '/home/claude/gmap')
from tiles import chunk_jobs, PR
AVAIL = {'close': [11, 12, 13], 'mid': [9, 10, 11], 'reg': [7, 8, 9], 'ov': [4, 5, 6]}
OFF = {'close': 2, 'mid': 2, 'reg': 1, 'ov': 0}
def vt_jobs(lvl, tier, stem, textScale=1.35, bare=False):
    J = chunk_jobs(lvl, 'vt', stem, textScale=textScale)
    for j in J:
        mz = j['zoom']; fz = math.floor(mz)
        src = min(max(fz + OFF[tier], AVAIL[tier][0]), AVAIL[tier][-1])
        k = src - fz
        j['shift'] = k
        j['srcMax'] = src
        if bare: j['bare'] = True
    return J
