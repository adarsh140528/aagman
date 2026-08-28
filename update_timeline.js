const fs = require('fs');
const path = require('path');

const updatedEvents = [
  {
    id: "sthapana",
    title: "मूर्ती स्थापना",
    label: "स्थापना",
    date: "२७ ऑगस्ट २०२६",
    time: "सकाळी १०:०० वाजता",
    location: "खांडपे (ता. मुरबाड, जि. ठाणे)",
    description: "गणरायाचे मंगल आगमन आणि मूर्ती स्थापना सोहळा.",
    image: "eventSthapana",
    side: "left"
  },
  {
    id: "aarti",
    title: "आरती",
    label: "आरती",
    date: "२७ आणि २८ ऑगस्ट २०२६",
    time: "सकाळी ८:०० आणि संध्याकाळी ७:३० वाजता",
    location: "खांडपे (ता. मुरबाड, जि. ठाणे)",
    description: "बाप्पाची मनोभावे नित्य आरती आणि स्तुती.",
    image: "eventAarti",
    side: "right"
  },
  {
    id: "mahaprasad",
    title: "महाप्रसाद",
    label: "महाप्रसाद",
    date: "२८ ऑगस्ट २०२६",
    time: "दुपारी १:०० ते ४:०० वाजता",
    location: "खांडपे (ता. मुरबाड, जि. ठाणे)",
    description: "गणरायाच्या आशीर्वादाने स्नेहभोजन आणि महाप्रसाद वितरण.",
    image: "eventMahaprasad",
    side: "left"
  },
  {
    id: "karyakram",
    title: "कार्यक्रम",
    label: "कार्यक्रम",
    date: "२८ ऑगस्ट २०२६",
    time: "रात्री ८:०० वाजता",
    location: "खांडपे (ता. मुरबाड, जि. ठाणे)",
    description: "हरिपाठ, भक्तीसंगीत आणि सांस्कृतिक मनोरंजनाचा कार्यक्रम.",
    image: "eventSnehbhet",
    side: "right"
  },
  {
    id: "visarjan",
    title: "विसर्जन",
    label: "विसर्जन",
    date: "२९ ऑगस्ट २०२६",
    time: "दुपारी ३:०० वाजता",
    location: "खांडपे (ता. मुरबाड, जि. ठाणे)",
    description: "गणपती बाप्पाला भावपूर्ण निरोप आणि मंगलमय विसर्जन मिरवणूक.",
    image: "eventVisarjan",
    side: "left"
  }
];

const timelineCode = `const t="उत्सवाचा मंगल प्रवास",e="गणरायाच्या आगमनापासून विसर्जनापर्यंत प्रत्येक मंगल क्षणाची रूपरेषा",i="कार्यक्रमावर स्पर्श करून सविस्तर माहिती पहा",a={closeLabel:"✕",labels:{date:"दिनांक",time:"वेळ",location:"स्थळ"}},l={divider:"divider1",smallDivider:"divider2",lotus:"lotus",rowIcon:"diva"},s=${JSON.stringify(updatedEvents)},n={tag:"",heading:t,subtitle:e,tip:i,modal:a,assets:l,events:s};export{n as t};`;

fs.writeFileSync(path.join(__dirname, 'timeline-CU8N5Gin.js'), timelineCode, 'utf8');
if (fs.existsSync(path.join(__dirname, 'assets', 'timeline-CU8N5Gin.js'))) {
  fs.writeFileSync(path.join(__dirname, 'assets', 'timeline-CU8N5Gin.js'), timelineCode, 'utf8');
}
console.log('Updated timeline-CU8N5Gin.js');

// Also update Location-BZCLWEv-.js with the Khandpe Murbad address & embed map if needed
function updateLocationFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let loc = fs.readFileSync(filePath, 'utf8');
  loc = loc.replace(/h="[^"]*"/, 'h="मु. पो. खांडपे, ता. मुरबाड, जि. ठाणे"');
  loc = loc.replace(/g="[^"]*"/, 'g="https://www.google.com/maps/search/?api=1&query=Khandpe+Murbad+Thane"');
  fs.writeFileSync(filePath, loc, 'utf8');
  console.log(`Updated ${filePath}`);
}

updateLocationFile(path.join(__dirname, 'Location-BZCLWEv-.js'));
updateLocationFile(path.join(__dirname, 'assets', 'Location-BZCLWEv-.js'));

console.log('All updates complete!');
