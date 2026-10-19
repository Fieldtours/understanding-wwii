# Page text: home, briefing, timeline, tour, the war (big picture), museums, origins, key figures, armies.
C = json.load(open(f'{B}/counts.json'))
NSTOP = C['stops']; NTL = C['TL']; NDAYS = C['DAYS']; NMUS = C['MUS']; NBAT = len(BT)
NPEOPLE = len(PP['people'])
PDFNAME = 'pdf/Understanding-WWII-Europe-1939-1945.pdf'
PDFINFO = json.load(open(f'{B}/pdfinfo.json')) if os.path.exists(f'{B}/pdfinfo.json') else {'pages': 0, 'mb': 0}
PDFSMALL = f"{PDFINFO['pages']} pages · {PDFINFO['mb']} MB" if PDFINFO['pages'] else 'printable guide'
PDFBOX = lambda i: f'''<div class="pdfdl pdfbtn" id="{i}"><div class="pk">📄 Download as PDF</div><p>Everything in this guide as a printable PDF: read it offline, print it, or keep it for the trip.</p><a class="pdl main" href="{PDFNAME}" download data-pdf><b>⬇ Understanding WWII · Europe 1939–1945</b><small>{PDFSMALL}</small></a><p class="pn">Tip: download before you travel — once saved it needs no signal.</p></div>'''

# ---------- home ----------
a = T.index('<section id="p-home"'); b = T.index('</section>', a)
home = T[a:b]
home = re.sub(r'<div class="hero-top">.*?</div>', '<div class="hero-top"><span>War room briefing · Europe 1939–1945</span><span>First edition · 2026</span></div>', home, count=1, flags=re.S)
home = re.sub(r'<div class="hero-title">.*?</div>', '<div class="hero-title">Understanding<br>WWII</div>', home, count=1, flags=re.S)
home = re.sub(r'<div class="hero-sub">.*?</div>', '<div class="hero-sub">The Second World War in Europe · Dunkirk · the Battle of Britain · Stalingrad · Normandy · Arnhem · Bastogne · Berlin · the camps</div>', home, count=1, flags=re.S)
home = re.sub(r'<div class="hero-stamp">.*?</div>', '<div class="hero-stamp">1 Sep 1939 – 8 May 1945</div>', home, count=1, flags=re.S)
home = re.sub(r'<p class="hero-lede">.*?</p>', f'<p class="hero-lede">{E(BP["HOME_LEDE"])}</p>', home, count=1, flags=re.S)
tiles = f'''<div class="tiles"><button type="button" class="tile" data-go="tab-tour"><span class="k">01</span><b>Tour planner</b><span>A ready-made route, only the area you choose, or your own list of sites — with the driving order, the overnights and the map links.</span><em>Ready-made · by area · your own</em></button><button type="button" class="tile" data-go="tab-brief"><span class="k">02</span><b>Briefing</b><span>The war in Europe in brief, the accuracy rule, where the sources disagree, and how the buttons work.</span><em>Start here</em></button><button type="button" class="tile" data-go="tab-time"><span class="k">03</span><b>Timeline</b><span>{NTL} dated positions, from the first shots at Westerplatte to the surrender in Berlin, in eight phases.</span><em>1 Sep 1939 – 8 May 1945</em></button><button type="button" class="tile" data-go="tab-dday"><span class="k">04</span><b>The war</b><span>What decided the war, two clocks side by side — West and East — and the cemeteries, memorials and camps.</span><em>Factors · clocks · key sites</em></button><button type="button" class="tile" data-go="tab-dday" data-scroll="battles"><span class="k">05</span><b>Battle maps</b><span>{NBAT} battles step by step: where the armies stood and how they moved, drawn over the real map.</span><em>Poland 1939 to Berlin 1945</em></button></div>
      <details class="uxmore"><summary class="tile"><span class="k">+</span><b>More to explore</b><span>Museums, Key figures, The armies, Origins and Weapons.</span></summary><div class="tiles"><button type="button" class="tile" data-go="tab-mus"><span class="k">06</span><b>Museums</b><span>The museums worth your time, from London to Volgograd.</span><em>{NMUS} museums · opening notes</em></button><button type="button" class="tile" data-go="tab-men"><span class="k">07</span><b>Key figures</b><span>Leaders, commanders, resisters, rescuers and soldiers — Allied, Soviet and German.</span><em>{NPEOPLE} short biographies</em></button><button type="button" class="tile" data-go="tab-armies"><span class="k">08</span><b>The armies</b><span>How the German, British, French, American, Soviet and Polish forces were organised.</span><em>Nation by nation</em></button><button type="button" class="tile" data-go="tab-orig"><span class="k">09</span><b>Origins</b><span>Versailles, Hitler's rise, appeasement, the Nazi–Soviet Pact and the road to war.</span><em>Before the story</em></button><button type="button" class="tile" data-go="tab-weap"><span class="k">10</span><b>Weapons &amp; equipment</b><span>Rifles, machine guns, tanks, aircraft, U-boats, Enigma and the V-weapons, with drawings.</span><em>24 items explained</em></button></div></details>'''
