const { chromium } = require('C:/Users/calyc/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('node:fs');
const path=require('node:path');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
 const context=await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
 const page=await context.newPage();
 const errors=[];const missing=[];
 page.on('pageerror',e=>errors.push(e.message));
 page.on('response',r=>{if(r.url().startsWith('http://localhost')&&r.status()>=400)missing.push({url:r.url(),status:r.status()})});
 fs.mkdirSync(path.join(__dirname,'qa'),{recursive:true});
 const results=[];
 for(const [name,port] of [['bene',3100],['calyco',3101],['gigacore',3102]]){
  await page.goto('http://localhost:'+port+'/',{waitUntil:'networkidle',timeout:60000});
  await page.locator('.bene-switch-trigger').waitFor();
  await page.screenshot({path:path.join(__dirname,'qa',name+'-desktop.png')});
  await page.locator('.bene-switch-trigger').click();
  await page.locator('dialog[open]').waitFor();
  const count=await page.locator('.bene-switch-card').count();
  if(count!==3)throw new Error('Division count '+name);
  await page.screenshot({path:path.join(__dirname,'qa',name+'-switcher.png')});
  await page.keyboard.press('Escape');
  if(await page.locator('dialog[open]').count())throw new Error('Escape failed');
  if(name==='bene'){
   await page.locator('#commodities').scrollIntoViewIfNeeded();
   for(const label of ['Sulphur','Urea','Crude oil','LNG','Metals & minerals']){
    await page.getByRole('tab',{name:new RegExp('^'+label.replace('&','&'))}).click();
    await page.waitForFunction(()=>Array.from(document.querySelectorAll('.commodity-visual img')).filter(el=>el.getBoundingClientRect().height>0).length===1);
    const img=page.locator('.commodity-visual img:visible');
    await img.waitFor();
    await img.evaluate(el=>el.decode());
    if(await page.locator('#commodities canvas').count())throw new Error('3D canvas remains');
   }
   await page.screenshot({path:path.join(__dirname,'qa','bene-metals.png')});
   await page.getByRole('button',{name:'Product details +'}).click();
   await page.getByRole('dialog').filter({hasText:'Metals & minerals'}).waitFor();
   await page.keyboard.press('Escape');
  }
  await page.setViewportSize({width:390,height:844});
  await page.goto('http://localhost:'+port+'/',{waitUntil:'networkidle',timeout:60000});
  await page.screenshot({path:path.join(__dirname,'qa',name+'-mobile.png')});
  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1);
  await page.locator('.bene-switch-trigger').click();
  await page.screenshot({path:path.join(__dirname,'qa',name+'-switcher-mobile.png')});
  await page.keyboard.press('Escape');
  results.push({name,overflow});
  await page.setViewportSize({width:1440,height:1000});
 }
 await page.goto('http://localhost:3100/',{waitUntil:'networkidle'});
 await page.locator('.bene-switch-trigger').click();
 await page.locator('.bene-switch-card').filter({hasText:'Calyco Interiors'}).click();
 await page.waitForURL('http://localhost:3101/');
 await page.locator('.bene-switch-trigger').click();
 await page.locator('.bene-switch-card').filter({hasText:'Gigacore Energy'}).click();
 await page.waitForURL('http://localhost:3102/');
 await page.locator('.bene-switch-trigger').click();
 await page.locator('.bene-switch-card').filter({hasText:'Global Commodities'}).click();
 await page.waitForURL('http://localhost:3100/');
 const routes=[];
 for(const [port,paths] of [[3101,['/about','/ai-design','/design','/feature-showcase','/style-quiz']],[3102,['/applications','/company','/company/blog','/company/team','/contact','/economics','/market','/partnership','/technology']]]){
  for(const route of paths){
   const response=await page.goto('http://localhost:'+port+route,{waitUntil:'networkidle',timeout:60000});
   routes.push({port,route,status:response.status()});
   await page.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=700){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,80))}window.scrollTo(0,0)});
  }
 }
 const report={results,errors:[...new Set(errors)],missing,routes,divisionRoundTrip:true};
 fs.writeFileSync(path.join(__dirname,'qa/results.json'),JSON.stringify(report,null,2));
 console.log(JSON.stringify(report,null,2));
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
