# Head, welcome, header, theme, storage keys, diary, weapons, More page, maps, counter.
TITLE = 'Understanding WWII: the Second World War in Europe 1939–1945 — Battlefield Field Guide | DZ Charlie'
DESC = ('Free offline phone guide to the Second World War in Europe, 1939–1945: Westerplatte, Dunkirk, the Battle of Britain, '
        'Stalingrad, Normandy, Arnhem, Bastogne, Berlin and the camps — routes, maps, museums and memorials.')
URL = 'https://dzcharlie.com/understanding-wwii/'
a = T.index('<title>'); b = T.index('</script><style>', a) + len('</script>')
ld = {"@context": "https://schema.org", "@type": "TravelApplication", "name": "Understanding WWII — DZ Charlie field guide to the Second World War in Europe",
      "url": URL, "description": DESC, "image": URL + "welcome-wide.jpg", "applicationCategory": "TravelApplication", "operatingSystem": "Web, iOS, Android",
      "inLanguage": "en", "isAccessibleForFree": True, "offers": {"@type": "Offer", "price": "0", "priceCurrency": "EUR"},
      "about": "The Second World War in Europe, 1 September 1939 – 8 May 1945", "publisher": {"@type": "Organization", "name": "DZ Charlie", "url": "https://dzcharlie.com/"}}
head = (f'<title>{E(TITLE)}</title><meta name="description" content="{E(DESC)}"><link rel="canonical" href="{URL}"><meta property="og:type" content="website">'
        f'<meta property="og:site_name" content="DZ Charlie"><meta property="og:url" content="{URL}"><meta property="og:title" content="{E(TITLE)}">'
        f'<meta property="og:description" content="{E(DESC)}"><meta property="og:image" content="{URL}welcome-wide.jpg"><meta name="twitter:card" content="summary_large_image">'
        f'<meta name="twitter:title" content="{E(TITLE)}"><meta name="twitter:description" content="{E(DESC)}"><meta name="twitter:image" content="{URL}welcome-wide.jpg">'
        f'<script type="application/ld+json">{json.dumps(ld, ensure_ascii=False)}</script>')
T = T[:a] + head + T[b:]
rep('<meta name="theme-color" content="#3a4118">', '<meta name="theme-color" content="#24323f">')

# fonts: the stencil face of this guide
T = T.replace('@font-face{font-family:"Stardos Stencil";font-weight:400;font-display:swap;src:url(fonts/stardos-stencil-400.woff2) format("woff2")}\n'
              '@font-face{font-family:"Stardos Stencil";font-weight:700;font-display:swap;src:url(fonts/stardos-stencil-700.woff2) format("woff2")}\n',
              '@font-face{font-family:"Big Shoulders Stencil";font-weight:400 700;font-display:swap;src:url(fonts/bss-700.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n'
              '@font-face{font-family:"Big Shoulders Stencil";font-weight:400 700;font-display:swap;src:url(fonts/bss-700-ext.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n'
              '@font-face{font-family:"Big Shoulders Stencil";font-weight:800 900;font-display:swap;src:url(fonts/bss-800.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n'
              '@font-face{font-family:"Big Shoulders Stencil";font-weight:800 900;font-display:swap;src:url(fonts/bss-800-ext.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}\n', 1)
T = T.replace('Stardos Stencil', 'Big Shoulders Stencil')
T = T.replace('stardos-stencil-400.woff2', 'bss-700.woff2').replace('stardos-stencil-700.woff2', 'bss-800.woff2')

# theme: the map-room palette
rep('''  --bg:#f3f1e9; --surface:#ffffff; --surface2:#f8f6ee; --line:#e3dfcf; --line2:#cfc9b2;
  --ink:#1c1e16; --ink2:#4b4d40; --faint:#77796a;
  --brand:#3a4118; --brand2:#4b5320; --brandInk:#f4f1e4; --accent:#a3261e; --accentInk:#fff;''',
'''  --bg:#efebe0; --surface:#fffdf8; --surface2:#f7f4ec; --line:#e2dccb; --line2:#c9c1aa;
  --ink:#1b1f24; --ink2:#3d4550; --faint:#6b717b;
  --brand:#24323f; --brand2:#34495c; --brandInk:#efe9da; --accent:#a3261e; --accentInk:#fff;''')
