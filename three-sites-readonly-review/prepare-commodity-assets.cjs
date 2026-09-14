const sharp = require('./Calycointeriors-main/Calycointeriors-main/node_modules/sharp');
const fs = require('node:fs');
const path = require('node:path');
const output = path.join(__dirname, 'bene-llc-new-main/bene-llc-new-main/public/commodities');
fs.mkdirSync(output, {recursive:true});
const sources = {
  urea:'C:/Users/calyc/.codex/generated_images/01a09e69-ebc1-7763-85ee-7272e29f39c7/exec-b7433c4e-279d-4752-83db-08c8a4456e43.png',
  'crude-oil':'C:/Users/calyc/.codex/generated_images/01a09e69-ebc1-7763-85ee-7272e29f39c7/exec-5de086ba-b3fb-4bc0-ab2c-48eaea2ee366.png',
  lng:'C:/Users/calyc/.codex/generated_images/01a09e69-ebc1-7763-85ee-7272e29f39c7/exec-c1c3360e-2f07-44e4-8703-e6343551d727.png',
  metals:'C:/Users/calyc/.codex/generated_images/01a09e3e-70cf-73b3-a43d-3c716af09620/exec-c9ada46c-a5f5-4db5-86c8-b1ff222fffcd.png',
  sulphur:'C:/Users/calyc/.codex/generated_images/01a09e3e-70cf-73b3-a43d-3c716af09620/exec-22e78021-4315-4ddb-93f5-c7b5d2ecf7f3.png'
};
Promise.all(Object.entries(sources).map(async ([name,file]) => {
  await sharp(file).webp({quality:90}).toFile(path.join(output,name+'.webp'));
  console.log(name,fs.statSync(path.join(output,name+'.webp')).size);
})).catch(e=>{console.error(e);process.exitCode=1;});