home = re.sub(r'<div class="tiles">.*?</details>', lambda m: tiles, home, count=1, flags=re.S)
home = re.sub(r'<div class="pdfdl pdfbtn" id="pdfdl-home">.*?</div>\n', PDFBOX('pdfdl-home') + '\n', home, count=1, flags=re.S)
home = re.sub(r'<div class="memo" style="margin-top:14px"><div class="head">Before you visit</div>.*?</div>',
    '<div class="memo" style="margin-top:14px"><div class="head">Before you visit</div>\n        <p style="font-size:13.5px;margin:0"><b>Accuracy.</b> A pin marked <span class="pill c-low">LOW</span> is the centre of a search area, not an exact spot. <b>Respect.</b> The cemeteries, camps and memorials in this guide are places of remembrance and mourning first: dress and behave accordingly, and many battlefields are private land — view from the road. <b>Travel.</b> Check government travel advice before you plan: the UK and others currently advise against all travel to Russia and Belarus. <b>Safety.</b> Never pick up old ammunition — leave it and call 112.</p></div>',
    home, count=1, flags=re.S)
T = T[:a] + home + T[b:]

# ---------- briefing ----------
story = ''.join(f'<p><b>{E(p["h"])}.</b> {E(p["p"])}</p>' for p in BP['BRIEF_STORY'])
gloss = ''.join(f'<b>{E(g[0])}</b><span>{E(g[1])}</span>' for g in GLOSS)
cav = ''.join(f'<li><b>{E(c[0])}.</b> {E(c[1])}</li>' for c in BP['CAVEATS'])
brief = f'''
<h2>Briefing</h2>
      <div class="memo"><div class="head">War room briefing · read before moving out</div>
        <p>This guide covers the Second World War in Europe from the first shots at Westerplatte on 1 September 1939 to the German surrender signed at Reims on 7 May and in Berlin on 8 May 1945. It is not one battlefield but a whole continent: {NSTOP} places in {len(AREAS)} areas, from Liverpool to Volgograd and from Narvik to Malta, chosen so that together they tell the story of how the war began, turned and ended — and what it did to the people caught in it. Two sets of positions are kept apart on purpose:</p>
        <p><b>TIMELINE</b> — {NTL} historical positions in date order: what happened, where and when, and who was there. <b>TOUR</b> — driving stops in road order, in ready-made routes from one to fifty-two days, or only the area you choose, or your own list. Every stop opens directly in Google Maps.</p>
      </div>
      <h3>The accuracy rule</h3>
      <p>A GPS coordinate can locate a museum, cemetery, bridge or memorial precisely; it cannot turn a battle across a whole city or a forest into an exact point. When the records only place a unit "somewhere in the woods", this guide says so rather than invent a spot, and where historians disagree — over numbers, times or motives — the text tells you. Each position carries a coloured label:</p>
      <div class="legend"><span class="pill c-high">HIGH</span><span>exact spot known — a landmark, museum, cemetery, memorial, bridge or building, or a position fixed by the records</span><span class="pill c-med">MEDIUM</span><span>well supported, but the exact spot is uncertain</span><span class="pill c-low">LOW</span><span>general area only — the pin is the centre of a search area</span></div>
      <h3>Words to know</h3>
      <div class="gloss">{gloss}</div>
      <div class="note"><b>Respect the ground.</b> Many places in this guide are cemeteries, camps and execution sites where millions of people are mourned. They are places of remembrance first and tour stops second: dress and behave accordingly, follow the memorials' own rules on photography, and remember that guides at the camps are often descendants of victims or survivors. On the old battlefields, shells, grenades and mines still surface every year: never touch or pick up a metal object — leave it, mark the spot in your mind and call 112. Many positions are on private land: view them from roads and marked paths.</div>

      <h3>The story in brief</h3>
      {story}

      <h3>Why the whole route</h3>
      <p>{E(BP["WHY"])}</p>
      <div class="memo"><div class="head">Using your location</div>
        <p>Tap the <b>📍</b> button at the top right and allow location when your phone asks. You then get a blue <b>YOU</b> dot on the maps, the distance and direction to every stop, a <b>Near me</b> list of the ten closest waypoints, and a pop-up when you reach one — within about 120 m of a green HIGH pin, 300 m of a yellow MEDIUM and 800 m of a red LOW area. The app has to be open on screen, and it works when opened from its web address (https://…). <b>Your location never leaves your phone</b> — nothing is sent or stored anywhere. Tap <b>Turn off</b> to stop.</p>
      </div>
      <div class="memo"><div class="head">Using the map buttons</div>
        <p>The <b>Google Maps</b> button on every stop opens a pin on the exact waypoint — not directions from where you are — so you can see the spot first and ask for directions when you want them. On the Tour tab each day also has a big <b>Google Maps route</b> button that loads the whole day's stops, in order, as one route. Tap <b>✓</b> on a stop to mark it visited — the tick is remembered on this device only. Everything you write or tick stays on your phone: there are no accounts and no tracking. On an iPhone, adding the guide to the Home Screen keeps your ticks and notes safe.</p>
      </div>
<div class="memo" id="caveats"><div class="head">Where the sources disagree</div><p>Every stop in this guide was researched against official histories, war-graves and memorial records, the museums' own websites and other sources, and the main claims were checked again. Where sources could not agree, or a story is disputed, the text says so — look for <b>Where the sources disagree</b> on a stop. The main cases:</p><ul class="caveats">{cav}<li><b>Positions and battle maps.</b> Every pin carries an accuracy label. The battle maps are schematic: front lines, arrows and unit positions are drawn by hand from historical maps and are approximate.</li></ul></div>
{PDFBOX("pdfdl-brief")}
'''
section('p-brief', brief)

