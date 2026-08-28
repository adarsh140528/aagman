const fs = require('fs');
const path = require('path');

// 1. Update Family-ClF3zV5G.js in root and assets
function updateFamily(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/देशपांडे परिवार/g, 'रसाळ परिवार');
  content = content.replace(/श्री\. रमेश देशपांडे/g, 'श्री. रमेश रसाळ');
  content = content.replace(/सौ\. कविता देशपांडे/g, 'सौ. कविता रसाळ');
  content = content.replace(/चि\. अथर्व देशपांडे/g, 'चि. अथर्व रसाळ');
  content = content.replace(/ramesh-deshpande/g, 'ramesh-rasal');
  content = content.replace(/kavita-deshpande/g, 'kavita-rasal');
  content = content.replace(/atharva-deshpande/g, 'atharva-rasal');
  content = content.replace(/देशपांडे/g, 'रसाळ');
  content = content.replace(/deshpande/gi, 'rasal');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${filePath}`);
}

// 2. Update Location-BZCLWEv-.js in root and assets
function updateLocation(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/देशपांडे निवास/g, 'रसाळ निवास');
  content = content.replace(/देशपांडे/g, 'रसाळ');
  content = content.replace(/deshpande/gi, 'rasal');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${filePath}`);
}

// 3. Update Footer-DWQtcP5r.js in root and assets
function updateFooter(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/देशपांडे परिवार/g, 'रसाळ परिवार');
  content = content.replace(/देशपांडे/g, 'रसाळ');
  content = content.replace(/Crafted by INVI DIGITALS/g, 'Adarsh Rasal');
  content = content.replace(/https:\/\/www\.instagram\.com\/invi\.digitals/g, '#');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${filePath}`);
}

// 4. Update index-zd-GV6LP.js in root and assets
function updateIndexJs(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/देशपांडे परिवार/g, 'रसाळ परिवार');
  content = content.replace(/देशपांडे/g, 'रसाळ');
  content = content.replace(/deshpande/gi, 'rasal');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${filePath}`);
}

// 5. Update index.html
function updateIndexHtml(filePath) {
  if (!fs.existsSync(filePath)) return;
  let html = fs.readFileSync(filePath, 'utf8');
  html = html.replace('<html lang="en">', '<html lang="mr">');
  html = html.replace('<title>Sacred Temple Hero</title>', '<title>॥ श्री गणेश आगमन सोहळा - रसाळ परिवार ॥</title>');
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Updated ${filePath}`);
}

// Apply updates
updateFamily(path.join(__dirname, 'Family-ClF3zV5G.js'));
updateFamily(path.join(__dirname, 'assets', 'Family-ClF3zV5G.js'));

updateLocation(path.join(__dirname, 'Location-BZCLWEv-.js'));
updateLocation(path.join(__dirname, 'assets', 'Location-BZCLWEv-.js'));

updateFooter(path.join(__dirname, 'Footer-DWQtcP5r.js'));
updateFooter(path.join(__dirname, 'assets', 'Footer-DWQtcP5r.js'));

// If Footer or Gallery only exist in assets, copy to root as well
if (fs.existsSync(path.join(__dirname, 'assets', 'Footer-DWQtcP5r.js')) && !fs.existsSync(path.join(__dirname, 'Footer-DWQtcP5r.js'))) {
  fs.copyFileSync(path.join(__dirname, 'assets', 'Footer-DWQtcP5r.js'), path.join(__dirname, 'Footer-DWQtcP5r.js'));
}
if (fs.existsSync(path.join(__dirname, 'assets', 'Gallery-CYFeBREg.js')) && !fs.existsSync(path.join(__dirname, 'Gallery-CYFeBREg.js'))) {
  fs.copyFileSync(path.join(__dirname, 'assets', 'Gallery-CYFeBREg.js'), path.join(__dirname, 'Gallery-CYFeBREg.js'));
}

updateIndexJs(path.join(__dirname, 'index-zd-GV6LP.js'));
updateIndexJs(path.join(__dirname, 'assets', 'index-zd-GV6LP.js'));

updateIndexHtml(path.join(__dirname, 'index.html'));

console.log('All files updated successfully.');