rep('''  --bg:#121410; --surface:#1d2018; --surface2:#23261d; --line:#30342a; --line2:#454a3b;
  --ink:#eeede4; --ink2:#c4c3b4; --faint:#939483;
  --brand:#2c3214; --brand2:#a9b56a; --brandInk:#f1f0e3; --accent:#e0675b; --accentInk:#1b0d0b;''',
'''  --bg:#10151a; --surface:#19212a; --surface2:#1f2832; --line:#2b3540; --line2:#3e4a57;
  --ink:#ecebe4; --ink2:#c3c7cc; --faint:#8f979f;
  --brand:#1b2631; --brand2:#a9c2d8; --brandInk:#efe9da; --accent:#e0675b; --accentInk:#1b0d0b;''')
rep('  --olive2:#c3cd88; --red2:#f08b80;', '  --olive2:#c3d3e2; --red2:#f08b80;')
for o, n in [('#4b5320', '#34495c'), ('#3a4118', '#24323f'), ('#2a2f14', '#1b2631'), ('#8b8a4e', '#7c8b98'), ('#a9a77a', '#9fb0bf'), ('#d9cfae', '#c9d3db')]:
    T = T.replace(o, n)
# map wash: blue-grey (the map-room table) instead of khaki
T = T.replace('fill="#c9d3db" opacity=".16"/>`;  /* khaki wash: the field-manual tone of the series */', 'fill="#c9d3db" opacity=".12"/>`;  /* blue-grey wash: the map-room table */')
# welcome screen
rep('.wel .welbg{position:absolute;inset:-40px;background:#2a241c url(welcome.jpg) center/cover no-repeat;filter:blur(22px) brightness(.55) sepia(.3)}',
    '.wel .welbg{position:absolute;inset:-40px;background:#1b2631 url(welcome.jpg) center/cover no-repeat;filter:blur(22px) brightness(.5)}')
T = T.replace('.wel{position:fixed;inset:0;z-index:1000;display:flex;flex-direction:column;background:#1c1a15;', '.wel{position:fixed;inset:0;z-index:1000;display:flex;flex-direction:column;background:#1b2631;')
a = T.index('<img class="welimg" src="welcome.jpg" alt="'); b = T.index('"></picture>', a)
T = T[:a] + '<img class="welimg" src="welcome.jpg" alt="Understanding WWII — the Second World War in Europe, 1939–1945. Cover: a wartime RAF operations room, plotters moving markers across a large map table, under the title in stencil letters and a red MOST SECRET stamp' + T[b:]
rep('<p class="welt">Follow the Allied armies from the beaches of Sicily to the Alps, 1943–1945.</p>', '<p class="welt">The whole war in Europe, from the first shots at Westerplatte to the surrender in Berlin, 1939–1945.</p>')

# header and page titles
rep('const CAMP="Italy";', 'const CAMP="Europe 1939–45";')
rep('dday:"The campaign"', 'dday:"The war"')
rep('$("#rdeyebrow").textContent=c==="home"?"Into Europe · field guide":"Into Europe · Italy 1943–45";', '$("#rdeyebrow").textContent=c==="home"?"Understanding WWII · field guide":"Understanding WWII · Europe 1939–45";')
T = T.replace('<small id="rdeyebrow">Into Europe · field guide</small><b id="rdtitle">Italy</b>', '<small id="rdeyebrow">Understanding WWII · field guide</small><b id="rdtitle">Europe 1939–45</b>')
T = T.replace('aria-controls="p-dday">Campaign</button>', 'aria-controls="p-dday">The war</button>')
T = T.replace('aria-label="War Diary — your trip journal: save or share each day of your route" title="War Diary — your trip journal"', 'aria-label="Despatches — your trip journal: save or share each day of your route" title="Despatches — your trip journal"')

# storage keys and caches: this guide's own prefix
for k in ['plan', 'today', 'visited', 'aar', 'ap-', 'arrived', 'myroute', 'saved2-', 'style', 'tourpick', 'welcomed', 'seen2']:
    T = T.replace(f'"ie-{k}', f'"uw-{k}').replace(f"'ie-{k}", f"'uw-{k}")
T = T.replace('"ie-core2"', '"uw-core1"').replace('"ie-data2"', '"uw-data1"')

