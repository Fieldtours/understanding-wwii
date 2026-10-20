const {chromium,devices}=require('/home/claude/gmap/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const ctx=await b.newContext({...devices['iPhone 13'],serviceWorkers:'block'});const p=await ctx.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>m.type()==='error'&&errs.push('console: '+m.text()));
await p.goto(process.env.URL||'http://localhost:8830/footsteps-of-wwii/index.html');await p.waitForTimeout(2000);
const w=await p.evaluate(()=>{const w=document.querySelector('.welcome,#welcome');if(!w)return null;return {hidden:w.hidden,html:w.outerHTML.replace(/<svg.*?<\/svg>/gs,'').slice(0,900),buttons:[...w.querySelectorAll('button,a')].map(b=>b.textContent.trim()+' #'+b.id)}});
console.log(JSON.stringify(w,null,1));await p.screenshot({path:'/tmp/claude-0/ux/enter1.png'});
const btn=await p.$('.welcome button, #welcome button');if(btn){const r=await btn.boundingBox();await p.touchscreen.tap(r.x+r.width/2,r.y+r.height/2);await p.waitForTimeout(1200)}
console.log('after tap: welcome still visible?',await p.evaluate(()=>{const w=document.querySelector('.welcome,#welcome');return !!w&&!w.hidden&&w.offsetHeight>0}));
await p.screenshot({path:'/tmp/claude-0/ux/enter2.png'});console.log(errs.join('\n')||'no errors');await b.close()})();
