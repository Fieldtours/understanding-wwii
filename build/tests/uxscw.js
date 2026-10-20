// Phone-friendly layer in the Spanish Civil War guide (English and Spanish pages)
const {chromium}=require('/home/claude/gmap/node_modules/playwright');const O='/tmp/claude-0/ux/scw';
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});const fails=[];
for(const page of ['index.html','es.html'])for(const W of [390,1024,1440]){
const ctx=await b.newContext({viewport:{width:W,height:W<600?844:850},deviceScaleFactor:W<600?2:1,serviceWorkers:'block'});
await ctx.addInitScript(()=>{try{localStorage.setItem('scw-welcomed','1');if(!sessionStorage.getItem('seeded')){sessionStorage.setItem('seeded','1');localStorage.removeItem('scw-plan')}}catch(e){}});
const p=await ctx.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));const ok=(c,m)=>{if(!c)fails.push(page+' '+W+': '+m)};const tag=page.slice(0,2)+W;const shot=n=>W===390&&p.screenshot({path:`${O}/${tag}-${n}.png`});
await p.goto('http://localhost:8843/'+page);await p.waitForTimeout(1500);await p.evaluate(()=>{const w=document.getElementById('welcome');w&&w.remove();document.body.style.overflow=''});
ok(await p.$('#dzToday .dzpick'),'plan-first card');ok(await p.$('#dzOff'),'offline prompt');
const nav=await p.$$eval('nav.bot button',x=>x.map(b=>b.dataset.go+':'+b.textContent.trim()));console.log(tag,nav.join(' '));ok(nav.map(x=>x.split(':')[0]).join()==='home,tour,map,time,more','nav order');
await shot('1-home');
// make a plan (as the planner would have saved it), reload
const ids=await p.evaluate(()=>SCW.stops.filter(s=>s.r==='madrid').slice(0,4).map(s=>s.id));
await p.evaluate(ids=>localStorage.setItem('scw-plan',JSON.stringify({step:4,mode:'regions',regions:['madrid'],time:'2d',start:'first',hours:7,focus:'ess',forced:[],dropped:[],res:{ids,route:ids,days:[{ids:ids.slice(0,2),legs:[[0,0],[3,8]],used:200},{ids:ids.slice(2),legs:[[0,0],[2,6]],used:200}],left:[],start:null}})),ids);
await p.reload();await p.waitForTimeout(1500);await p.evaluate(()=>{const w=document.getElementById('welcome');w&&w.remove();document.body.style.overflow=''});
ok(await p.$('#dzToday .dzprog'),'progress');await p.click('[data-dzday="1"]');await p.waitForTimeout(300);
const n1=await p.$eval('#dzToday',e=>e.textContent);ok(n1.includes(await p.evaluate(id=>SCW.stops.find(s=>s.id===id).n,ids[0])),'next stop is first stop');
await p.evaluate(()=>scrollTo(0,0));await shot('2-today');
await p.click('#dzToday [data-dzvis]');await p.waitForTimeout(300);const n2=await p.$eval('#dzToday',e=>e.textContent);ok(n2.includes(await p.evaluate(id=>SCW.stops.find(s=>s.id===id).n,ids[1])),'visited moves to next');
ok(await p.evaluate(()=>JSON.parse(localStorage.getItem('scw-visited')||'[]').length===1),'visited saved');
await p.click('#dzToday [data-stop]');await p.waitForTimeout(500);ok(await p.$('.sheet'),'read about it opens the stop');await p.keyboard.press('Escape');await p.waitForTimeout(300);
await p.evaluate(()=>document.querySelector('.sheet [data-close]')?.click());await p.waitForTimeout(200);
await p.click('nav.bot [data-go="map"]');await p.waitForTimeout(800);ok(await p.evaluate(()=>{const n=document.getElementById('dzNext');return n&&!n.hidden}),'next bar on map page');await shot('3-map-nextbar');
await p.click('nav.bot [data-go="more"]');await p.waitForTimeout(500);ok(await p.$('#dzSet'),'settings');await p.click('[data-dza="1"]');ok(await p.evaluate(()=>document.documentElement.classList.contains('dz-a1')),'text size');await shot('4-more');await p.click('[data-dza="0"]');
await p.click('nav.bot [data-go="tour"]');await p.waitForTimeout(800);await shot('5-tour');
ok(!errs.length,'errors: '+errs.join(' / '));await ctx.close()}
console.log(fails.length?'FAIL\n'+fails.join('\n'):'ALL PASS');await b.close()})();
