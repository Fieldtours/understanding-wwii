const {chromium}=require('/home/claude/gmap/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});const p=await (await b.newContext({viewport:{width:1280,height:900},deviceScaleFactor:2,serviceWorkers:'block'})).newPage();
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file:///mnt/user-data/uploads/Desktop/DZ%20Charlie%20Field%20Guides/UPLOAD%20THIS%20TO%20NETLIFY%20-%20Home%20page%20(dzcharlie.com)/index.html');await p.waitForTimeout(1500);
const c=await p.$('article.g-uw');await c.scrollIntoViewIfNeeded();await p.evaluate(()=>window.scrollBy(0,-60));await p.waitForTimeout(500);
await p.screenshot({path:'/tmp/claude-0/shots/website.png'});
const d=await p.$('a.dl.uw');await d.scrollIntoViewIfNeeded();await d.screenshot({path:'/tmp/claude-0/shots/website-dl.png'});
await p.setViewportSize({width:390,height:844});await (await p.$('article.g-uw')).scrollIntoViewIfNeeded();await p.waitForTimeout(400);await (await p.$('article.g-uw')).screenshot({path:'/tmp/claude-0/shots/website-phone.png'});
console.log(errs.join('\n')||'no errors');await b.close()})();
