// Planner (ready-made tours, by area, build my own) and the diary, at phone size.
const {chromium}=require('/home/claude/gmap/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const ctx=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:1,serviceWorkers:'block'});const p=await ctx.newPage();
const errs=[];p.on('pageerror',e=>errs.push('ERR '+e.message+' '+(e.stack||'').split('\n')[1]));p.on('console',m=>{if(m.type()==='error'&&!/404|Failed to load/.test(m.text()))errs.push('CON '+m.text())});
const OUT='/tmp/claude-0/flows';require('fs').mkdirSync(OUT,{recursive:true});
await p.goto('http://localhost:8830/understanding-wwii/index.html');await p.waitForTimeout(1200);await p.click('#welgo');await p.waitForTimeout(500);
const S=async n=>{await p.waitForTimeout(600);await p.screenshot({path:OUT+'/'+n+'.png'})};
const T=async sel=>(await p.evaluate(s=>{const e=document.querySelector(s);return e?e.innerText:'(none)'},sel));
const clickT=async (sel,t)=>p.evaluate(([sel,t])=>{const e=[...document.querySelectorAll(sel)].find(b=>b.textContent.trim().startsWith(t));if(!e)return 'NOTFOUND '+t;e.click();return 'ok'},[sel,t]);
const check=(c,m)=>{console.log((c?'PASS ':'FAIL ')+m);if(!c)errs.push('FAIL '+m)};
await p.click('#qa-plan');await S('t01-tour');
// every ready-made tour, full length and 2 days, both modes
const tours=await p.evaluate(()=>APP.tours.map(t=>[t.id,t.days.length]));
for(const [id,n] of tours){
  await p.click(`[data-tour="${id}"]`);await p.waitForTimeout(200);
  const r=await p.evaluate(()=>{const d=buildPlan();return {n:d.length,stops:d.flat().length,empty:d.filter(x=>!x.length).length,days:plan.days,outside:d.flat().filter(s=>!tourDays().includes(s.day)).length}});
  check(r.n===n&&r.empty===0&&r.outside===0,`tour ${id}: ${r.n} days, ${r.stops} stops, empty ${r.empty}`);
  await p.click('[data-days="2"]').catch(()=>{});await p.waitForTimeout(150);
  const r2=await p.evaluate(()=>{const d=buildPlan();return {n:d.length,stops:d.flat().length,mins:d.map(x=>x.reduce((s,p)=>s+p.min,0))}});
  check(r2.n===Math.min(2,n)&&r2.stops>0,`tour ${id} in 2 days: ${r2.stops} stops, minutes/day ${r2.mins.join('/')}`);
}
await p.click('[data-tour="west40"]');await p.click('[data-mode="easy"]');await p.waitForTimeout(300);await S('t02-west40-easy');
await p.click('[data-mode="full"]');await p.click('[data-days="8"]');await p.waitForTimeout(400);await S('t03-west40-full');
console.log((await T('#tourout')).slice(0,500).replace(/\n+/g,' | '));
// by area
console.log(await clickT('#p-tour button','By area'));await p.waitForTimeout(400);await S('t04-area');
const regs=await p.evaluate(()=>[...document.querySelectorAll('[data-apreg]')].map(b=>b.dataset.apreg));console.log('regions',regs.join(','));
for(const [reg,time] of [['normandy','1'],['poland','w1'],['britain','half'],['germany-east','3']]){
  await p.evaluate(()=>{AP.step=0;AP.regions=[];});
  await p.evaluate(r=>{AP.mode='regions';AP.regions=[r];apSave();},reg);
  await p.evaluate(t=>{AP.time=t;AP.focus='ess';AP.on=true;apSave();renderTour()},time);await p.waitForTimeout(300);
  const r=await p.evaluate(()=>{const d=buildPlan();return {n:d.length,stops:d.flat().length,regs:[...new Set(d.flat().map(p=>apRegionOf(p)))],max:Math.max(...d.map(x=>x.reduce((s,p)=>s+p.min,0)))}});
  check(r.stops>0&&r.regs.length===1&&r.regs[0]===reg,`area ${reg} ${time}: ${r.n} days ${r.stops} stops regions ${r.regs} max visit min/day ${r.max}`);
}
await S('t05-area-result');
// around a place, tiny area
await p.evaluate(()=>{AP.mode='around';AP.place=[49.37,-0.88,'Omaha Beach'];AP.radius=10;AP.time='2h';AP.on=true;apSave();renderTour()});await p.waitForTimeout(300);
console.log('around Omaha 10 km 2h:',await p.evaluate(()=>buildPlan().flat().map(p=>p.name).join(' / ')));
// build my own
await p.evaluate(()=>{AP.on=false;apSave()});
console.log(await clickT('#p-tour button','Build my own'));await p.waitForTimeout(500);await S('t06-my');
console.log('MY:',(await T('#mybox')).slice(0,300).replace(/\n+/g,' | '));
// diary: tick sites, open Despatches
await p.evaluate(()=>{uxSet&&uxSet('days')});
await p.evaluate(()=>{['d11-1','d11-2','d12-1','d12-3'].forEach(k=>visited[k]=true);saveV();AAR_CFG.onChange&&AAR_CFG.onChange()});
await p.click('[data-aar="open"]');await p.waitForTimeout(700);await S('t07-diary');
console.log('DIARY:',(await T('#aar')).slice(0,600).replace(/\n+/g,' | '));
console.log(errs.length?errs.join('\n'):'no errors');await b.close()})();
