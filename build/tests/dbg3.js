const {chromium}=require('/home/claude/gmap/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const p=await (await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,serviceWorkers:'block'})).newPage();
await p.goto('http://localhost:8830/footsteps-of-wwii/index.html');await p.waitForTimeout(1200);
await p.evaluate(()=>document.querySelectorAll('.welcome,#welcome').forEach(w=>w.remove()));
const run=async(tour,day,mi,name)=>{
await p.evaluate(id=>{goTab('tab-tour');const t=APP.tours.find(t=>t.id===id);plan.tour=id;plan.days=t.days.length;plan.mode='full';savePlan();renderTour()},tour);await p.waitForTimeout(800);
const ms=await p.$$('#tourout .sitmap');await ms[day].scrollIntoViewIfNeeded();await ms[day].click();await p.waitForTimeout(1000);
for(let i=0;i<12;i++){
 const st=await p.evaluate(mi=>{const view=document.querySelector('#lb .view');const n=document.querySelectorAll('#lb .wp')[mi];const r=n.getBoundingClientRect(),vr=view.getBoundingClientRect();
   view.scrollLeft+=r.x+r.width/2-(vr.left+vr.width/2);view.scrollTop+=r.y+r.height/2-(vr.top+vr.height/2);return 1},mi);
 await p.waitForTimeout(400);
 const dis=await p.evaluate(()=>{const b=document.querySelector('.lbz [data-z="1"]');if(b.disabled)return true;b.click();return false});if(dis)break;await p.waitForTimeout(700)}
await p.evaluate(mi=>{const view=document.querySelector('#lb .view');const n=document.querySelectorAll('#lb .wp')[mi];const r=n.getBoundingClientRect(),vr=view.getBoundingClientRect();
   view.scrollLeft+=r.x+r.width/2-(vr.left+vr.width/2);view.scrollTop+=r.y+r.height/2-(vr.top+vr.height/2)},mi);
await p.waitForTimeout(2000);console.log(name,'zoom',(await p.evaluate(()=>lbZoom)).toFixed(2));await p.screenshot({path:'/tmp/claude-0/lb/'+name+'.png'});await p.keyboard.press('Escape');await p.waitForTimeout(300)};
await run('britain',0,0,'site-portsmouth');
await run('britain',0,2,'site-uxbridge');
await run('east',0,0,'site-east');
await b.close()})();
