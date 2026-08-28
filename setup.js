const fs = require('fs');
const path = require('path');
const https = require('https');

const assets = [
  'Blessings-CHwr340R.js',
  'Button-Co4wHrbZ.js',
  'Family-ClF3zV5G.js',
  'Footer-DWQtcP5r.js',
  'Gallery-CYFeBREg.js',
  'Location-BZCLWEv-.js',
  'Timeline-BD7-Qemd.js',
  'TimelineModal-BJwPrPZc.js',
  'framer-Bq-bTNO0.js',
  'index-Bgkch7eO.css',
  'index-zd-GV6LP.js',
  'timeline-CU8N5Gin.js',
  'useScrollReveal-BvaQ2eR3.js',
  'vendor-CDnZY78L.js',
  'mandala-jdOIDeh6.webp',
  'murti-DogDNfqS.webp',
  'murti-2-luqKOqyF.webp',
  'sthapana-opt-po5HE-Wf.webp',
  'aarti-opt-DAeVgRo3.webp',
  'atharvshish-opt-BokKd3D3.webp',
  'snehbhet-opt-CGz7vv-w.webp',
  'mahaprasad-opt-B_Zc2sef.webp',
  'visarjan-opt-Epp4xHxG.webp',
  'gallery-1-DWEzcB6M.webp',
  'gallery-2-DvEhGxIV.webp',
  'gallery-3-CV0LwziS.webp',
  'gallery-4-sv5dpAxi.webp',
  'gallery-5-DpPEX2vC.webp',
  'family-1-D6DB0Svu.webp',
  'family-2-DA8DTEL4.webp',
  'family-3-CBo3jFmR.webp',
  'family-4-5BwO33AK.webp',
  'flower1-BlVhglJb.webp',
  'flower2-579OHsCI.webp',
  'flower3-DVMPDr3s.webp',
  'bell-DxDhDReW.webp',
  'bell-2-CjaksJjB.webp',
  'aarti-BmqCfmT2.webp',
  'diva-BREN9I8b.webp',
  'diva2-Cj74hIfe.webp',
  'divider-1-CA7Shuxn.webp',
  'divider-2-B5AQ9qpj.webp',
  'divider-3-BtSfoYwr.webp',
  'f1-ADhmizYT.webp',
  'f2-9d8zBFNM.webp',
  'leaf-C8H5H5Ok.webp',
  'logo-m7LBp2Yu.webp',
  'lotus-C9mPCXs6.webp',
  'piller-pvoq_vZm.webp',
  'pot-GXE75GD9.webp',
  'shankh-KSZvp6xx.webp',
  'top-layer-BdL4xo3x.webp',
  'bgMusic-Cx9Z66jg.mp3'
];

const assetsDir = path.join(__dirname, 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

function downloadFile(assetName) {
  return new Promise((resolve) => {
    const dest = path.join(assetsDir, assetName);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 100) {
      // Also copy to root if it's not already in root or vice versa
      console.log(`Already exists: ${assetName}`);
      return resolve();
    }
    
    // Check if it exists in root
    const rootPath = path.join(__dirname, assetName);
    if (fs.existsSync(rootPath) && fs.statSync(rootPath).size > 100) {
      fs.copyFileSync(rootPath, dest);
      console.log(`Copied from root to assets: ${assetName}`);
      return resolve();
    }

    const url = `https://sacredtemple.vercel.app/assets/${assetName}`;
    console.log(`Downloading: ${url}`);
    
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded ${assetName} successfully (${fs.statSync(dest).size} bytes)`);
          resolve();
        });
      } else {
        console.error(`Failed ${assetName}: HTTP ${res.statusCode}`);
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        resolve();
      }
    }).on('error', (err) => {
      console.error(`Error downloading ${assetName}: ${err.message}`);
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      resolve();
    });
  });
}

async function run() {
  for (const a of assets) {
    await downloadFile(a);
  }
  console.log('Finished checking assets.');
}

run();
