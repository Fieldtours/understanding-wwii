// Checks EVERY map in the app at EVERY zoom step of the enlarged view (1x to 8x):
// each point of the map must be covered by a map picture, and no picture with place names
// may be stretched so far that the names turn giant and blurry.
const {chromium}=require('/home/claude/gmap/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const p=await (await b.newContext({viewport:{width:390,height:844},serviceWorkers:'block'})).newPage();
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto(process.env.URL||'http://localhost:8830/understanding-wwii/index.html');await p.waitForTimeout(1200);
await p.evaluate(()=>document.querySelectorAll('.welcome,#welcome').forEach(w=>w.remove()));
const check=()=>p.evaluate(()=>{
  const RES=r=>r.w/(r.b[2]-r.b[0]);const out=[];const seen=new Set();
  document.querySelectorAll('svg[data-proj]').forEach(svg=>{
    const pr=svg.getAttribute('data-proj');if(seen.has(pr)||window.__done&&window.__done.has(pr))return;seen.add(pr);(window.__done=window.__done||new Set()).add(pr);
    const [cx,cy,sc,W,H]=pr.split(',').map(Number);
    const x0=cx-W/2/sc,x1=cx+W/2/sc,y0=cy-H/2/sc,y1=cy+H/2/sc;
    const host=svg.closest('section,[id]');const title=(svg.closest('.sitmap')?'sitmap ':'')+(host?host.id:'')+' : '+([...svg.querySelectorAll('text')].map(t=>t.textContent).join(' ').slice(0,60))+' ['+pr.split(',').map(v=>(+v).toFixed(2)).join(',')+']';
    let best=0;RASTER.forEach(r=>{if(r.lv>=0&&r.b[2]>x0&&r.b[0]<x1&&MY(r.b[3])>y0&&MY(r.b[1])<y1)best=Math.max(best,RES(r))});const lbMax=best?Math.max(1,Math.min(8,best*2.2/(sc*RAS_PR))):8;
    for(const z of [1,1.6,2.56,4.1,6.55,8].filter(z=>z<lbMax).concat([lbMax])){const d=sc*z*1.5;const want=rasPick(d,x0,x1,y0,y1);
      let gap=0,giant=0,blur=0,N=0;
      for(let i=0;i<24;i++)for(let j=0;j<24;j++){const lo=x0+(x1-x0)*(i+.5)/24,y=y0+(y1-y0)*(j+.5)/24;N++;
        let top=null;for(const r of want){if(lo>=r.b[0]&&lo<=r.b[2]&&y>=MY(r.b[1])&&y<=MY(r.b[3])&&(!top||RES(r)>RES(top)))top=r}
        if(!top){gap++;(window.__gaps=window.__gaps||[]).push([+lo.toFixed(3),+(Math.atan(Math.sinh(y*Math.PI/180))*180/Math.PI).toFixed(3)]);continue}
        if(top.lv>=0&&RES(top)<0.45*d)giant++;
        if(RES(top)<0.2*d)blur++}
      if(gap||giant)out.push({title,z,gap:Math.round(gap/N*100),giant:Math.round(giant/N*100),blur:Math.round(blur/N*100)})}});
  return {n:seen.size,bad:out}});
let total=0,bad=[];
const run=async(label)=>{const r=await check();total+=r.n;r.bad.forEach(x=>bad.push(label+' | '+JSON.stringify(x)));return r.n};
// home overview
console.log('home',await run('home'));
// every ready-made tour, every day, all stops
const tours=await p.evaluate(()=>APP.tours.map(t=>t.id));
for(const id of tours){await p.evaluate(id=>{goTab('tab-tour');const t=APP.tours.find(t=>t.id===id);plan.tour=id;plan.days=t.days.length;plan.mode='full';savePlan();renderTour()},id);await p.waitForTimeout(700);
  await p.evaluate(()=>document.querySelectorAll('#tourout article.card button.top').forEach(b=>b.click()));await p.waitForTimeout(500);
  console.log('tour',id,await run('tour '+id))}
// by-area planner, every area
const areas=await p.evaluate(()=>AP_AREAS.map(a=>a.id));
for(const a of areas){await p.evaluate(a=>{try{uxSet('area');AP.area=a;AP.areas&&(AP.areas=[a]);apSave&&apSave();renderTour()}catch(e){}},a);await p.waitForTimeout(500);await run('area '+a)}
// other pages with maps
for(const t of ['tab-time','tab-map','tab-mus','tab-dday','tab-brief']){await p.evaluate(t=>goTab(t),t);await p.waitForTimeout(800);console.log(t,await run(t))}
console.log('maps checked:',total);require('fs').writeFileSync('/tmp/claude-0/gaps.json',JSON.stringify(await p.evaluate(()=>window.__gaps||[])));console.log(bad.length?bad.join('\n'):'ALL MAPS OK at every zoom');console.log(errs.join('\n')||'no page errors');await b.close()})();
