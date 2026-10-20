const {chromium}=require('/home/claude/gmap/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const W=+(process.env.W||390),H=+(process.env.H||844);
const ctx=await b.newContext({viewport:{width:W,height:H},deviceScaleFactor:1,serviceWorkers:'block'});const p=await ctx.newPage();
const errs=[];p.on('pageerror',e=>errs.push('PE '+e.message));p.on('console',m=>{if(m.type()==='error')errs.push('CE '+m.text().slice(0,200))});
await p.goto('http://localhost:8830/footsteps-of-wwii/index.html');await p.waitForTimeout(800);
const out=process.env.OUT||'/tmp/claude-0/shots';require('fs').mkdirSync(out,{recursive:true});
await p.screenshot({path:out+'/00-welcome.png'});
await p.click('#welgo').catch(()=>{});await p.waitForTimeout(700);
await p.screenshot({path:out+'/01-home.png',fullPage:true});
for(const t of ['tour','time','dday','mus','brief','orig','men','armies','weap','map','more']){
  await p.evaluate(id=>{goTab('tab-'+id)},t).catch(e=>errs.push('goTab '+t+' '+e.message));await p.waitForTimeout(600);
  await p.screenshot({path:out+'/tab-'+t+'.png',fullPage:false});
}
console.log(errs.join('\n')||'no errors');await b.close()})();
