// iPhone-like: clicks on dots never arrive (only the touch). Dots must still open their site.
const {chromium,devices}=require('/home/claude/gmap/node_modules/playwright');
const URL=process.env.URL||'http://localhost:8830/footsteps-of-wwii/index.html';
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const ctx=await b.newContext({...devices['iPhone 13'],serviceWorkers:'block'});const p=await ctx.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto(URL);await p.waitForTimeout(1500);await p.evaluate(()=>document.querySelectorAll('.welcome,#welcome').forEach(w=>w.remove()));
// swallow every click that lands on a map, like iOS does on the first tap
await p.evaluate(()=>document.addEventListener('click',e=>{if(e.target.closest&&e.target.closest('.sitmap,#lb')){e.stopImmediatePropagation();e.preventDefault()}},true));
const st=()=>p.evaluate(()=>({lb:!!document.getElementById('lb'),home:!document.getElementById('p-home').hidden,tab:[...document.querySelectorAll('[role=tab]')].find(b=>b.getAttribute('aria-selected')==='true')?.id,flash:!!document.querySelector('.wpflash')}));
const tapDot=async(sel,i,off)=>{const h=await p.$$(sel);if(!h.length)return 'no dots';await h[Math.min(i,h.length-1)].scrollIntoViewIfNeeded();await p.waitForTimeout(200);const r=await h[Math.min(i,h.length-1)].boundingBox();await p.touchscreen.tap(r.x+r.width/2+off,r.y+r.height/2+off);await p.waitForTimeout(900);return JSON.stringify(await st())};
console.log('home dot        ',await tapDot('#p-home .sitmap .wp .wpc',10,0));
await p.evaluate(()=>goHome());await p.waitForTimeout(400);
console.log('home dot, 9px off',await tapDot('#p-home .sitmap .wp .wpc',25,9));
await p.evaluate(()=>{goTab('tab-tour')});await p.waitForTimeout(600);
console.log('tour map dot    ',await tapDot('#tourout .sitmap .wp .wpc, #tourout .sitmap .wp',1,0));
await p.evaluate(()=>{const m=document.querySelector('#tourout .sitmap');m&&openMap(m)});await p.waitForTimeout(700);
console.log('big map dot     ',await tapDot('#lb .wp .wpc, #lb .wp',1,0));
console.log(errs.join('\n')||'no page errors');await b.close()})();
