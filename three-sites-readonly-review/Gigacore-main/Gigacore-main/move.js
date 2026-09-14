const fs = require('fs');
const path = require('path');
const faviconPath = path.join(__dirname, 'src', 'app', 'favicon.png');
const iconPath = path.join(__dirname, 'src', 'app', 'icon.png');
const svgPath = path.join(__dirname, 'src', 'app', 'icon.svg');

if (fs.existsSync(faviconPath)) {
  fs.renameSync(faviconPath, iconPath);
  console.log('Renamed favicon.png to icon.png');
}
if (fs.existsSync(svgPath)) {
  fs.unlinkSync(svgPath);
  console.log('Deleted icon.svg');
}
