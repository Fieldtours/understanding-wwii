// As if the phone ignored taps on the dots themselves: the map must still open the nearest site
const {chromium,devices}=require('/home/claude/gmap/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const ctx=await b.newContext({...devices['iPhone 13'],serviceWorkers:'block'});const p=await ctx.newPage();
await p.goto('http://localhost:8830/footsteps-of-wwii/index.html');await p.waitForTimeout(1500);await p.evaluate(()=>document.querySelectorAll('.welcome,#welcome').forEach(w=>w.remove()));
await p.addStyleTag({content:'.sitmap svg .wp,.sitmap svg .wp *{pointer-events:none!important}'});
const box=await p.$('#heromap .sitmap');await box.scrollIntoViewIfNeeded();
const [x,y]=await p.$$eval('#heromap g.wp .wpc',c=>{const r=c[20].getBoundingClientRect();return [r.x+r.width/2,r.y+r.height/2]});
await p.touchscreen.tap(x,y);await p.waitForTimeout(900);
console.log('dot tap ->',await p.evaluate(()=>({lb:!!document.getElementById('lb'),home:!document.getElementById('p-home').hidden})));
await p.evaluate(()=>goHome());await p.waitForTimeout(500);await (await p.$('#heromap .sitmap')).scrollIntoViewIfNeeded();
const r=await p.$eval('#heromap .sitmap',e=>{const r=e.getBoundingClientRect();return [r.x+25,r.y+r.height*0.45]});
await p.touchscreen.tap(r[0],r[1]);await p.waitForTimeout(900);
console.log('at',r,await p.evaluate(([x,y])=>{const e=document.elementFromPoint(x,y);return e.tagName+' '+e.className.baseVal},r));console.log('empty tap ->',await p.evaluate(()=>({lb:!!document.getElementById('lb')})));await b.close()})();
