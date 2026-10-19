# Ready-made tours: "Which tour?" now offers several routes (each a run of tour days), each with its own day count.
rep('let plan={days:14,mode:"full",forced:[],dropped:[],custom:[]};',
    'let plan={days:7,tour:"britain",mode:"full",forced:[],dropped:[],custom:[]};')
rep('if(p&&p.days)plan=Object.assign(plan,p)', 'if(p&&p.days)plan=Object.assign(plan,p);if(!APP.tours.find(t=>t.id===plan.tour))plan.tour="britain"')
# helpers
rep('function buildPlan(){', '''function curTour(){return APP.tours.find(t=>t.id===plan.tour)||APP.tours[0]}
function tourDays(){return curTour().days}
function tourClusters(){const td=tourDays(),out=[];td.forEach(n=>{const r=APP.dayReg[n-1],l=out[out.length-1];if(l&&APP.dayReg[l[l.length-1]-1]===r)l.push(n);else out.push([n])});return out}
function buildPlan(){''')
rep('  const N=plan.days, easy=plan.mode==="easy";', '  const TD=tourDays();if(plan.days>TD.length)plan.days=TD.length;const N=plan.days, easy=plan.mode==="easy";')
rep('let cand=POOL.filter(p=>!plan.dropped.includes(p.id)).filter(p=>!easy||isEasy(p))',
    'let cand=POOL.filter(p=>!plan.dropped.includes(p.id)).filter(p=>TD.includes(p.day)||plan.forced.includes(p.id)).filter(p=>!easy||isEasy(p)||plan.forced.includes(p.id))')
rep('else if(p.dday)pri=(N>DAYS.length&&!p.far)?4:9;', 'else if(p.dday)pri=9;')
rep('else if(p.pri===4&&N<=DAYS.length)pri=9;', 'else if(p.pri===4&&N<TD.length)pri=9;')
rep('const clusters=APP.clusters||[DAYS.map(d=>d.n)];', 'const clusters=tourClusters();')
rep('const clOf=p=>{const d=Math.max(1,Math.min(DAYS.length,Math.floor(p.seq)));const i=clusters.findIndex(c=>c.includes(d));return i<0?0:i};',
    'const clOf=p=>{const d=Math.max(1,Math.min(DAYS.length,Math.floor(p.seq)));let i=clusters.findIndex(c=>c.includes(d));if(i<0){let bd=1e9;clusters.forEach((c,ci)=>c.forEach(n=>{const dd=Math.abs(n-d);if(dd<bd){bd=dd;i=ci}}))}return i<0?0:i};')
rep('if(N===DAYS.length&&!easy){const d5=DAYS.map(()=>[]);chosen.forEach(p=>d5[Math.min(DAYS.length-1,Math.max(0,Math.floor(p.seq)-1))].push(p));return d5}',
    'if(N===TD.length&&!easy){const d5=TD.map(()=>[]);chosen.forEach(p=>{let k=TD.indexOf(Math.floor(p.seq));if(k<0){let bd=1e9;TD.forEach((n,i)=>{const dd=Math.abs(n-p.seq);if(dd<bd){bd=dd;k=i}})}d5[k].push(p)});return d5}')
# renderTour: tour cards + must-see toggle + days
old = T[T.index('  document.getElementById("modepick").innerHTML='):T.index('\n', T.index('  document.getElementById("dayspick").innerHTML='))]
new = '''  {const TD=tourDays();if(plan.days>TD.length)plan.days=TD.length;
  document.getElementById("modepick").innerHTML=`<div class="tourlist">${APP.tours.map(t=>`<button type="button" class="tourbtn" data-tour="${t.id}" aria-pressed="${!apOn()&&!myOn()&&plan.tour===t.id}"><b>${esc(t.name)}</b><span>${esc(t.desc)}</span><em>${t.days.length} day${t.days.length>1?"s":""}</em></button>`).join("")}</div><div class="head" style="margin-top:12px">Which stops?</div><div class="modepick2"><button type="button" data-mode="easy" aria-pressed="${!apOn()&&plan.mode==="easy"}"><b>${APP.modeEasy[0]}</b><span>${APP.modeEasy[1]}</span></button><button type="button" data-mode="full" aria-pressed="${!apOn()&&plan.mode!=="easy"}"><b>${APP.modeFull[0]}</b><span>${APP.modeFull[1]}</span></button></div>`;
  const ch=TD.length<=10?TD.map((_,i)=>i+1):[...new Set([1,2,3,5,7,10,14,21,28,35,42,TD.length])].filter(n=>n<=TD.length);
  document.getElementById("dayspick").innerHTML=ch.map(n=>`<button type="button" data-days="${n}" aria-pressed="${!apOn()&&plan.days===n}" aria-label="${n} day${n>1?"s":""}">${n}</button>`).join("");}'''
