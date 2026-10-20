const {chromium}=require('/home/claude/gmap/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const p=await (await b.newContext({viewport:{width:390,height:844},serviceWorkers:'block'})).newPage();
await p.goto('http://localhost:8830/footsteps-of-wwii/index.html');await p.waitForTimeout(1200);
await p.evaluate(()=>document.querySelectorAll('.welcome,#welcome').forEach(w=>w.remove()));
await p.evaluate(()=>{goTab('tab-tour');const t=APP.tours.find(t=>t.id==='britain');plan.tour='britain';plan.days=t.days.length;plan.mode='full';savePlan();renderTour()});await p.waitForTimeout(1500);
console.log(await p.evaluate(()=>{const svg=document.querySelectorAll('#tourout .sitmap svg')[2];
 return [...svg.querySelectorAll('image')].map(i=>{const r=RASTER.find(r=>r.src===i.getAttribute('href'));return r.src+' t'+r.t+' lv'+r.lv+' res'+Math.round(r.w/(r.b[2]-r.b[0]))+' b'+r.b.map(v=>v.toFixed(2))}).join('\n')+'\nproj '+svg.getAttribute('data-proj')}));await b.close()})();
