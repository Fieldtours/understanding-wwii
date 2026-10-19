const {chromium}=require('/home/claude/gmap/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});const p=await b.newPage({viewport:{width:1700,height:2700}});
await p.goto('file://'+__dirname+'/cover.html');await p.waitForTimeout(800);
await (await p.$('#P')).screenshot({path:'welcome.png'});await (await p.$('#W')).screenshot({path:'welcome-wide.png'});await b.close()})();