# ---------- timeline ----------
section('p-time', f'''
      <h2>The war in date order</h2>
      <p style="font-size:14px">{NTL} dated positions, from the first shots at Westerplatte on 1 September 1939 to the surrender in Berlin on 8 May 1945, in eight phases. On the maps the dashed line joins the points in date order — it is not the route the armies took. Pick a phase to see it on its own map.</p>
      <div class="filters" id="tfilters"></div>
      <div id="tmap"></div>
      <div id="tlist"></div>
''')

# ---------- tour ----------
a = T.index('<div class="memo" id="classicbox">'); b = T.index('<details class="addbox" id="addbox">', a)
T = T[:a] + '''<div class="memo" id="classicbox"><div class="head">Which tour?</div>
        <div class="modepick" id="modepick" style="display:block"></div>
        <div class="head" style="margin-top:12px">How many days?</div>
        <div class="dayspick" id="dayspick"></div>
        <p style="margin:8px 0 0;font-size:13px">Each tour runs in driving order with about 7 hours of visits and driving a day and an overnight town at the end of each day. With fewer days the planner keeps the most important sites. Britain to the Continent: ferry Dover – Dunkirk (about 2 hours) or the Channel Tunnel. Italy, Malta, Crete, Norway and the Eastern Front are separate trips by air.</p>
      </div>
      ''' + T[b:]