# diary: "Despatches"
a = T.index('AAR_CFG={key:"ie-aar",data:') if 'AAR_CFG={key:"ie-aar",data:' in T else T.index('AAR_CFG={key:"uw-aar",data:')
b = T.index('\n tourCard:false', a)
T = T[:a] + 'AAR_CFG={key:"uw-aar",data:' + J(AAR) + ',' + T[b:]
rep('docName:"WAR DIARY",docNameShort:"War Diary",plural:"War Diary pages",short:"pages",guide:"Into Europe · Italy 1943–45",place:"ITALY",',
    'docName:"DESPATCHES",docNameShort:"Despatches",plural:"My despatches",short:"despatches",guide:"Understanding WWII · Europe 1939–45",place:"EUROPE",')
rep('foot:"DZ CHARLIE · INTO EUROPE",stamp:"VISITED",done:"COMPLETED",coverTitle:"IN THE FOOTSTEPS OF THE ITALIAN CAMPAIGN",fileBase:"into-europe-italy",',
    'foot:"DZ CHARLIE · UNDERSTANDING WWII",stamp:"SEEN",done:"COMPLETED",coverTitle:"A JOURNEY THROUGH THE SECOND WORLD WAR",fileBase:"understanding-wwii",')
rep('intro:"At the end of each day, write one page of your war diary:', 'intro:"At the end of each day, write your despatch home:')
rep('theme:{paper:"#ece5cc",ink:"#1c1a15",ink2:"#3f3a2e",faint:"#6f6a58",title:"#24323f",when:"#1c1a15",rule:"#7c8b98",box:"#e2d9ba",stamp:"#a3261e",band:null,bandInk:"#efe9d2",',
    'theme:{paper:"#e9e3d2",ink:"#1b1f24",ink2:"#3d4550",faint:"#6b717b",title:"#24323f",when:"#1b1f24",rule:"#7c8b98",box:"#dcd6c3",stamp:"#a3261e",band:null,bandInk:"#efe9da",')
rep('cover:"#24323f",coverInk:"#efe9d2",coverRule:"#9fb0bf",coverStamp:"#e0877d"}', 'cover:"#24323f",coverInk:"#efe9da",coverRule:"#9fb0bf",coverStamp:"#e0877d"}')
T = T.replace('War Diary pages', 'despatches').replace('War Diary — your trip journal', 'Despatches — your trip journal').replace('>War Diary<', '>Despatches<')

# stop cards: "Where the sources disagree" instead of "Its role in the war"
rep('<div class="ih">Its role in the war</div>', '<div class="ih">Where the sources disagree</div>')
# map captions: no fixed front lines in this guide
rep('${opts.nofront?"":" · defence lines are approximate"}', '')
rep('const cap=opts.cap?esc(opts.cap):`Regional panels from south to north · map © OpenStreetMap contributors · ${how}`;', 'const cap=opts.cap?esc(opts.cap):`Regional panels, west to east · map © OpenStreetMap contributors · ${how}`;')
rep('box:[6.9,36.55,18.7,47.0],cap:APP.heroMapCap', 'box:[-9.5,35.0,45.5,70.0],cap:APP.heroMapCap')
# hero map shows every stop (not only the key sites)
rep('function renderHome(){\n  const pts=DSITES.map((d,i)=>({key:"dd"+i,tab:"tab-dday",num:i+1,name:d[0],lat:d[2],lon:d[3],conf:"DOC"}));',
    'function renderHome(){\n  const pts=POOL.filter(p=>!p.dday).map((p,i)=>({key:p.id,tab:"tab-tour",num:i+1,name:p.name,lat:p.lat,lon:p.lon,conf:"DOC"}));')
