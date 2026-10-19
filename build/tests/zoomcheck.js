// What a visitor actually sees: open every tour-day map, centre each site, press + until it stops,
// and check the part of the map on screen at every step: no stretched names (too big), no names
// shrunk to specks, no name-free stretched picture covering the screen, no holes except open sea.
const {chromium}=require('/home/claude/gmap/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const W0=+(process.env.WIDTH||390);
const p=await (await b.newContext({viewport:{width:W0,height:W0<600?844:850},serviceWorkers:'block'})).newPage();
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('http://localhost:8830/understanding-wwii/index.html');await p.waitForTimeout(1200);
await p.evaluate(()=>document.querySelectorAll('.welcome,#welcome').forEach(w=>w.remove()));
const tours=await p.evaluate(()=>APP.tours.filter(t=>t.id!=='grand').map(t=>t.id));
const bad=[];let views=0,maxsteps=0;
const look=()=>p.evaluate(()=>{const RES=r=>r.w/(r.b[2]-r.b[0]);const svg=document.querySelector('#lb svg'),view=document.querySelector('#lb .view');
  const [cx,cy,sc,W,H]=svg.getAttribute('data-proj').split(',').map(Number);const sr=svg.getBoundingClientRect(),vr=view.getBoundingClientRect();
  const f=sr.width/W;const d=sc*f*1.5;
  // visible part of the map, in map units
  const L=Math.max(vr.left,sr.left),R=Math.min(vr.right,sr.right),T=Math.max(vr.top,sr.top),B=Math.min(vr.bottom,sr.bottom);
  const toLo=x=>cx+((x-sr.left)/f-W/2)/sc,toY=y=>cy-((y-sr.top)/f-H/2)/sc;
  const x0=toLo(L),x1=toLo(R),y1=toY(T),y0=toY(B);const want=rasPick(d,x0,x1,y0,y1);
  let N=0,gap=0,giant=0,tiny=0,blurb=0,rmin=9,rmax=0;const gaps=[];
  for(let i=0;i<16;i++)for(let j=0;j<16;j++){const lo=x0+(x1-x0)*(i+.5)/16,y=y0+(y1-y0)*(j+.5)/16;N++;let top=null;
    for(const r of want)if(lo>=r.b[0]&&lo<=r.b[2]&&y>=MY(r.b[1])&&y<=MY(r.b[3])&&true)top=r;
    const la_=Math.atan(Math.sinh(y*Math.PI/180))*180/Math.PI;if(isSea(lo,la_))continue;if(!top){gap++;gaps.push([lo,Math.atan(Math.sinh(y*Math.PI/180))*180/Math.PI]);continue}const q=RES(top)/d;
    if(top.lv>=0){if(q<0.45)giant++;if(q>2.2)tiny++;rmin=Math.min(rmin,q);rmax=Math.max(rmax,q)}else if(q<0.25)blurb++}
  return {z:lbZoom,d:Math.round(d),gap:gap/N,giant:giant/N,tiny:tiny/N,blurb:blurb/N,mix:rmax?rmax/rmin:0,gaps}});
const allgaps=[];
for(const id of tours){
  await p.evaluate(id=>{goTab('tab-tour');const t=APP.tours.find(t=>t.id===id);plan.tour=id;plan.days=t.days.length;plan.mode='full';savePlan();renderTour()},id);await p.waitForTimeout(500);
  const nm=await p.$$eval('#tourout .sitmap',x=>x.length);
  for(let mi=0;mi<nm;mi++){
    await p.evaluate(mi=>{const m=document.querySelectorAll('#tourout .sitmap')[mi];m.scrollIntoView();openMap(m)},mi);await p.waitForTimeout(150);
    const title=await p.$eval('#lb .lbt',e=>e.textContent);const nw=await p.$$eval('#lb g.wp',x=>x.length);
    for(let wi=0;wi<nw;wi++){
      await p.evaluate(()=>{const b=document.querySelector('.lbz [data-z="0"]');b&&b.click()});await p.waitForTimeout(60);
      for(let step=0;step<12;step++){
        await p.evaluate(wi=>{const view=document.querySelector('#lb .view');const n=document.querySelectorAll('#lb g.wp')[wi];const r=n.getBoundingClientRect(),vr=view.getBoundingClientRect();
          view.scrollLeft+=r.x+r.width/2-(vr.left+vr.width/2);view.scrollTop+=r.y+r.height/2-(vr.top+vr.height/2)},wi);await p.waitForTimeout(200);
        const r=await look();views++;r.gaps.forEach(g=>allgaps.push(g));
        if(r.giant>0.02||r.tiny>0.02||r.blurb>0.25||r.mix>2.05)bad.push(`${id} | ${title} | site ${wi+1} | zoom ${r.z.toFixed(2)} d ${r.d} | giant ${Math.round(r.giant*100)}% tiny ${Math.round(r.tiny*100)}% blur ${Math.round(r.blurb*100)}% mix ${r.mix.toFixed(1)}`);
        const dis=await p.evaluate(()=>{const b=document.querySelector('.lbz [data-z="1"]');if(b.disabled)return true;b.click();return false});
        if(dis){maxsteps=Math.max(maxsteps,step);break}await p.waitForTimeout(60)}}
    await p.keyboard.press('Escape');await p.waitForTimeout(80)}
  console.log('tour',id,'done, views so far',views)}
require('fs').writeFileSync('/tmp/claude-0/zgaps'+W0+'.json',JSON.stringify(allgaps));
console.log('views checked',views);console.log(bad.length?bad.join('\n'):'ALL VIEWS OK');console.log(errs.join('\n')||'no page errors');await b.close()})();
