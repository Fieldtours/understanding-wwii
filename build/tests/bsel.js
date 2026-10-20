const {chromium}=require('/home/claude/gmap/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});let fails=0;
for(const [w,h] of [[390,844],[1440,900]]){
const p=await (await b.newContext({viewport:{width:w,height:h},deviceScaleFactor:2,serviceWorkers:'block'})).newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('http://localhost:8830/footsteps-of-wwii/index.html');await p.waitForTimeout(900);await p.click('#welgo');await p.waitForTimeout(400);
await p.evaluate(()=>{goTab('tab-dday');document.getElementById('battles').scrollIntoView()});await p.waitForTimeout(600);
const names=await p.evaluate(()=>BATTLES.map(b=>b.name));
for(let i=0;i<names.length;i++){
  await p.evaluate(()=>document.querySelector('.bsel').scrollIntoView({block:'start'}));await p.waitForTimeout(150);
  await p.evaluate(()=>{const c=document.querySelector('.bsel>.dzc-change');if(c&&document.querySelector('.bsel').classList.contains('dzc-fold'))c.click()});await p.waitForTimeout(150);const btn=await p.$(`.bsel [data-bsel="${i}"]`);await btn.scrollIntoViewIfNeeded();await btn.click();await p.waitForTimeout(900);
  const r=await p.evaluate(()=>{const m=document.getElementById('bmap').getBoundingClientRect(),hd=document.querySelector('.bhead').getBoundingClientRect();return {sel:BSEL,head:document.querySelector('.bhead b').textContent,mapTop:Math.round(m.top),mapBottom:Math.round(m.bottom),headTop:Math.round(hd.top),vh:innerHeight}});
  const ok=r.sel===i&&r.mapTop>=0&&r.mapTop<r.vh*0.4;if(!ok)fails++;
  console.log((ok?'ok  ':'FAIL')+` ${w}px ${names[i]} -> heading at ${r.headTop}px, map ${r.mapTop}-${r.mapBottom} of ${r.vh}`);
  if(i===5)await p.screenshot({path:`/tmp/claude-0/bsel-${w}.png`})}
console.log(errs.join('\n')||'no page errors');await p.close()}
console.log(fails?'FAILS '+fails:'ALL PASS');await b.close()})();
