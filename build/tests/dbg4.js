const {chromium}=require('/home/claude/gmap/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const p=await (await b.newContext({viewport:{width:1024,height:800},serviceWorkers:'block'})).newPage();
await p.goto('http://localhost:8830/footsteps-of-wwii/index.html');await p.waitForTimeout(1500);
await p.evaluate(()=>document.querySelectorAll('.welcome,#welcome').forEach(w=>w.remove()));
console.log(await p.evaluate(()=>{const RES=r=>r.w/(r.b[2]-r.b[0]);const out=[];
 document.querySelectorAll('svg[data-proj]').forEach(svg=>{if(!/CZECHIA/.test(svg.textContent))return;
  const [cx,cy,sc,W,H]=svg.getAttribute('data-proj').split(',').map(Number);const fview=window.innerWidth/W;let best=0;
  const x0=cx-W/2/sc,x1=cx+W/2/sc,y0=cy-H/2/sc,y1=cy+H/2/sc;
  RASTER.forEach(r=>{if(r.lv>=0&&r.b[2]>x0&&r.b[0]<x1&&MY(r.b[3])>y0&&MY(r.b[1])<y1)best=Math.max(best,RES(r))});const d=Math.min(sc*1.5*fview*8,best*2.2*1.5/1.5);const want=rasPick(d,x0,x1,y0,y1);const c={};
  for(let i=0;i<24;i++)for(let j=0;j<24;j++){const lo=x0+(x1-x0)*(i+.5)/24,y=y0+(y1-y0)*(j+.5)/24;let top=null;for(const r of want){if(lo>=r.b[0]&&lo<=r.b[2]&&y>=MY(r.b[1])&&y<=MY(r.b[3])&&(!top||RES(r)>RES(top)))top=r}
   if(top){const k=top.g+'/'+top.lv+'/'+Math.round(RES(top));c[k]=(c[k]||0)+1}}
  out.push({sc,W,d,c})});return JSON.stringify(out)}));await b.close()})();
