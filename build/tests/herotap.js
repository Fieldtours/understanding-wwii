const {chromium,devices}=require('/home/claude/gmap/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const ctx=await b.newContext({...devices['iPhone 13'],serviceWorkers:'block'});const p=await ctx.newPage();
p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('http://localhost:8830/footsteps-of-wwii/index.html');await p.waitForTimeout(1500);await p.evaluate(()=>document.querySelectorAll('.welcome,#welcome').forEach(w=>w.remove()));
const pts=await p.$$eval('#heromap g.wp',gs=>gs.slice(0,40).map(g=>{const c=g.querySelector('.wpc').getBoundingClientRect();return [c.x+c.width/2,c.y+c.height/2+scrollY,g.dataset.key]}));
console.log('dots',pts.length);
for(const k of [3,17,30]){const [x,y,key]=pts[k];await p.evaluate(y=>scrollTo(0,y-400),y);await p.waitForTimeout(300);const sy=await p.evaluate(()=>scrollY);
 const hit=await p.evaluate(([x,y])=>{const e=document.elementFromPoint(x,y);return e.tagName+'.'+(e.getAttribute('class')||'')+' wp:'+!!e.closest('.wp')},[x,y-sy]);
 await p.touchscreen.tap(x+(+process.env.OFF||0),y-sy+(+process.env.OFF||0));await p.waitForTimeout(900);
 const r=await p.evaluate(()=>({lb:!!document.getElementById('lb'),home:!document.getElementById('p-home').hidden,tab:[...document.querySelectorAll('[role=tab]')].find(b=>b.getAttribute('aria-selected')==='true')?.id}));
 console.log(key,hit,JSON.stringify(r));
 await p.evaluate(()=>{document.getElementById('lb')?.remove();goHome()});await p.waitForTimeout(500)}
await b.close()})();
