const fs = require('fs');
const path = require('path');

const familyJsContent = `import{a as c,j as s}from"./framer-Bq-bTNO0.js";import{u as p}from"./useScrollReveal-BvaQ2eR3.js";import{D as h,A as n,S as j}from"./index-zd-GV6LP.js";import"./vendor-CDnZY78L.js";const N="रसाळ परिवार",b="॥ निमंत्रक ॥",C="गणरायाच्या आगमनाच्या या मंगल क्षणी आपण सर्वांनी उपस्थित राहून सोहळ्याची शोभा वाढवावी.",w="गणरायाच्या आगमन सोहळ्यास आपली उपस्थिती हाच आमच्यासाठी खरा आशीर्वाद असेल.",k={divider:"divider2",flourish:"flourish1",cardFlower:"flower1",lotus:"lotus",diya:"diva2",aarti:"aarti"},M=[{id:"sanjay-rasal",name:"श्री. संजय रसाळ",displayOrder:1},{id:"rahul-rasal",name:"चि. राहुल रसाळ",displayOrder:2},{id:"rupesh-rasal",name:"चि. रुपेश रसाळ",displayOrder:3}],d={sectionTitle:N,tag:b,subtitle:C,bottomText:w,assets:k,familyMembers:M};function E(){const a=[...d.familyMembers].sort((e,i)=>e.displayOrder-i.displayOrder),{assets:t}=d,y=p();return s.jsxs("section",{className:"family-section scroll-reveal",ref:y,children:[s.jsxs("div",{className:"family-top scroll-reveal-child",children:[s.jsx(h,{assetKey:t.divider,className:"family-divider"}),s.jsx("p",{className:"family-tag",children:d.tag}),s.jsxs("div",{className:"family-heading-wrapper",children:[s.jsx(n,{assetKey:t.flourish,className:"flourish left"}),s.jsx(j,{className:"family-heading",children:d.sectionTitle}),s.jsx(n,{assetKey:t.flourish,className:"flourish right"})]}),s.jsx("p",{className:"family-subtitle",children:d.subtitle})]}),s.jsx("div",{className:"family-names-wrapper scroll-reveal-child",children:s.jsx("div",{className:"family-names-card",children:a.map(e=>s.jsxs("div",{className:"family-name-item",children:[s.jsx(n,{assetKey:t.lotus,className:"name-lotus"}),s.jsx("span",{className:"name-text",children:e.name}),s.jsx(n,{assetKey:t.lotus,className:"name-lotus"})]},e.id))})}),s.jsx("p",{className:"family-bottom-text scroll-reveal-child",children:d.bottomText}),s.jsx(h,{assetKey:t.divider,className:"family-divider scroll-reveal-child"}),s.jsx(n,{assetKey:t.diya,className:"family-diya-left"}),s.jsx(n,{assetKey:t.aarti,className:"family-aarti-left"})]})}export{E as default};`;

const cssToAdd = `
/* Normal Family Members Display without Photos */
.family-names-wrapper{position:relative;max-width:440px;margin:20px auto 35px;padding:0 15px}
.family-names-card{background:linear-gradient(180deg,#fbf2df 0%,#f4e3c1 50%,#ecd4a7 100%);border:2px solid #d8b17a;border-radius:28px;padding:24px 20px;box-shadow:0 15px 35px rgba(0,0,0,0.35),inset 0 2px 4px rgba(255,255,255,0.7);display:flex;flex-direction:column;gap:14px;position:relative}
.family-names-card:before{content:'';position:absolute;inset:6px;border:1px dashed rgba(184,132,45,0.4);border-radius:22px;pointer-events:none}
.family-name-item{display:flex;align-items:center;justify-content:center;gap:12px;padding:14px 16px;background:linear-gradient(135deg,rgba(255,255,255,0.7),rgba(246,213,138,0.4));border:1px solid rgba(216,177,122,0.6);border-radius:16px;box-shadow:0 4px 12px rgba(91,38,7,0.08);transition:transform .25s ease,box-shadow .25s ease}
.family-name-item:hover{transform:translateY(-2px);box-shadow:0 6px 18px rgba(91,38,7,0.15)}
.name-lotus{width:22px;height:auto;filter:drop-shadow(0 1px 2px rgba(0,0,0,0.15))}
.name-text{font-family:'Rozha One','Tiro Devanagari Marathi','Noto Serif Devanagari',serif;font-size:clamp(1.2rem,4.5vw,1.45rem);font-weight:600;color:#4a1f06;letter-spacing:0.5px}
`;

// 1. Update JS
[
  path.join(__dirname, 'Family-ClF3zV5G.js'),
  path.join(__dirname, 'assets', 'Family-ClF3zV5G.js')
].forEach(p => {
  fs.writeFileSync(p, familyJsContent, 'utf8');
  console.log('Updated JS: ' + p);
});

// 2. Update CSS
[
  path.join(__dirname, 'index-Bgkch7eO.css'),
  path.join(__dirname, 'assets', 'index-Bgkch7eO.css')
].forEach(p => {
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    if (!content.includes('.family-names-wrapper')) {
      content += '\n' + cssToAdd;
      fs.writeFileSync(p, content, 'utf8');
      console.log('Updated CSS: ' + p);
    }
  }
});

console.log('Successfully updated family member view to normal layout without photos.');
