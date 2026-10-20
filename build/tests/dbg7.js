const {chromium}=require('/home/claude/gmap/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const p=await (await b.newContext({viewport:{width:390,height:844},serviceWorkers:'block'})).newPage();
await p.goto('http://localhost:8830/footsteps-of-wwii/index.html');await p.waitForTimeout(1200);
await p.evaluate(()=>document.querySelectorAll('.welcome,#welcome').forEach(w=>w.remove()));
await p.evaluate(()=>{goTab('tab-tour');const t=APP.tours.find(t=>t.id==='britain');plan.tour='britain';plan.days=t.days.length;plan.mode='full';savePlan();renderTour()});await p.waitForTimeout(800);
await p.evaluate(()=>openMap(document.querySelectorAll('#tourout .sitmap')[0]));await p.waitForTimeout(800);
for(let k=0;k<8;k++){
await p.evaluate(()=>{const view=document.querySelector('#lb .view');const n=document.querySelectorAll('#lb g.wp')[0];const r=n.getBoundingClientRect(),vr=view.getBoundingClientRect();view.scrollLeft+=r.x+r.width/2-(vr.left+vr.width/2);view.scrollTop+=r.y+r.height/2-(vr.top+vr.height/2)});await p.waitForTimeout(300);
console.log(await p.evaluate(()=>{const v=document.querySelector('#lb .view');const n=document.querySelectorAll('#lb g.wp')[0].getBoundingClientRect(),vr=v.getBoundingClientRect();
 return JSON.stringify({z:lbZoom,base:__lbBase(),cap:__lbCap(v.clientWidth/2,v.clientHeight/2,lbZoom*1.6),dis:document.querySelector('.lbz [data-z="1"]').disabled,mk:[n.x+n.width/2-vr.left,n.y+n.height/2-vr.top],vw:[v.clientWidth,v.clientHeight],sw:document.querySelector('#lb svg').clientWidth})}));
await p.evaluate(()=>document.querySelector('.lbz [data-z="1"]').click());await p.waitForTimeout(500)}
await b.close()})();
