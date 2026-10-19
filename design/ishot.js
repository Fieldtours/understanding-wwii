const {chromium}=require('/home/claude/gmap/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});const p=await b.newPage({viewport:{width:600,height:1100}});
await p.goto('file://'+__dirname+'/icon.html');await p.waitForTimeout(600);
await (await p.$('#a')).screenshot({path:'icon-512.png'});await (await p.$('#m')).screenshot({path:'icon-maskable-512.png'});await b.close()})();
