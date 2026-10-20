// Diary (Despatches), search, dark mode, desktop width, offline save.
const {chromium}=require('/home/claude/gmap/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const O='/tmp/claude-0/extra';require('fs').mkdirSync(O,{recursive:true});
const errs=[],fails=[];const ok=(c,m)=>{console.log((c?'  ok   ':'  FAIL ')+m);if(!c)fails.push(m)};
const URL='http://localhost:8830/footsteps-of-wwii/index.html';
// ---------- phone: diary + search
let ctx=await b.newContext({viewport:{width:390,height:844},serviceWorkers:'block'});let p=await ctx.newPage();
p.on('pageerror',e=>errs.push('ERR '+e.message));
await p.goto(URL);await p.waitForTimeout(1000);await p.evaluate(()=>document.querySelectorAll('.welcome,#welcome').forEach(w=>w.remove()));
// mark the first three stops of the default tour as visited
await p.click('#qa-plan');await p.waitForTimeout(800);
const vb=await p.$$('#tourout [data-visit]');ok(vb.length>0,'visit buttons on tour stops ('+vb.length+')');
for(let i=0;i<Math.min(3,vb.length);i++){await vb[i].scrollIntoViewIfNeeded();await vb[i].click();await p.waitForTimeout(300)}
await p.screenshot({path:O+'/d0-visited.png'});
await p.evaluate(()=>window.scrollTo(0,0));
await p.click('.hdr .aar-hbtn');await p.waitForTimeout(700);
const t1=await p.$eval('#aar',e=>e.innerText);ok(/Despatches/i.test(t1),'diary is called Despatches');
console.log('    diary text:',t1.replace(/\s+/g,' ').slice(0,220));
await p.screenshot({path:O+'/d1-open.png'});
// walk through: write -> answer -> notes -> next ... until booklet/print
const step=async a=>p.evaluate(a=>{const e=[...document.querySelectorAll('#aar [data-aar="'+a+'"]')].find(x=>x.offsetParent);if(!e)return false;e.click();return true},a);
for(const a of ['today','write','open','make']){if(await step(a)){console.log('    clicked',a);await p.waitForTimeout(600);break}}
await p.screenshot({path:O+'/d2-write.png'});
const ta=await p.$$('#aar textarea');for(const t of ta){if(await t.isVisible()){await t.fill('Stood on the beach where it happened. Very moving.');}}
const ans=await p.$$('#aar [data-aar=ans]');if(ans.length){await ans[0].click();await p.waitForTimeout(400)}
for(let i=0;i<8;i++){const did=await step('next')||await step('skipline')||await step('tothoughts')||await step('skipnotes');if(!did)break;await p.waitForTimeout(500);
  for(const t of await p.$$('#aar textarea'))if(await t.isVisible()&&!(await t.inputValue()))await t.fill('A long day, but worth it.');}
await p.screenshot({path:O+'/d3-after.png'});
const t3=await p.$eval('#aar',e=>e.innerText);console.log('    after:',t3.replace(/\s+/g,' ').slice(0,260));
ok(/SEEN|Despatch/i.test(t3),'diary page shows');
await step('list');await p.waitForTimeout(500);await step('booklet');await p.waitForTimeout(800);
await p.screenshot({path:O+'/d4-booklet.png'});
ok(await p.evaluate(()=>!!document.querySelector('#aar-print')),'print area exists');
const saved=await p.evaluate(()=>Object.keys(localStorage).filter(k=>k.startsWith('uw-aar')).map(k=>localStorage.getItem(k)).join(''));ok(saved.length>20,'diary saved to the phone ('+saved.length+' chars)');
await p.evaluate(()=>{const a=document.getElementById('aar');if(a)a.hidden=true});
// search
await p.evaluate(()=>window.scrollTo(0,0));
await p.click("#srchbtn");await p.waitForTimeout(500);const sb=await p.$('#sq');ok(!!sb,'search box present');
if(sb){await sb.scrollIntoViewIfNeeded();await sb.fill('Bastogne');await p.waitForTimeout(800);
  const r=await p.evaluate(()=>document.body.innerText.match(/Bastogne/g)?.length||0);ok(r>2,'search finds Bastogne ('+r+')');await p.screenshot({path:O+'/s1-search.png'});
  await sb.fill('Westerplatte');await p.waitForTimeout(800);await p.screenshot({path:O+'/s2-search.png'})}
await ctx.close();
console.log(errs.join('\n')||'NO PAGE ERRORS');if(process.env.QUICK){await b.close();return}
// ---------- dark mode, phone
ctx=await b.newContext({viewport:{width:390,height:844},colorScheme:'dark',serviceWorkers:'block'});p=await ctx.newPage();p.on('pageerror',e=>errs.push('ERR '+e.message));
await p.goto(URL);await p.waitForTimeout(1200);await p.screenshot({path:O+'/k0-welcome-dark.png'});
await p.evaluate(()=>document.querySelectorAll('.welcome,#welcome').forEach(w=>w.remove()));await p.waitForTimeout(300);
await p.screenshot({path:O+'/k1-home-dark.png'});
const bg=await p.evaluate(()=>getComputedStyle(document.body).backgroundColor);ok(!/255, 255, 255|rgb\(2[3-5]\d, 2[3-5]\d/.test(bg),'dark background '+bg);
await p.click('#qa-plan');await p.waitForTimeout(900);await p.screenshot({path:O+'/k2-tour-dark.png'});
await p.evaluate(()=>goTab('tab-time'));await p.waitForTimeout(700);await p.screenshot({path:O+'/k3-time-dark.png'});
await ctx.close();
// ---------- desktop 1440
ctx=await b.newContext({viewport:{width:1440,height:900},serviceWorkers:'block'});p=await ctx.newPage();p.on('pageerror',e=>errs.push('ERR '+e.message));
await p.goto(URL);await p.waitForTimeout(1200);await p.screenshot({path:O+'/w0-welcome.png'});
await p.evaluate(()=>document.querySelectorAll('.welcome,#welcome').forEach(w=>w.remove()));await p.waitForTimeout(300);
await p.screenshot({path:O+'/w1-home.png'});
const sw=await p.evaluate(()=>document.documentElement.scrollWidth);ok(sw<=1440,'no sideways scroll at 1440 ('+sw+')');
await p.click('#qa-plan');await p.waitForTimeout(900);await p.screenshot({path:O+'/w2-tour.png'});
await ctx.close();
// ---------- offline save with service worker
ctx=await b.newContext({viewport:{width:390,height:844}});p=await ctx.newPage();p.on('pageerror',e=>errs.push('ERR '+e.message));
await p.goto(URL);await p.waitForTimeout(2500);
const reg=await p.evaluate(async()=>{const r=await navigator.serviceWorker.getRegistration();return !!r});ok(reg,'service worker registered');
const btn=await p.$('#rdoffgo');ok(!!btn,'Save for offline button');
if(btn){await p.evaluate(()=>{document.querySelectorAll('.welcome,#welcome').forEach(w=>w.remove());const e=document.getElementById('rdoffgo');e.closest('details')&&(e.closest('details').open=true);e.scrollIntoView()});
  await p.evaluate(()=>document.getElementById('rdoffgo').click());
  for(let i=0;i<120;i++){await p.waitForTimeout(2000);const st=await p.evaluate(()=>(document.getElementById('rdoffst')||{}).innerText||'');if(/ready|saved|done|complete|offline now/i.test(st)){console.log('    offline:',st.slice(0,120));break}if(i%10==0)console.log('    ..',st.slice(0,80))}
  const n=await p.evaluate(async()=>{let t=0;for(const k of await caches.keys()){t+=(await (await caches.open(k)).keys()).length}return t});ok(n>600,'cached files: '+n);
  await ctx.setOffline(true);await p.reload();await p.waitForTimeout(1500);
  ok(await p.evaluate(()=>!!document.getElementById('qa-plan')),'app opens with no internet');await p.screenshot({path:O+'/o1-offline.png'})}
console.log(errs.join('\n')||'NO PAGE ERRORS');console.log(fails.length?'FAILS '+fails.length:'ALL PASS');await b.close()})();
