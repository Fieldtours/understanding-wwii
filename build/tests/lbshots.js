// Screenshots of enlarged maps zoomed all the way in, to look at with my own eyes.
const {chromium}=require('/home/claude/gmap/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const p=await (await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,serviceWorkers:'block'})).newPage();
const errs=[];p.on('pageerror',e=>errs.push(e.message));
const O='/tmp/claude-0/lb';require('fs').mkdirSync(O,{recursive:true});
await p.goto('http://localhost:8830/footsteps-of-wwii/index.html');await p.waitForTimeout(1200);
await p.evaluate(()=>document.querySelectorAll('.welcome,#welcome').forEach(w=>w.remove()));
const shoot=async(tour,dayIdx,name,steps)=>{
  await p.evaluate(id=>{goTab('tab-tour');const t=APP.tours.find(t=>t.id===id);plan.tour=id;plan.days=t.days.length;plan.mode='full';savePlan();renderTour()},tour);await p.waitForTimeout(800);
  const ms=await p.$$('#tourout .sitmap');await ms[dayIdx].scrollIntoViewIfNeeded();await ms[dayIdx].click();await p.waitForTimeout(1200);
  for(let i=0;i<steps;i++){const dis=await p.evaluate(()=>{const b=document.querySelector('.lbz [data-z="1"]');if(!b||b.disabled)return true;b.click();return false});if(dis)break;await p.waitForTimeout(900)}
  const z=await p.evaluate(()=>lbZoom);await p.waitForTimeout(1500);
  // look at the middle of the zoomed map
  await p.evaluate(()=>{const v=document.querySelector('#lb .view');v.scrollLeft=(v.scrollWidth-v.clientWidth)/2;v.scrollTop=(v.scrollHeight-v.clientHeight)/2});await p.waitForTimeout(1500);
  await p.screenshot({path:`${O}/${name}.png`});console.log(name,'zoom',z.toFixed(2));
  await p.keyboard.press('Escape');await p.waitForTimeout(300)};
await shoot('britain',0,'day1-britain',12);
await shoot('britain',0,'day1-britain-z2',2);
await shoot('west40',4,'normandy-day',12);
await shoot('east',0,'east-day1',12);
await shoot('poland',2,'poland-day3',12);
await shoot('south',3,'crete',12);
console.log(errs.join('\n')||'no page errors');await b.close();await second()})();
// zoom into a site by double-clicking on it repeatedly
async function second(){const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const p=await (await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,serviceWorkers:'block'})).newPage();
await p.goto('http://localhost:8830/footsteps-of-wwii/index.html');await p.waitForTimeout(1200);
await p.evaluate(()=>document.querySelectorAll('.welcome,#welcome').forEach(w=>w.remove()));
await p.evaluate(()=>{goTab('tab-tour');const t=APP.tours.find(t=>t.id==='britain');plan.tour='britain';plan.days=t.days.length;plan.mode='full';savePlan();renderTour()});await p.waitForTimeout(800);
const ms=await p.$$('#tourout .sitmap');await ms[0].scrollIntoViewIfNeeded();await ms[0].click();await p.waitForTimeout(1200);
console.log(await p.evaluate(()=>[!!document.getElementById('lb'),document.querySelectorAll('#lb .wp').length,document.querySelectorAll('#lb [data-key]').length,document.querySelectorAll('#lb svg').length,(document.querySelector('#lb svg')||{}).outerHTML?.slice(0,0)]));for(let i=0;i<5;i++){const bx=await p.evaluate(()=>{const n=document.querySelectorAll('#lb .wp')[1]||document.querySelectorAll('#lb .wp')[0];const r=n.getBoundingClientRect();return [r.x+r.width/2+28,r.y+r.height/2+28]});
  await p.mouse.dblclick(bx[0],bx[1]);await p.waitForTimeout(1200)}
const z=await p.evaluate(()=>lbZoom);await p.waitForTimeout(1500);await p.screenshot({path:'/tmp/claude-0/lb/day1-at-site2.png'});console.log('at site 2 zoom',z.toFixed(2));await b.close()}
