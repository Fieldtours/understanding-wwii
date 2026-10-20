// Tap every home-map dot with each ready-made tour chosen; does the site's own entry open?
const {chromium,devices}=require('/home/claude/gmap/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const ctx=await b.newContext({...devices['iPhone 13'],serviceWorkers:'block'});const p=await ctx.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto(process.env.URL||'http://localhost:8830/footsteps-of-wwii/index.html');await p.waitForTimeout(1500);await p.evaluate(()=>document.getElementById('welgo')?.click());await p.waitForTimeout(800);
const tours=await p.evaluate(()=>(APP.tours||[]).map(t=>t.id));let total=0,ok=0;const miss=[];
for(const tour of [null,...tours]){
  if(tour)await p.evaluate(id=>{const t=APP.tours.find(t=>t.id===id);plan.tour=id;plan.days=t.days.length;savePlan();renderTour();goHome()},tour);await p.waitForTimeout(400);
  const n=await p.$$eval('#heromap g.wp',g=>g.length);
  for(const i of [0,Math.floor(n/3),Math.floor(2*n/3),n-1]){
    await p.evaluate(()=>{document.getElementById('dzSite')?.remove();document.body.style.overflow='';goHome()});await p.waitForTimeout(300);
    const key=await p.evaluate(i=>{const g=document.querySelectorAll('#heromap g.wp')[i];g.scrollIntoView({block:'center'});return g.dataset.key},i);await p.waitForTimeout(250);
    const r=await p.$$eval('#heromap g.wp .wpc',(c,i)=>{const r=c[i].getBoundingClientRect();return [r.x+r.width/2,r.y+r.height/2]},i);
    await p.touchscreen.tap(r[0],r[1]);await p.waitForTimeout(1300);
    const res=await p.evaluate(key=>{const c=[...document.querySelectorAll('article.card')].find(a=>a.offsetHeight&&(a.dataset.key===key));if(!c)return 'no entry for this site on screen';const t=c.getBoundingClientRect().top;return t>-5&&t<innerHeight*0.6&&!c.classList.contains('fold')?'OK':'entry not opened/visible top='+Math.round(t)},key);
    total++;if(res==='OK')ok++;else miss.push(`${tour||'(start)'} | ${key} | ${res}`)}}
console.log(`${ok}/${total} taps opened the site`);console.log(miss.join('\n'));console.log(errs.join('\n')||'no errors');await b.close()})();
