const {chromium}=require('/home/claude/gmap/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const p=await (await b.newContext({viewport:{width:390,height:844},serviceWorkers:'block'})).newPage();
await p.goto('http://localhost:8830/footsteps-of-wwii/index.html');await p.waitForTimeout(1200);
await p.evaluate(()=>document.querySelectorAll('.welcome,#welcome').forEach(w=>w.remove()));
await p.evaluate(()=>{goTab('tab-tour');const t=APP.tours.find(t=>t.id==='britain');plan.tour='britain';plan.days=t.days.length;plan.mode='full';savePlan();renderTour()});await p.waitForTimeout(800);
await p.evaluate(()=>openMap(document.querySelectorAll('#tourout .sitmap')[0]));await p.waitForTimeout(800);
for(let k=0;k<4;k++){await p.evaluate(()=>{const view=document.querySelector('#lb .view');const n=document.querySelectorAll('#lb g.wp .wpc')[0];const r=n.getBoundingClientRect(),vr=view.getBoundingClientRect();view.scrollLeft+=r.x+r.width/2-(vr.left+vr.width/2);view.scrollTop+=r.y+r.height/2-(vr.top+vr.height/2)});await p.waitForTimeout(400);console.log(await p.evaluate(()=>{const v=document.querySelector('#lb .view');const n=document.querySelectorAll('#lb g.wp .wpc')[0].getBoundingClientRect(),vr=v.getBoundingClientRect();
 const fx=n.x+n.width/2-vr.left,fy=n.y+n.height/2-vr.top;const out=[];for(const w of [1.5,2,3,4,5,6,7,8])out.push([w,__lbCap(fx,fy,w).toFixed(2)]);const sv=document.querySelector('#lb svg');const c=__lbCap(v.clientWidth/2,v.clientHeight/2,lbZoom*1.12);return JSON.stringify({sw:sv.clientWidth,sh:sv.clientHeight,vh:v.clientHeight,st:v.scrollTop,z:lbZoom,fx,fy,center:c,dis:document.querySelector('.lbz [data-z="1"]').disabled,out})}));await p.evaluate(()=>document.querySelector('.lbz [data-z="1"]').click());await p.waitForTimeout(600)}
await b.close()})();
