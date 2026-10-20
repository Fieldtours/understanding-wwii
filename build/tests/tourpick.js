// Plan my tour -> tap a ready-made tour -> the screen must move to that tour's route, and the route must be that tour.
const {chromium}=require('/home/claude/gmap/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
let fails=0;
for(const [w,h] of [[390,844],[1440,900]]){
const p=await (await b.newContext({viewport:{width:w,height:h},deviceScaleFactor:2,serviceWorkers:'block'})).newPage();
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('http://localhost:8830/footsteps-of-wwii/index.html');await p.waitForTimeout(1000);await p.click('#welgo');await p.waitForTimeout(500);
await p.click('#qa-plan');await p.waitForTimeout(800);
const tours=await p.evaluate(()=>APP.tours.map(t=>[t.id,t.name]));
for(const [id,name] of tours){
  await p.evaluate(()=>window.scrollTo(0,0));await p.waitForTimeout(200);
  await p.evaluate(()=>{const c=document.querySelector('.tourlist>.dzc-change');if(c&&document.querySelector('.tourlist').classList.contains('dzc-fold'))c.click()});await p.waitForTimeout(150);const btn=await p.$(`.tourbtn[data-tour="${id}"] b`);await btn.scrollIntoViewIfNeeded();await btn.click();await p.waitForTimeout(1200);
  const r=await p.evaluate(()=>{const s=document.querySelector('#p-tour .summ');const rr=s.getBoundingClientRect();return {txt:s.textContent.slice(0,60),top:Math.round(rr.top),vh:innerHeight,tour:plan.tour,first:(document.querySelector('#tourout .daybar')||{}).textContent?.slice(0,50)}});
  const ok=r.tour===id&&r.top>=0&&r.top<r.vh*0.5&&r.txt.startsWith(name.split(',')[0].slice(0,10));
  if(!ok)fails++;console.log((ok?'ok  ':'FAIL')+` ${w}px ${name} -> summary at ${r.top}px: "${r.txt}" | ${r.first}`);
  if(id==='britain')await p.screenshot({path:`/tmp/claude-0/tourpick-${w}.png`})}
console.log(errs.join('\n')||'no page errors');await p.close()}
console.log(fails?'FAILS '+fails:'ALL PASS');await b.close()})();