# weapons
WJ = open(f'{RS}/weapons.js').read()
ca = WJ.index('var CATS'); wa = WJ.index('var W = ['); we = WJ.index('\n];', wa) + 3
am = WJ.index('var AMMO_ROWS'); ame = WJ.index('];', am) + 2
a = T.index('var CATS = ['); b = T.index('\n];', T.index('var W = [', a)) + 3
T = T[:a] + WJ[ca:we] + T[b:]
exec('AMMO=' + WJ[am + len('var AMMO_ROWS = '):ame - 1].strip().rstrip(';'))  # python-compatible literal
rows = ''.join('<tr>' + ''.join(f'<td>{c}</td>' for c in r) + '</tr>' for r in AMMO)
a = T.index('<tbody>', T.index('id="p-weap"')); b = T.index('</tbody>', a)
T = T[:a] + '<tbody>' + rows + T[b:]
rep('var VW=840, L=200, R=804, M=22.4, mw=(R-L)/M, rowH=34, top=66, END=22.05;', 'var VW=840, L=200, R=804, M=68.6, mw=(R-L)/M, rowH=34, top=66, END=68.25;')
rep('var phases=[["Sicily",0.3,1.53,0,0],["Salerno–Naples",2.07,3.0,1,0],["Winter Line",3.0,6.55,2,0],["Cassino & Anzio",6.55,11.13,0,0],["Rome & north",11.13,13.8,1,0],["Gothic Line & winter",13.8,21.27,2,0],["Final offensive",21.27,END,0,1]];',
    'var phases=[["Blitzkrieg",0,10,0,0],["Britain alone",10,21.7,1,0],["Barbarossa",21.7,29,2,0],["Turning points",29,46.3,0,0],["Italy & the bombers",46.3,57.2,1,0],["D-Day",57.2,60,2,0],["Arnhem–Ardennes",60,64,0,0],["Fall of Germany",64,END,1,1]];')
rep('[[0,"Jul 1943"],[6,"1944"],[18,"1945"]].forEach', '[[0,"Sep 1939"],[4,"1940"],[16,"1941"],[28,"1942"],[40,"1943"],[52,"1944"],[64,"1945"]].forEach')
rep('''text-anchor="end">2 May 1945</text>''', '''text-anchor="end">8 May 1945</text>''')
rep('aria-label="Timeline of weapons and equipment in use, July 1943 to May 1945"', 'aria-label="Timeline of weapons and equipment in use, September 1939 to May 1945"')
rep("(w.story?'<div class=\"story\"><b>In Italy</b>'", "(w.story?'<div class=\"story\"><b>In the war</b>'")
a = T.index('<p class="wp-note" style="margin:0">'); b = T.index('</p>', a)
T = T[:a] + '<p class="wp-note" style="margin:0">The weapons and machines that decided the war in Europe — rifles and machine guns, anti-tank weapons, guns and rockets, tanks, aircraft, U-boats, radar, Enigma and the V-weapons. For each one you will see when it was used, how it worked, what it did well, where it fell short and which places in this guide it is linked to' + T[b:]
a = T.index('<p class="wp-note">Use in Sicily and Italy'); b = T.index('</p>', a)
T = T[:a] + '<p class="wp-note">Use in Europe, from the invasion of Poland on 1 September 1939 to the surrender on 8 May 1945. The shaded bands are the phases of the war that this guide follows; red ticks mark key moments. Some dates are approximate.' + T[b:]
a = T.index('<p class="wp-note">Each army had its own rifle cartridge'); b = T.index('</p>', a)
T = T[:a] + '<p class="wp-note">Each army had its own rifle cartridge, so Americans, British, Germans and Soviets could not share rifle and machine-gun ammunition. Within each army, though, the rifle and the machine guns usually fired the same round. Pistol cartridges were the exception: the British Sten fired the same 9 mm round as the German MP 40, so captured German ammunition could be used.' + T[b:]

