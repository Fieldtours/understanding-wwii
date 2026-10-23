const {chromium}=require(process.argv[2]+'/node_modules/playwright');
const page=process.argv[3],out=process.argv[4],mob=process.argv[5]==='mobile';
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const ctx=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,serviceWorkers:'block',acceptDownloads:true,
  userAgent:mob?'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148':'Mozilla/5.0 (X11; Linux x86_64) Chrome/120'});
const p=await ctx.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push('console: '+m.text())});
await p.goto('http://localhost:8830/scw/'+page+'#tour');await p.waitForTimeout(1500);
await p.evaluate(()=>{const w=document.getElementById('welcome');if(w)w.remove();document.body.style.overflow=''});
console.log('button on step 1:',!!(await p.$('.rp-btn')));
await p.click('.opt[data-m=regions]');await p.waitForTimeout(300);
await p.click('.rgrid button[data-r=aragon]');await p.waitForTimeout(300);
await p.click('#p-next');await p.waitForTimeout(500);
await p.click('.grid2 button[data-t="2d"]');await p.click('#p-next');await p.waitForTimeout(600);
await p.click('#p-go');await p.waitForTimeout(1200);
const btn=await p.$('.rp-btn');console.log('button on result:',!!btn,btn?(await btn.textContent()).trim():'');
await p.evaluate(()=>{const b=document.querySelector('.rp-btn');window.scrollTo(0,b.getBoundingClientRect().top+scrollY-250)});await p.waitForTimeout(300);await p.screenshot({path:out+'-button.png'});
// remove a stop: button should come back after the rebuild
await p.click('[data-drop]');await p.waitForTimeout(800);console.log('button after removing a stop:',!!(await p.$('.rp-btn')));
const t0=Date.now();const btn2=await p.$('.rp-btn');
if(mob){await btn2.click();await p.waitForSelector('#rpReady',{timeout:60000});await p.screenshot({path:out+'-sheet.png'});
  const buf=await p.evaluate(async()=>{const a=new Uint8Array(await window.__rpLast.blob.arrayBuffer());let s='';for(let i=0;i<a.length;i+=8192)s+=String.fromCharCode.apply(null,a.subarray(i,i+8192));return [btoa(s),window.__rpLast.name]});
  require('fs').writeFileSync(out+'.pdf',Buffer.from(buf[0],'base64'));console.log('file name:',buf[1])}
else{const [dl]=await Promise.all([p.waitForEvent('download',{timeout:60000}),btn2.click()]);console.log('file name:',dl.suggestedFilename());await dl.saveAs(out+'.pdf')}
console.log('seconds:',((Date.now()-t0)/1000).toFixed(1));
console.log(errs.length?errs.join('\n'):'NO PAGE ERRORS');await b.close()})();
