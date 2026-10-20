const {chromium}=require('/home/claude/gmap/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const p=await (await b.newContext({viewport:{width:390,height:844},serviceWorkers:'block'})).newPage();
const errs=[];p.on('pageerror',e=>errs.push('ERR '+e.message));
await p.goto('http://localhost:8830/footsteps-of-wwii/index.html#x');await p.waitForTimeout(1000);
await p.evaluate(()=>goTab('tab-dday'));await p.waitForTimeout(800);
const n=await p.evaluate(()=>BATTLES.length);
for(let i=0;i<n;i+=(+process.env.STEP||1)){
  await p.evaluate(i=>{const bs=[...document.querySelectorAll('#battles button')].filter(x=>x.closest('#battles'));const t=bs.find(x=>x.textContent.trim().startsWith(BATTLES[i].name.slice(0,20)));if(t)t.click()},i);await p.waitForTimeout(700);
  const el=await p.$('#battles');await el.screenshot({path:`/tmp/claude-0/bat-${i}.png`});
}
console.log(errs.join('\n')||'no errors');await b.close()})();