# More page: other guides, credits
OTHER = '''<div class="rdsec">More DZ Charlie field guides</div><div class="rdlist">
<a class="rdrow" href="https://dzcharlie.com/normandy.html" style="text-decoration:none"><span class="ic">★</span><b>Easy Company · Normandy</b><small>The 101st Airborne's Easy Company from D-Day to Carentan.</small></a>
<a class="rdrow" href="https://dzcharlie.com/holland-bastogne.html" style="text-decoration:none"><span class="ic">★</span><b>Easy Company · Holland &amp; Bastogne</b><small>Market Garden and the Battle of the Bulge.</small></a>
<a class="rdrow" href="https://dzcharlie.com/germany-austria.html" style="text-decoration:none"><span class="ic">★</span><b>Easy Company · Germany &amp; Austria</b><small>From the Rhine to the Eagle's Nest.</small></a>
<a class="rdrow" href="https://dzcharlie.com/into-europe/" style="text-decoration:none"><span class="ic">★</span><b>Into Europe · Italy 1943–45</b><small>The Allied advance from Sicily to the Alps.</small></a>
<a class="rdrow" href="https://dzcharlie.com/spanish-civil-war/" style="text-decoration:none"><span class="ic">★</span><b>The Spanish Civil War</b><small>The war in Spain, 1936–39, region by region.</small></a>
<a class="rdrow" href="https://dzcharlie.com/" style="text-decoration:none"><span class="ic">⌂</span><b>All guides at dzcharlie.com</b><small>Free battlefield field guides.</small></a></div>
<div class="rdsec">Credits</div>'''
rep('<div class="rdsec">Credits</div>', OTHER)
rep('with sea and country outlines from Natural Earth (public domain). Tap to read the licence.</small></a></div>',
    'drawn from OpenMapTiles vector tiles (OpenFreeMap). Tap to read the licence.</small></a>'
    '<div class="rdrow" style="cursor:default"><span class="ic">📷</span><b>Pictures</b><small>Cover: the Operations Room at No. 10 Group, Rudloe Manor, 1943 (IWM CH 11887) and WAAF plotters at No. 11 Group, Uxbridge, 1942 (IWM CH 7698) — Crown copyright expired, public domain, via Wikimedia Commons. Weapon drawings: simplified diagrams drawn for this guide.</small></div></div>')
rep('<p>Mountain roads often have no signal. Save the maps now, on Wi-Fi, and the whole guide keeps working with no internet at all (about 4 MB).</p>',
    '<p>Many sites have poor signal. Save the guide now, on Wi-Fi, and it keeps working with no internet at all. The detailed maps of the whole of Europe are large: save them on Wi-Fi.</p>')
# More rows wording
rep('<b>The campaign</b><small>Why Italy was so hard, two clocks side by side and the key sites of the whole peninsula.</small>', '<b>The war</b><small>What decided it, the West and the East side by side, and the cemeteries, memorials and camps.</small>')
rep('<b>Battle maps</b><small>8 battles step by step, drawn over the real map.</small>', f'<b>Battle maps</b><small>{len(BT)} battles step by step, drawn over the real map.</small>')
rep('<b>Key figures</b><small>Generals, soldiers and partisans who shaped the campaign.</small>', '<b>Key figures</b><small>Leaders, commanders, resisters and soldiers who shaped the war.</small>')
rep('<b>The armies</b><small>Who fought in Italy, nation by nation.</small>', '<b>The armies</b><small>How the armies of each nation were organised.</small>')
rep('<small>Rifles, machine guns, tanks, guns and landing craft, with drawings.</small>', '<small>Rifles, tanks, aircraft, U-boats, Enigma and the V-weapons, with drawings.</small>')
rep('<b>Origins</b><small>Why the Allies went into Italy and how the armies were organised.</small>', '<b>Origins</b><small>How the war came: Versailles, Hitler, appeasement and the Nazi–Soviet Pact.</small>')
rep('<b>Museums</b><small>The museums worth your time, with opening notes and sources.</small>', '<b>Museums</b><small>The museums worth your time, with opening notes and all the sources.</small>')

# maps: the Google-style picture tiles for this guide
if os.path.exists(f'{B}/raster.json'):
    setconst('RASTER', open(f'{B}/raster.json').read().strip())
else:
    setconst('RASTER', '[]')
# visitor counter: this guide's own name
T = T.replace("'into-europe'", "'understanding-wwii'").replace('"into-europe"', '"understanding-wwii"')