# ---------- the war (big picture) ----------
section('p-dday', f'''
      <h2>The war in Europe: what decided it</h2>
      <p style="font-size:15px">Six years of war across a whole continent, from the Atlantic to the Volga. This tab shows the main battles step by step, explains the forces that decided the war, sets the West and the East side by side, and lists the cemeteries, memorials and camps in this guide.</p>
      <h3>Battle maps</h3>
      <p style="font-size:15px">{NBAT} battles, from the invasion of Poland to the fall of Berlin. Pick a battle and tap each moment to see how the armies moved. Below each map are the guide's stops that belong to that battle.</p>
      <div id="battles"></div>
      <h3>The decisive factors</h3>
      <div id="factors"></div>
      <h3>Two clocks: the West and the East</h3>
      <p style="font-size:14.5px">Key dates of the war in the West and the Mediterranean, beside what was happening at the same time on the Eastern Front and in the wider war.</p>
      <div class="clock" id="clock"></div>
      <h3>Cemeteries, memorials and camps</h3>
      <p style="font-size:14.5px">The war cemeteries of every nation, the memorials and the camps in this guide, west to east. All of them are on one of the ready-made tours. Tap a map to enlarge it.</p>
      <div id="dmap"></div>
      <div id="dlist"></div>
''')
rep('let c=`<div class="hd"><span>Date</span><span>In Italy</span><span>Elsewhere in the war</span></div>`;',
    'let c=`<div class="hd"><span>Date</span><span>' + BP['CLOCK_HEADS'][0] + '</span><span>' + BP['CLOCK_HEADS'][1] + '</span></div>`;')
rep('<div><span class="lbl">In Italy</span>${esc(r[1])}</div><div class="e"><span class="lbl">Elsewhere in the war</span>${esc(r[2])}</div>',
    '<div><span class="lbl">' + BP['CLOCK_HEADS'][0] + '</span>${esc(r[1])}</div><div class="e"><span class="lbl">' + BP['CLOCK_HEADS'][1] + '</span>${esc(r[2])}</div>')
rep('<div class="fig">${esc(f[2])}</div></div>`', '${f[2]?`<div class="fig">${esc(f[2])}</div>`:""}</div>`')
rep('when:d[1]+(d[7]?" · on the classic tour":" · extra, not on the "+DAYS.length+"-day tour")', 'when:d[1]')

# ---------- museums ----------
srcs = sorted({u for s in USED for u in s.get('sources', []) if isinstance(u, str) and u.startswith('http')} | {u for u in BP.get('SOURCES', []) if isinstance(u, str)})
srcli = ''.join(f'<li><a href="{E(u)}" target="_blank" rel="noopener">{E(re.sub("^https?://(www\\.)?", "", u))}</a></li>' for u in srcs)
section('p-mus', f'''
      <h2>Museums &amp; memorials</h2>
      <p style="font-size:14px">The museums worth your time, from London to Volgograd, with the tour day they sit on. Opening hours, booking rules and prices change — check the museum's own website before you go.</p>
      <div id="muslist"></div>
      <h3>Sources</h3>
      <p style="font-size:12.5px;color:var(--ink2)">Official histories (US Army Center of Military History, British, Canadian and other national histories); Commonwealth War Graves Commission; American Battle Monuments Commission; Volksbund; the memorial and museum sites' own websites; Wikipedia and Wikidata in several languages for cross-checks; TracesOfWar. Every text was written by one researcher and checked by another; the disputed points are listed in the Briefing and on each stop.</p>
      <details class="srcs"><summary>All {len(srcs)} web sources ▾</summary><ol class="srclist">{srcli}</ol></details>
''')

# ---------- origins ----------
og = ''
for sec in BP['ORIGINS']:
    if sec['h'].startswith('5'): continue
    og += f'<h3>{E(sec["h"])}</h3>' + ''.join(f'<p><b>{E(p["b"].rstrip("."))}.</b> {E(p["p"])}</p>' if p.get('b') else f'<p>{E(p["p"])}</p>' for p in sec['paras'])
