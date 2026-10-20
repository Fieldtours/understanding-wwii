const {chromium}=require('/home/claude/gmap/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const p=await (await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,serviceWorkers:'block'})).newPage();
await p.goto('http://localhost:8830/footsteps-of-wwii/index.html');await p.waitForTimeout(1200);
await p.evaluate(()=>document.querySelectorAll('.welcome,#welcome').forEach(w=>w.remove()));
await p.evaluate(()=>{goTab('tab-tour');const t=APP.tours.find(t=>t.id==='britain');plan.tour='britain';plan.days=t.days.length;plan.mode='full';savePlan();renderTour()});await p.waitForTimeout(800);
const ms=await p.$$('#tourout .sitmap');for(const i of [2,3]){await ms[i].scrollIntoViewIfNeeded();await p.waitForTimeout(2000);await ms[i].screenshot({path:`/tmp/claude-0/lb/ph-day${i+1}.png`})}
await p.evaluate(()=>{goTab('tab-tour');const t=APP.tours.find(t=>t.id==='west40');plan.tour='west40';plan.days=t.days.length;plan.mode='full';savePlan();renderTour()});await p.waitForTimeout(800);
const m2=await p.$$('#tourout .sitmap');await m2[4].scrollIntoViewIfNeeded();await p.waitForTimeout(2000);await m2[4].screenshot({path:`/tmp/claude-0/lb/ph-norm.png`});
await b.close()})();