# offline list: every map picture + fonts (the Save for offline button)
RAS = json.loads(open(f'{B}/raster.json').read()) if os.path.exists(f'{B}/raster.json') else []
FILES = [r['src'] for r in RAS] + ['fonts/bss-700.woff2', 'fonts/bss-800.woff2', 'fonts/bss-700-ext.woff2', 'fonts/bss-800-ext.woff2']
a = T.index('const FILES=['); b = T.index('];', a) + 2
T = T[:a] + 'const FILES=' + json.dumps(FILES) + ';' + T[b:]
SW = open('/home/claude/fieldtours/into-europe/app/sw.js').read()
SW = SW.replace('Into Europe service worker', 'Understanding WWII service worker').replace('"ie-core2", DATA="ie-data2", VERSION="v2"', '"uw-core1", DATA="uw-data1", VERSION="v1"')
SW = SW.replace('"ie-seen2"', '"uw-seen1"')
SW = SW.replace('"fonts/stardos-stencil-400.woff2","fonts/stardos-stencil-700.woff2"', '"fonts/bss-700.woff2","fonts/bss-800.woff2","fonts/bss-700-ext.woff2","fonts/bss-800-ext.woff2"')
assert 'ie-' not in SW and 'stardos' not in SW
open(f'{B}/app/sw.js', 'w').write(SW)
open(f'{B}/app/site.webmanifest', 'w').write(json.dumps({"name": "Understanding WWII · The Second World War in Europe", "short_name": "Understanding WWII", "lang": "en",
    "icons": [{"src": "icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any"}, {"src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any"},
              {"src": "icon-maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"}],
    "theme_color": "#24323f", "background_color": "#1b2631", "display": "standalone", "start_url": "index.html"}, ensure_ascii=False))
open(f'{B}/app/_headers', 'w').write(open('/home/claude/fieldtours/into-europe/app/_headers').read())
rep('days:"A ready-made route for 1 to 21 days, with the driving order and a place to stay each night."', 'days:"Ready-made routes, from Britain to the Eastern Front, with the driving order and a place to stay each night."')


# Save for offline: also "only the maps for my tour" (smaller download)
a = T.index('/* ===== v3: offline'); b = T.index('</script>', a)
blk = T[a:b]
blk = blk.replace('async function missing(){const c=await caches.open(CACHE);const out=[];for(const f of FILES)', 'const LIST=()=>window.UW_SUB||FILES;\n  async function missing(){const c=await caches.open(CACHE);const out=[];for(const f of LIST())')
blk = blk.replace('FILES.length', 'LIST().length')
k = blk.rstrip().rindex('})();')
blk = blk[:k] + r'''
  /* only the maps around the stops of the current tour (plus the overview of Europe) */
  const mine=document.createElement("button");mine.type="button";mine.className="rdlink";mine.id="rdoffmine";mine.textContent="Or save only the maps for my tour (smaller)";
  go.insertAdjacentElement("afterend",mine);
  mine.addEventListener("click",()=>{let pts=[];try{pts=buildPlan().flat()}catch(e){}
    if(!pts.length){st.textContent="Plan your tour first (Tour page), then come back here.";return}
    const pad=.6,inb=r=>pts.some(p=>r.b[0]<p.lon+pad&&r.b[2]>p.lon-pad&&r.b[1]<p.lat+pad*.65&&r.b[3]>p.lat-pad*.65);
    window.UW_SUB=FILES.filter(f=>{if(!/^maps\//.test(f))return true;const r=(typeof RASTER!=="undefined"?RASTER:[]).find(x=>x.src===f);return !r||r.g===0||inb(r)});
    st.textContent="Saving the maps for your "+pts.length+" stops ("+window.UW_SUB.length+" files)…";go.click();
    setTimeout(()=>{const t=setInterval(()=>{if(!go.disabled){clearInterval(t);window.UW_SUB=null}},1000)},500)});
''' + blk[k:]
T = T[:a] + blk + T[b:]
# custom stop hints: European coordinates, not Italian
rep('placeholder="Latitude 41.xxxx"', 'placeholder="Latitude 50.xxxx"'); rep('placeholder="Longitude 13.xxxx"', 'placeholder="Longitude 5.xxxx"')
T = T.replace('#2c3214', '#3b2623')   # dark-mode chosen card: red-tinted slate, not olive
# no campsite picks in this guide: only show the suggestion line when a base has a name
rep('<p class="ncamp"><b>Campsite or motorhome area we suggest:</b> ${esc(b.name)}, ${esc(b.addr)} · ${esc(b.info)} · <a href="${google(b.lat,b.lon)}" target="_blank" rel="noopener">open in Google Maps</a></p>',
    '${b.name?`<p class="ncamp"><b>Campsite or motorhome area we suggest:</b> ${esc(b.name)}, ${esc(b.addr)} · ${esc(b.info)} · <a href="${google(b.lat,b.lon)}" target="_blank" rel="noopener">open in Google Maps</a></p>`:""}')