T = T.replace(old, new)
rep('''const title=(!apOn()&&!myOn()&&plan.days===DAYS.length&&plan.mode!=="easy"&&DAYNAMES[di])?DAYNAMES[di]:''',
    '''const title=(!apOn()&&!myOn()&&plan.days===tourDays().length&&plan.mode!=="easy"&&DAYNAMES[tourDays()[di]-1])?DAYNAMES[tourDays()[di]-1]:''')
rep('''<div class="summ">${plan.mode==="easy"?APP.modeEasy[0]:APP.modeFull[0]} · ${plan.days} day''', '''<div class="summ">${esc(curTour().name)} · ${plan.mode==="easy"?APP.modeEasy[0].toLowerCase()+" · ":""}${plan.days} day''')
rep('''${plan.mode==="easy"?"the highlights fit in about "+APP.easyFits+" days; switch to the whole campaign, ":""}add sites above, or reduce the number of days.''',
    '''${plan.mode==="easy"?"switch to “Everything”, ":""}add sites above, or reduce the number of days.''')
rep('  if(t.dataset.mode){apOff();plan.mode=t.dataset.mode;savePlan();renderTour();return}',
    '  if(t.dataset.mode){apOff();plan.mode=t.dataset.mode;savePlan();renderTour();return}\n  if(t.dataset.tour){apOff();if(plan.tour!==t.dataset.tour){plan.tour=t.dataset.tour;plan.days=tourDays().length}savePlan();renderTour();return}')
rep('if(t.id==="resetplan"){plan={days:plan.days,mode:plan.mode,forced:[],dropped:[],custom:[]};',
    'if(t.id==="resetplan"){plan={days:plan.days,tour:plan.tour,mode:plan.mode,forced:[],dropped:[],custom:[]};')
rep('if(!n||isNaN(la)||isNaN(lo)||la<36||la>47.5||lo<6||lo>19){alert("Give the spot a name and a latitude/longitude inside Italy (for example 41.49, 13.81).");return}',
    'if(!n||isNaN(la)||isNaN(lo)||la<34||la>71||lo<-11||lo>46){alert("Give the spot a name and a latitude/longitude in Europe (for example 49.35, -0.85).");return}')
# style for the tour list
rep('</style></head><body>', '''.tourlist{display:grid;gap:8px}.tourbtn{display:grid;grid-template-columns:1fr auto;gap:2px 10px;text-align:left;padding:12px 14px;border:2px solid var(--line2);border-radius:12px;background:var(--surface);color:var(--ink);cursor:pointer;font:inherit;min-height:44px}
.tourbtn b{font-size:16px}.tourbtn span{grid-column:1;font-size:13.5px;color:var(--ink2);line-height:1.35}.tourbtn em{grid-column:2;grid-row:1/3;align-self:center;font-style:normal;font-weight:700;font-size:13px;color:var(--brand2);white-space:nowrap}
.tourbtn[aria-pressed="true"]{border-color:var(--brand2);background:color-mix(in srgb,var(--brand2) 10%,var(--surface));box-shadow:inset 4px 0 0 var(--accent)}
.modepick2{display:grid;grid-template-columns:1fr 1fr;gap:8px}.modepick2 button{text-align:left;padding:10px 12px;border:2px solid var(--line2);border-radius:12px;background:var(--surface);color:var(--ink);font:inherit;cursor:pointer;display:flex;flex-direction:column;gap:2px}.modepick2 button span{font-size:13px;color:var(--ink2)}.modepick2 button[aria-pressed="true"]{border-color:var(--brand2);background:color-mix(in srgb,var(--brand2) 10%,var(--surface))}
</style></head><body>''')
