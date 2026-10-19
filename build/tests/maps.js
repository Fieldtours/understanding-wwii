// Map checks: cover map, a tour-day map, the enlarged map zoomed in steps, the area planner,
// and close zooms on five different kinds of stop (city, village, coast, mountain, island).
const {chromium}=require('/home/claude/gmap/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const p=await (await b.newContext({viewport:{width:390,height:844},serviceWorkers:'block'})).newPage();
const errs=[];p.on('pageerror',e=>errs.push('ERR '+e.message));
const O='/tmp/claude-0/maps';require('fs').mkdirSync(O,{recursive:true});
await p.goto('http://localhost:8830/understanding-wwii/index.html#x');await p.waitForTimeout(2500);
await p.evaluate(()=>{const h=document.getElementById('heromap');h.scrollIntoView()});await p.waitForTimeout(1500);
await (await p.$('#heromap')).screenshot({path:O+'/m01-hero.png'});
// tour: Dunkirk & Normandy, day 4 (Sword, Juno, Gold)
await p.evaluate(()=>{goTab('tab-tour');plan.tour='west40';plan.days=8;plan.mode='full';savePlan();renderTour()});await p.waitForTimeout(1500);
await p.evaluate(()=>{document.getElementById('tday-5').scrollIntoView()});await p.waitForTimeout(800);
const ms=await p.$$('#p-tour .sitmap');await ms[4].scrollIntoViewIfNeeded();await p.waitForTimeout(1500);await ms[4].screenshot({path:O+'/m02-day.png'});
await ms[4].click();await p.waitForTimeout(1500);await p.screenshot({path:O+'/m03-big.png'});
const plus=async n=>{for(let i=0;i<n;i++){await p.evaluate(()=>{const b=[...document.querySelectorAll('.lb button')].find(x=>x.textContent.trim()==='+'||x.getAttribute('aria-label')==='Zoom in');b&&b.click()});await p.waitForTimeout(900)}};
await plus(1);await p.screenshot({path:O+'/m04-zoom1.png'});await plus(1);await p.screenshot({path:O+'/m05-zoom2.png'});await plus(1);await p.screenshot({path:O+'/m06-zoom3.png'});
console.log('lightbox images:',await p.evaluate(()=>[...new Set([...document.querySelectorAll('.lb svg image')].map(i=>i.getAttribute('href').split('-').slice(0,3).join('-')))].join(' ')));
await p.keyboard.press('Escape');await p.waitForTimeout(400);
// five close zooms: a map of one stop each, enlarged and zoomed in 3 steps
const one=async(name,lat,lon,f)=>{await p.evaluate(([n,la,lo])=>{let h=document.getElementById('tz');if(!h){h=document.createElement('div');h.id='tz';document.querySelector('main').prepend(h)}h.innerHTML=sitmap([{key:'x',num:1,name:n,lat:la,lon:lo,conf:'DOC'}],n.toUpperCase(),{h:400});window.scrollTo(0,0)},[name,lat,lon]);
  await p.waitForTimeout(1200);await (await p.$('#tz .sitmap')).click();await p.waitForTimeout(1200);await plus(3);await p.screenshot({path:O+'/z-'+f+'.png'});await p.keyboard.press('Escape');await p.waitForTimeout(300)};
await p.evaluate(()=>goTab('tab-time'));await p.waitForTimeout(500);
await one('Churchill War Rooms',51.50221,-0.12925,'city');
await one('Ginkel Heath',52.03694,5.73405,'village');
await one('Pointe du Hoc',49.39738,-0.98936,'coast');
await one("Eagle's Nest",47.61111,13.04167,'mountain');
await one('Lascaris War Rooms',35.8945,14.51105,'island');
await one('Mamayev Kurgan',48.7425,44.53694,'east');
// area planner map
await p.evaluate(()=>{goTab('tab-tour');uxSet&&uxSet('area');renderTour()});await p.waitForTimeout(1500);
await p.screenshot({path:O+'/m07-area.png'});
console.log(errs.join('\n')||'no errors');await b.close()})();
