// The phone-friendly layer: every new piece shows up, works, and nothing breaks.
const {chromium}=require('/home/claude/gmap/node_modules/playwright');
const URL=process.env.URL||'http://localhost:8830/footsteps-of-wwii/index.html',O=process.env.OUT||'/tmp/claude-0/ux';
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});const fails=[];
for(const W of [390,1024,1440]){
const ctx=await b.newContext({viewport:{width:W,height:W<600?844:850},deviceScaleFactor:W<600?2:1,serviceWorkers:'block'});const p=await ctx.newPage();
const errs=[];p.on('pageerror',e=>errs.push(e.message));const ok=(c,m)=>{if(!c)fails.push(W+': '+m)};const shot=n=>W===390&&p.screenshot({path:`${O}/${n}.png`});
await p.goto(URL);await p.waitForTimeout(1500);await p.evaluate(()=>document.querySelectorAll('.welcome,#welcome').forEach(w=>w.remove()));await p.waitForTimeout(300);
ok(await p.$('#dzToday .dzpick'),'Today card on home');ok(await p.$('#dzOff'),'offline prompt on home');
const nav=await p.$$eval('.bbar [data-rd]',x=>x.map(b=>b.dataset.rd+':'+b.textContent.trim()));ok(nav.slice(0,5).join()==='home:Home,tour:Tour,map:Map,time:Story,more:More','nav order '+nav);
await shot('1-home');
// small buttons
const small=await p.$$eval('main button, .bbar button',bs=>bs.filter(b=>{const r=b.getBoundingClientRect();return r.width>0&&r.height>0&&r.height<40&&getComputedStyle(b).display!=='none'}).map(b=>(b.className||b.textContent.trim()).slice(0,30)));
if(small.length)console.log(W,'small buttons on home:',[...new Set(small)].slice(0,12).join(' | '));
// choose a tour: the list folds and the route comes into view
await p.click('[data-dzroad]');await p.waitForTimeout(500);
const tb=await p.$('.tourlist [data-tour]:not([aria-pressed="true"])');if(tb){await tb.click();await p.waitForTimeout(2200);
  const r=await p.evaluate(()=>{const s=document.querySelector('#p-tour .summ');const box=document.querySelector('.tourlist');return {top:s?s.getBoundingClientRect().top:-1,fold:box.classList.contains('dzc-fold'),vis:[...box.querySelectorAll('button')].filter(b=>b.offsetHeight).length}});
  ok(r.top>=0&&r.top<300,'route in view after choosing '+r.top);ok(r.fold&&r.vis<=2,'tour list folded '+JSON.stringify(r));await shot('2-tour-chosen')}
// a stop: plan box first, story shortened
await p.evaluate(()=>{const c=document.querySelector('#tourout article.card button.top');c&&c.click()});await p.waitForTimeout(400);
const card=await p.evaluate(()=>{const b=document.querySelector('#tourout article.card .body');if(!b)return null;return {plan:!!b.querySelector('.dzc-plan'),more:!!b.querySelector('.dzc-more'),planFirst:(()=>{const pl=b.querySelector('.plan'),pp=b.querySelector(':scope>p');return !pl||!pp||!!(pl.compareDocumentPosition(pp)&4)})()}});
ok(card&&card.planFirst,'plan before story '+JSON.stringify(card));
await p.evaluate(()=>document.querySelector('#tourout article.card').scrollIntoView());await p.evaluate(()=>scrollBy(0,-80));await shot('3-stop');
// travelling today: pick day 1
await p.evaluate(()=>{const b=document.querySelector('[data-today="1"]');b&&b.click()});await p.waitForTimeout(600);await p.evaluate(()=>{const c=[...document.querySelectorAll('#tourout article.card')].pop();c&&c.scrollIntoView()});await p.waitForTimeout(500);
ok(await p.evaluate(()=>{const n=document.getElementById('dzNext');return n&&!n.hidden}),'next-stop bar shows on tour page');await shot('4-next-bar');
await p.click('.bbar [data-rd="home"]');await p.waitForTimeout(700);
ok(await p.$('#dzToday .today'),'Today box on home when travelling');ok(await p.$('#dzToday .dzprog'),'progress bar');
await p.evaluate(()=>scrollTo(0,0));await shot('5-home-today');
// More page: text size + sun
await p.click('.bbar [data-rd="more"]');await p.waitForTimeout(600);ok(await p.$('#dzSet'),'settings on More');
await p.click('[data-dza="2"]');ok(await p.evaluate(()=>document.documentElement.classList.contains('dz-a2')),'big text');
await p.evaluate(()=>document.getElementById('dzSet').scrollIntoView({block:'center'}));await shot('6-more-settings');await p.click('[data-dza="0"]');
// map: Me button
await p.click('.bbar [data-rd="tour"]');await p.waitForTimeout(600);
await p.evaluate(()=>{const m=document.querySelector('#tourout .sitmap');m&&openMap(m)});await p.waitForTimeout(800);ok(await p.$('#lb .dzme'),'Me button on big map');
await ctx.grantPermissions(['geolocation']);await ctx.setGeolocation({latitude:51.5,longitude:-0.12});await p.click('#lb .dzme');await p.waitForTimeout(800);
const me=await p.$('#lb .dz-me');const msg=await p.$eval('.dzmsg',e=>e.textContent).catch(()=>'');console.log(W,'me dot:',!!me,msg);await shot('7-map-me');
await p.keyboard.press('Escape');
ok(!errs.length,'page errors: '+errs.join(' / '));await ctx.close()}
console.log(fails.length?'FAIL\n'+fails.join('\n'):'ALL PASS');await b.close()})();
