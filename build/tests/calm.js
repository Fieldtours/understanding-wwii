// The page must sit still when nobody touches it (constant redrawing freezes iPhones)
const {chromium,devices}=require('/home/claude/gmap/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});let bad=0;
for(const URL of (process.env.URLS||'http://localhost:8830/footsteps-of-wwii/index.html').split(' ')){
const ctx=await b.newContext({...devices['iPhone 13'],serviceWorkers:'block'});const p=await ctx.newPage();
await p.goto(URL);await p.waitForTimeout(1500);await p.evaluate(()=>{const g=document.getElementById('welgo')||document.getElementById('wel-go');g&&g.click()});await p.waitForTimeout(1200);
const count=()=>p.evaluate(()=>new Promise(r=>{let n=0;const o=new MutationObserver(m=>n+=m.length);o.observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true});setTimeout(()=>{o.disconnect();r(n)},3000)}));
const home=await count();
await p.evaluate(()=>{if(window.goTab){goTab('tab-tour');const b=document.querySelector('[data-today="1"]');b&&b.click()}else{document.querySelector('[data-go="tour"]')?.click()}});await p.waitForTimeout(1000);
await p.evaluate(()=>scrollTo(0,2000));await p.waitForTimeout(800);const tour=await count();
console.log(URL.split('/').slice(-2).join('/'),'changes in 3 s idle: home',home,'tour',tour);if(home>5||tour>5)bad++;await ctx.close()}
console.log(bad?'FAIL':'ALL CALM');await b.close()})();
