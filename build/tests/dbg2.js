const {chromium}=require('/home/claude/gmap/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const p=await (await b.newContext({viewport:{width:390,height:844},serviceWorkers:'block'})).newPage();
await p.goto('http://localhost:8830/footsteps-of-wwii/index.html');await p.waitForTimeout(1200);
await p.evaluate(()=>document.querySelectorAll('.welcome,#welcome').forEach(w=>w.remove()));
await p.evaluate(()=>{goTab('tab-tour');const t=APP.tours.find(t=>t.id==='britain');plan.tour='britain';plan.days=t.days.length;plan.mode='full';savePlan();renderTour()});await p.waitForTimeout(800);
const ms=await p.$$('#tourout .sitmap');await ms[0].click();await p.waitForTimeout(1000);
for(let i=0;i<4;i++){
 const info=await p.evaluate(()=>{const svg=document.querySelector('#lb svg'),view=document.querySelector('#lb .view');const n=document.querySelectorAll('#lb .wp')[0];const r=n.getBoundingClientRect();
  const fxC=r.x+r.width/2+10,fyC=r.y+r.height/2+10;const vr=view.getBoundingClientRect(),sr=svg.getBoundingClientRect();
  const [cx,cy,sc,W,H]=svg.getAttribute('data-proj').split(',').map(Number);const qx=(fxC-sr.left)/sr.width*W,qy=(fyC-sr.top)/sr.height*H;
  const lo=cx+(qx-W/2)/sc,yy=cy-(qy-H/2)/sc;return {z:lbZoom,lo,la:Math.atan(Math.sinh(yy*Math.PI/180))*180/Math.PI,pt:[fxC,fyC]}});
 console.log(JSON.stringify(info));await p.mouse.dblclick(info.pt[0],info.pt[1]);await p.waitForTimeout(1000)}
console.log(await p.evaluate(()=>lbZoom));await b.close()})();
