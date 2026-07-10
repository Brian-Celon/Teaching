const fs = require('fs');

const htmlFile = 'generate_html.js';
let content = fs.readFileSync(htmlFile, 'utf8');

const newCode = fs.readFileSync('new_slides_code.txt', 'utf8');

const startStr = "addSlide('The Teaching-Learning Process', `<div class=\"title-slide\"><h2>The Teaching-Learning Process</h2></div>`, 'presenter-1', '#fdfdfd');";
const endStr = "// --- ASSESSMENT SLIDES (CHALK DUST MECHANIC) ---";

const startIdx = content.indexOf(startStr);
const endIdx = content.indexOf(endStr);

if (startIdx !== -1 && endIdx !== -1) {
    const updated = content.substring(0, startIdx) + newCode + '    ' + content.substring(endIdx);
    fs.writeFileSync(htmlFile, updated);
    console.log("Updated generate_html.js successfully.");
} else {
    console.log("Could not find start or end string.");
}
