const fs = require('fs');
const path = require('path');

// 1. Update index.html to load premier Marathi Devanagari fonts
const indexHtmlPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexHtmlPath, 'utf8');

const fontsLink = `    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Mukta:wght@400;500;600;700;800&family=Noto+Sans+Devanagari:wght@400;500;600;700;800&family=Noto+Serif+Devanagari:wght@400;500;600;700;800&family=Rozha+One&family=Tiro+Devanagari+Marathi:ital@0;1&family=Asar&family=Poppins:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />`;

html = html.replace(/<link[\s\S]*?family=Noto\+Serif\+Devanagari[\s\S]*?rel="stylesheet"\s*\/>/g, fontsLink);
html = html.replace(/<link[\s\S]*?family=Asar[\s\S]*?rel="stylesheet"\s*\/>/g, '');
html = html.replace(/<link[\s\S]*?family=Poppins[\s\S]*?rel="stylesheet"\s*\/>/g, '');
// Clean up extra blank lines in head
html = html.replace(/(\r?\n\s*){3,}/g, '\n\n');

fs.writeFileSync(indexHtmlPath, html, 'utf8');
console.log('Updated index.html fonts.');

// 2. Update CSS font-family declarations in root and assets
function updateCss(cssPath) {
  if (!fs.existsSync(cssPath)) return;
  let css = fs.readFileSync(cssPath, 'utf8');

  // Add global font-feature-settings and text-rendering at beginning of CSS
  const globalRules = `*{font-feature-settings:"kern" 1,"liga" 1,"clig" 1,"calt" 1;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}`;
  if (!css.includes('optimizeLegibility')) {
    css = globalRules + css;
  }

  // Replace Yatra One with premier Tiro Devanagari Marathi and Rozha One stack
  css = css.replace(/font-family:\s*Yatra One\s*,\s*serif/gi, 'font-family:"Rozha One","Tiro Devanagari Marathi","Noto Serif Devanagari",serif');
  css = css.replace(/font-family:\s*Yatra One\s*,\s*cursive/gi, 'font-family:"Rozha One","Tiro Devanagari Marathi","Noto Serif Devanagari",serif');
  css = css.replace(/font-family:\s*Yatra One/gi, 'font-family:"Rozha One","Tiro Devanagari Marathi","Noto Serif Devanagari",serif');
  
  // Ensure body and general typography look crisp and properly shaped
  css = css.replace(/font-family:\s*"Noto Serif Devanagari"\s*,\s*serif/gi, 'font-family:"Noto Serif Devanagari","Tiro Devanagari Marathi",serif');
  css = css.replace(/font-family:\s*Asar\s*,\s*serif/gi, 'font-family:"Asar","Tiro Devanagari Marathi","Noto Serif Devanagari",serif');

  fs.writeFileSync(cssPath, css, 'utf8');
  console.log(`Updated CSS in ${cssPath}`);
}

updateCss(path.join(__dirname, 'index-Bgkch7eO.css'));
updateCss(path.join(__dirname, 'assets', 'index-Bgkch7eO.css'));

console.log('Fonts configuration completed successfully.');
