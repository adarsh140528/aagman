const fs = require('fs');
const path = require('path');

function processFile(relPath, transformFn) {
  const fullRoot = path.join(__dirname, relPath);
  const fullAssets = path.join(__dirname, 'assets', relPath);

  if (fs.existsSync(fullRoot)) {
    let content = fs.readFileSync(fullRoot, 'utf8');
    content = transformFn(content);
    fs.writeFileSync(fullRoot, content, 'utf8');
    console.log(`Updated root: ${relPath}`);
  }

  if (fs.existsSync(fullAssets)) {
    let content = fs.readFileSync(fullAssets, 'utf8');
    content = transformFn(content);
    fs.writeFileSync(fullAssets, content, 'utf8');
    console.log(`Updated assets: ${relPath}`);
  }
}

// 1. Blessings component: Fix Marathi grammar
// "फुलांची अर्पण करा" -> "फुले अर्पण करा" / "बाप्पांच्या चरणी भक्तीभावाने फुले अर्पण करा"
// "फुलांची वर्षाव करा" -> "फुलांचा वर्षाव करा"
// "बाप्पाचे आशीर्वाद" -> "बाप्पांचे आशीर्वाद"
processFile('Blessings-CHwr340R.js', (c) => {
  c = c.replace(/const V="[^"]*"/, 'const V="बाप्पांचे आशीर्वाद"');
  c = c.replace(/Y="[^"]*"/, 'Y="स्पर्श करा आणि बाप्पांचे मंगल आशीर्वाद प्राप्त करा"');
  c = c.replace(/z="[^"]*"/, 'z="बाप्पांच्या चरणी भक्तीभावाने फुले अर्पण करा"');
  c = c.replace(/L="[^"]*"/, 'L="फुलांचा वर्षाव करा"');
  return c;
});

// 2. Family component: Fix Marathi grammar and names
processFile('Family-ClF3zV5G.js', (c) => {
  c = c.replace(/const N="[^"]*"/, 'const N="रसाळ परिवार"');
  c = c.replace(/b="[^"]*"/, 'b="॥ निमंत्रक ॥"');
  c = c.replace(/C="[^"]*"/, 'C="गणरायाच्या आगमनाच्या या मंगल क्षणी आपण सर्वांनी उपस्थित राहून सोहळ्याची शोभा वाढवावी."');
  c = c.replace(/w="[^"]*"/, 'w="गणरायाच्या आगमन सोहळ्यास आपली उपस्थिती हाच आमच्यासाठी खरा आशीर्वाद असेल."');
  c = c.replace(/श्री\.\s*रमेश\s*(देशपांडे|रसाळ)/g, 'श्री. रमेश रसाळ');
  c = c.replace(/सौ\.\s*कविता\s*(देशपांडे|रसाळ)/g, 'सौ. कविता रसाळ');
  c = c.replace(/चि\.\s*अथर्व\s*(देशपांडे|रसाळ)/g, 'चि. अथर्व रसाळ');
  return c;
});

// 3. Location component: Fix Marathi address and text
processFile('Location-BZCLWEv-.js', (c) => {
  c = c.replace(/const d="[^"]*"/, 'const d="रसाळ निवास"');
  c = c.replace(/m="[^"]*"/, 'm="॥ कार्यक्रम स्थळ ॥"');
  c = c.replace(/p="[^"]*"/, 'p="गणरायाच्या दर्शनासाठी आपले सहर्ष स्वागत आहे !"');
  c = c.replace(/h="[^"]*"/, 'h="फ्लॅट नं. ४०२, श्री गणेश अपार्टमेंट्स, शिवाजीनगर, पुणे - ४११००५"');
  c = c.replace(/x="[^"]*"/, 'x="नकाशा पहा (Open Maps)"');
  c = c.replace(/f=\[[^\]]*\]/, 'f=["आपल्या सहकुटुंब उपस्थितीने","सोहळ्याची शोभा वाढेल !"]');
  return c;
});

