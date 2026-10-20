const {chromium}=require('/home/claude/gmap/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
for(const [w,h] of [[1440,900],[390,844]]){
const p=await (await b.newContext({viewport:{width:w,height:h},deviceScaleFactor:2,serviceWorkers:'block'})).newPage();
await p.goto('http://localhost:8830/footsteps-of-wwii/index.html');await p.waitForTimeout(1200);
await p.evaluate(()=>document.querySelectorAll('.welcome,#welcome').forEach(w=>w.remove()));
await p.evaluate(()=>{goTab('tab-tour');const t=APP.tours.find(t=>t.id==='britain');plan.tour='britain';plan.days=t.days.length;plan.mode='full';savePlan();renderTour()});await p.waitForTimeout(800);
const ms=await p.$$('#tourout .sitmap');await ms[0].scrollIntoViewIfNeeded();await p.waitForTimeout(2500);
await ms[0].screenshot({path:`/tmp/claude-0/lb/inline-${w}.png`});
await p.evaluate(()=>openMap(document.querySelectorAll('#tourout .sitmap')[0]));await p.waitForTimeout(2500);await p.screenshot({path:`/tmp/claude-0/lb/lb-${w}.png`});
for(let i=0;i<6;i++){const dis=await p.evaluate(()=>{const b=document.querySelector('.lbz [data-z="1"]');if(b.disabled)return true;b.click();return false});if(dis)break;await p.waitForTimeout(700)}
await p.waitForTimeout(2500);console.log(w,'max zoom at centre',await p.evaluate(()=>lbZoom));await p.screenshot({path:`/tmp/claude-0/lb/lbmax-${w}.png`});await p.close()}
await b.close()})();