section('p-orig', f'''
<h2>Origins — how the war came</h2>
      <div class="memo"><div class="head">Background briefing · read before the timeline</div>
        <p>The Second World War in Europe did not begin out of nowhere on 1 September 1939. This page explains the peace of 1919 and the crises of the 1930s, how Hitler came to power and rearmed Germany, why Britain and France gave way at Munich, how Hitler and Stalin divided eastern Europe between them — and where the murder of Europe's Jews fits into the story of the war.</p>
      </div>
{og}
<p class="foot" style="text-align:left">See also: The armies — how the forces of each nation were organised.</p>
''')
arm = [s for s in BP['ORIGINS'] if s['h'].startswith('5')]
armies = ''.join(f'<p><b>{E(p["b"].rstrip("."))}.</b> {E(p["p"])}</p>' if p.get('b') else f'<p>{E(p["p"])}</p>' for s in arm for p in s['paras'])
section('p-armies', f'''
<h2>The armies</h2>
<div class="memo"><div class="head">Who fought in Europe</div><p>Armies of a dozen nations fought across Europe between 1939 and 1945, organised in different ways and equipped very differently. These notes explain the main ones; the Weapons page shows what they carried.</p></div>
{armies}
''')

# ---------- key figures ----------
RIB = [('Military Cross', 'mc'), ('Distinguished Service Cross', 'dsc'), ('Legion of Honour', 'lh'), ("Légion d'honneur", 'lh'), ('Legion of Merit', 'lom'), ('Purple Heart', 'ph'), ('Silver Star', 'ss'), ('Bronze Star', 'bs')]
def rib(d):
    for k, c in RIB:
        if k.lower() in d.lower(): return c
    return None
def placename(i):
    s = STOPS.get(i); return s['name'].split(',')[0] if s else i
men = f'''<h2>Key figures</h2>
<div class="memo syn"><div class="head">A war of many nations</div><p>{E(PP["intro"])}</p><details class="synmore"><summary>Read how the command worked ▾</summary>{"".join(f'<p><b>{E(p["b"].rstrip("."))}.</b> {E(p["p"])}</p>' for p in PP["command"])}</details></div>
<p style="font-size:14px;margin:12px 0 0">{NPEOPLE} people who shaped the war in Europe. Tap a name to read their story, the medals they earned and what became of them. Coloured ribbons are shown only for decorations with a matching ribbon; others are listed inside the card.</p>
<div class="men-jump">{"".join(f'<button type="button" data-mjump="{g["id"]}">{E(g["name"].lower())}</button>' for g in PP["groups"])}</div>
'''
num = 0
for g in PP['groups']:
    ppl = [p for p in PP['people'] if p['group'] == g['id']]
    if not ppl: continue
    men += f'<h3 class="men-grp" id="{g["id"]}">{E(g["name"])}</h3>\n'
    for p in ppl:
        num += 1
        decos = p.get('decorations') or []
        ribs = [rib(d) for d in decos]; rr = [r for r in ribs if r]
        side = (f'<span class="ribs">' + ''.join(f'<span class="rib rib-{r}" title="{E(d)}" aria-label="{E(d)}"></span>' for d, r in zip(decos, ribs) if r) + '</span>') if rr else ''
        body = f'<p class="life">Born {E(p["born"])}' + (f' · died {E(p["died"])}' if p.get('died') else '') + '</p>'
        body += ''.join(f'<p>{E(x)}</p>' for x in p['story'])
        if p.get('caveat'): body += f'<p><b>Caveat.</b> {E(p["caveat"])}</p>'
        if decos: body += '<div class="decos"><div class="dh">Decorations</div><ul style="list-style:none;margin:0;padding:0">' + ''.join(f'<li><span class="{("rib rib-"+r) if r else "nr"}"></span><span>{E(d)}</span></li>' for d, r in zip(decos, ribs)) + '</ul></div>'
        if p.get('after'): body += f'<div class="look"><b>After the war:</b> {E(p["after"])}</div>'
        places = ';'.join(placename(i) for i in p.get('places', []))
        nick = f' <span class="nick">“{E(p["nick"])}”</span>' if p.get('nick') else ''
        men += f'<article class="card fold man" id="{p["id"]}" data-key="{p["id"]}" data-places="{E(places)}"><button type="button" class="top" aria-expanded="false"><div class="num">{num}</div><div class="ttl"><b>{E(p["name"])}</b>{nick}<div class="when">{E(p["role"])}</div></div><span class="side">{side}<span class="more"></span></span></button><div class="body">{body}</div></article>\n'
men += '<p class="foot" style="text-align:left">Sources: Wikipedia, Britannica, the memorials\' and museums\' own biographies, national archives. Disputed points are noted in each card.</p>\n'
section('p-men', men)
