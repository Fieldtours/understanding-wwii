// Phone screenshots for the design canvas.
const {chromium}=require('/home/claude/gmap/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const O='/tmp/claude-0/shots';require('fs').mkdirSync(O,{recursive:true});
const ctx=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,serviceWorkers:'block'});const p=await ctx.newPage();
const URL='http://localhost:8830/understanding-wwii/index.html';
await p.goto(URL);await p.waitForTimeout(2000);await p.screenshot({path:O+'/welcome.png'});
await p.click('#welgo');await p.waitForTimeout(1200);await p.screenshot({path:O+'/home.png'});
await p.click('#qa-plan');await p.waitForTimeout(800);await p.click('[data-uxpick=area]');await p.waitForTimeout(1800);await p.screenshot({path:O+'/area.png'});
await p.click('[data-uxpick=days]');await p.waitForTimeout(800);
await p.evaluate(()=>{plan.tour='west40'in{}?'':plan.tour;const t=APP.tours.find(t=>/Normandy/.test(t.name||t.t||''))||APP.tours[2];plan.tour=t.id;plan.days=t.days.length;plan.mode='full';savePlan();renderTour()});await p.waitForTimeout(1200);
await p.evaluate(()=>{const d=document.querySelectorAll('#tourout .daybar')[4];d&&d.scrollIntoView();window.scrollBy(0,-120)});await p.waitForTimeout(1800);await p.screenshot({path:O+'/day.png'});
await p.evaluate(()=>{const c=[...document.querySelectorAll('#tourout article.card')].find(e=>/Pointe du Hoc/.test(e.innerText))||document.querySelectorAll('#tourout article.card')[8];c.querySelector('button.top').click();c.scrollIntoView();window.scrollBy(0,-70)});await p.waitForTimeout(1200);await p.screenshot({path:O+'/stop.png'});
await p.evaluate(()=>{goTab('tab-weap');window.scrollTo(0,0)});await p.waitForTimeout(1500);await p.screenshot({path:O+'/weapons.png'});
await b.close()})();