// 4. Timeline component and data
processFile('timeline-CU8N5Gin.js', (c) => {
  const updatedEvents = [
    {
      id: "sthapana",
      title: "श्री गणेश मूर्ती प्राणप्रतिष्ठापना",
      label: "मूर्ती स्थापना",
      date: "२७ ऑगस्ट २०२६",
      time: "सकाळी १०:०० वाजता",
      location: "रसाळ निवास, पुणे",
      description: "श्री गणरायाचे वाजत-गाजत मंगल आगमन व विधिवत प्राणप्रतिष्ठापना सोहळा.",
      image: "eventSthapana",
      side: "left"
    },
    {
      id: "sakali-aarti",
      title: "प्रभात महाआरती",
      label: "सकाळची आरती",
      date: "दररोज",
      time: "सकाळी ०८:०० वाजता",
      location: "मुख्य सभागृह",
      description: "प्रभात समयी बाप्पांची मंगलमय महाआरती व मोदक प्रसाद वितरण.",
      image: "eventAarti",
      side: "right"
    },
    {
      id: "sandhyakal-aarti",
      title: "संध्याकाळची दीपआरती",
      label: "संध्या आरती",
      date: "दररोज",
      time: "संध्याकाळी ०७:३० वाजता",
      location: "मुख्य सभागृह",
      description: "सर्व भक्तांच्या उपस्थितीत दीपप्रज्वलन, संध्या महाआरती व भजन सोहळा.",
      image: "eventAarti",
      side: "left"
    },
    {
      id: "satyanarayan-pooja",
      title: "श्री सत्यनारायण महापूजा",
      label: "सत्यनारायण पूजा",
      date: "३० ऑगस्ट २०२६",
      time: "सकाळी १०:३० वाजता",
      location: "मुख्य सभागृह",
      description: "श्री सत्यनारायण महापूजा, हवन व महाप्रसाद वितरण.",
      image: "eventAtharvshish",
      side: "right"
    },
    {
      id: "mahaprasad",
      title: "महाप्रसाद सोहळा",
      label: "महाप्रसाद",
      date: "३० ऑगस्ट २०२६",
      time: "रात्री ०८:३० वाजता",
      location: "प्रसाद मंडप",
      description: "सर्व आप्तेष्ट व भाविकांसाठी महाप्रसादाचे आयोजन. आपण सर्वांनी अवश्य लाभ घ्यावा.",
      image: "eventMahaprasad",
      side: "left"
    },
    {
      id: "sanskritik-karyakram",
      title: "सांस्कृतिक व भजन संध्या",
      label: "सांस्कृतिक कार्यक्रम",
      date: "३१ ऑगस्ट २०२६",
      time: "सायंकाळी ०६:०० वाजता",
      location: "मुख्य सभागृह",
      description: "हरिपाठ, भजन, कीर्तन व मुलांचे सांस्कृतिक कार्यक्रम.",
      image: "eventSnehbhet",
      side: "right"
    },
    {
      id: "visarjan",
      title: "अनंत चतुर्दशी विसर्जन मिरवणूक",
      label: "विसर्जन मिरवणूक",
      date: "०२ सप्टेंबर २०२६",
      time: "सायंकाळी ०५:०० वाजता",
      location: "विसर्जन मिरवणूक मार्ग",
      description: "गणपती बाप्पा मोरया, पुढच्या वर्षी लवकर या! ढोल-ताशांच्या गजरात बाप्पांना भावपूर्ण निरोप.",
      image: "eventVisarjan",
      side: "left"
    }
  ];

  return `const t="उत्सवाचा मंगल प्रवास",e="गणरायाच्या आगमनापासून विसर्जनापर्यंत प्रत्येक मंगल क्षणाची रूपरेषा",i="कार्यक्रमावर स्पर्श करून सविस्तर माहिती पहा",a={closeLabel:"✕",labels:{date:"दिनांक",time:"वेळ",location:"स्थळ"}},l={divider:"divider1",smallDivider:"divider2",lotus:"lotus",rowIcon:"diva"},s=${JSON.stringify(updatedEvents)},n={tag:"",heading:t,subtitle:e,tip:i,modal:a,assets:l,events:s};export{n as t};`;
});

// 5. Gallery component
processFile('Gallery-CYFeBREg.js', (c) => {
  c = c.replace(/const g="[^"]*"/, 'const g="आगमनाची मंगल तयारी"');
  c = c.replace(/n=\[[^\]]*\]/, 'n=["गणरायाच्या स्वागतासाठी","प्रेमाने सजवलेले काही खास क्षण"]');
  return c;
});

// 6. Footer component: Quote & Adarsh Rasal Copyright
processFile('Footer-DWQtcP5r.js', (c) => {
  return `import{j as e}from"./framer-Bq-bTNO0.js";import{u as i}from"./useScrollReveal-BvaQ2eR3.js";import{A as o,D as l}from"./index-zd-GV6LP.js";import"./vendor-CDnZY78L.js";const n={firstLine:"आपली स्नेहमयी उपस्थिती हाच",secondLine:"आमच्यासाठी बाप्पांचा खरा",endingText:"आशीर्वाद आहे."},c="— रसाळ परिवार",d="© २०२६ Adarsh Rasal • All Rights Reserved",f={divider:"divider2",diya:"diva2",aarti:"aarti"},a={quote:n,family:c,brand:d,assets:f};function j(){const{assets:s,quote:r}=a,t=i();return e.jsxs("footer",{className:"sacred-footer scroll-reveal",ref:t,children:[e.jsx("div",{className:"footer-fade"}),e.jsx(o,{assetKey:s.diya,className:"footer-diya-left"}),e.jsx(o,{assetKey:s.aarti,className:"footer-aarti-left"}),e.jsx(l,{assetKey:s.divider,className:"footer-divider scroll-reveal-child"}),e.jsxs("h2",{className:"footer-quote scroll-reveal-child",children:[r.firstLine," ",r.secondLine,e.jsx("br",{}),r.endingText]}),e.jsx("div",{className:"footer-family scroll-reveal-child",children:a.family}),e.jsx("div",{className:"footer-brand scroll-reveal-child",children:e.jsx("span",{style:{color:"#4a1c03",fontWeight:"600",letterSpacing:"1px",fontSize:"0.95rem",display:"inline-block",padding:"8px 16px",background:"rgba(255, 255, 255, 0.25)",borderRadius:"20px",boxShadow:"0 2px 8px rgba(0,0,0,0.05)"},children:a.brand})})]})}export{j as default};`;
});

// 7. Index JS (Curtain seal button, etc.)
processFile('index-zd-GV6LP.js', (c) => {
  c = c.replace('children:"गणपती नमः"', 'children:"॥ श्री गणेशाय नमः ॥"');
  c = c.replace('children:"Tap To Open"', 'children:"निमंत्रण उघडा • Open Invitation"');
  return c;
});

// 8. Index HTML (Page title, meta description)
processFile('index.html', (c) => {
  c = c.replace(/<title>.*?<\/title>/, '<title>॥ श्री गणेश आगमन सोहळा - रसाळ परिवार ॥</title>');
  if (!c.includes('<meta name="description"')) {
    c = c.replace('<meta name="viewport"', '<meta name="description" content="श्री गणेश आगमन सोहळा २०२६ - रसाळ परिवार सस्नेह निमंत्रण" />\n    <meta name="viewport"');
  }
  return c;
});

console.log('All refined Marathi text and copyright adjustments applied successfully.');
