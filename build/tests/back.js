// Every guide has a visible way back to dzcharlie.com, on its home screen and its More page
const {chromium,devices}=require('/home/claude/gmap/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});let bad=0;
for(const [n,URL] of [['fw','http://localhost:8830/footsteps-of-wwii/index.html'],['ie','http://localhost:8842/index.html'],['ec','http://localhost:8841/normandy.html'],['scw','http://localhost:8843/index.html'],['es','http://localhost:8843/es.html']]){
const p=await (await b.newContext({...devices['iPhone 13'],serviceWorkers:'block'})).newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.addInitScript(()=>{try{localStorage.setItem('scw-welcomed','1')}catch(e){}});
await p.goto(URL);await p.waitForTimeout(1500);await p.evaluate(()=>{document.getElementById('welgo')?.click();const w=document.getElementById('welcome');if(w&&!document.getElementById('welgo'))w.remove();document.body.style.overflow=''});await p.waitForTimeout(800);
const h=await p.evaluate(()=>{const a=document.querySelector('.dzback');if(!a)return null;const r=a.getBoundingClientRect();return {href:a.getAttribute('href'),text:a.textContent,top:Math.round(r.top+scrollY),vis:r.height>0}});
await p.screenshot({path:`/tmp/claude-0/ux/back-${n}.png`});
await p.evaluate(()=>{(document.querySelector('.bbar [data-rd="more"]')||document.querySelector('nav.bot [data-go="more"]')).click()});await p.waitForTimeout(600);
const m=await p.evaluate(()=>{const a=document.querySelector('.dzbackt');return a&&a.offsetHeight>0?a.textContent:null});
console.log(n,JSON.stringify(h),'| More:',m,errs.join(' ')||'');if(!h||!h.vis||!m||errs.length)bad++}
console.log(bad?'FAIL':'ALL PASS');await b.close()})();
