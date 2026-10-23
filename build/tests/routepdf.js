const {chromium}=require(process.argv[2]+'/node_modules/playwright');
const url=process.argv[3], out=process.argv[4], picks=JSON.parse(process.argv[5]||'[[0,1,2],[3,4]]'), mob=process.argv[6]==='mobile';
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const ctx=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,serviceWorkers:'block',acceptDownloads:true,userAgent:mob?'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148':'Mozilla/5.0 (X11; Linux x86_64) Chrome/120'});
const p=await ctx.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push('console: '+m.text())});
await p.goto(url);await p.waitForTimeout(1200);
await p.evaluate(()=>document.querySelectorAll('.welcome,#welcome').forEach(w=>w.remove()));
await p.evaluate(()=>{if(typeof goTab==='function')goTab('tab-tour')});await p.waitForTimeout(500);
await p.click('[data-uxpick=my]');await p.waitForTimeout(800);
const nd=picks.length;await p.click(`#mybox [data-mydays="${nd}"]`);await p.waitForTimeout(400);
const ids=await p.$$eval('#mybox [data-myadd]',x=>x.map(b=>b.dataset.myadd));
for(let d=0;d<nd;d++){await p.click(`#mybox [data-mycur="${d+1}"]`);await p.waitForTimeout(300);
  for(const i of picks[d]){let id=ids[i];if(typeof i==='string'){id=await p.evaluate(n=>{const r=[...document.querySelectorAll('#mybox .my-row')].find(r=>r.querySelector('span').textContent.startsWith(n));return r?r.querySelector('[data-myadd]').dataset.myadd:null},i);if(!id){console.log('not found',i);continue}}await p.click(`#mybox [data-myadd="${id}"]`);await p.waitForTimeout(150)}}
const before=await p.$('#mybox .rp-btn');console.log('button before make:',!!before);
await p.click('#mybox .my-go');await p.waitForTimeout(1200);
const btn=await p.$('#mybox .rp-btn');console.log('button after make:',!!btn, btn?await btn.textContent():'');
await p.evaluate(()=>window.scrollTo(0,document.getElementById('mybox').getBoundingClientRect().top+scrollY-80));await p.waitForTimeout(300);
await p.screenshot({path:out+'-button.png'});
const t0=Date.now();
if(mob){await btn.click();await p.waitForSelector('#rpReady',{timeout:60000});await p.screenshot({path:out+'-sheet.png'});
  const buf=await p.evaluate(async()=>{const a=new Uint8Array(await window.__rpLast.blob.arrayBuffer());let s='';for(let i=0;i<a.length;i+=8192)s+=String.fromCharCode.apply(null,a.subarray(i,i+8192));return btoa(s)});
  require('fs').writeFileSync(out+'.pdf',Buffer.from(buf,'base64'));}
else{const [dl]=await Promise.all([p.waitForEvent('download',{timeout:60000}),btn.click()]);console.log('file name:',dl.suggestedFilename());await dl.saveAs(out+'.pdf')}
console.log('seconds:',((Date.now()-t0)/1000).toFixed(1));
// edit hides button
await p.click('#mybox [data-my=edit]');await p.waitForTimeout(500);console.log('button while editing:',!!(await p.$('#mybox .rp-btn')));
console.log(errs.length?errs.join('\n'):'NO PAGE ERRORS');await b.close()})();
