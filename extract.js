const mammoth = require('mammoth');
const fs = require('fs');
const pdf = require('pdf-parse');
const path = require('path');

async function readFiles() {
    const dir = 'Teaching';
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.docx'));
    
    for (const file of files) {
        console.log(`\n=== ${file} ===`);
        try {
            const result = await mammoth.extractRawText({path: path.join(dir, file)});
            console.log(result.value.substring(0, 500)); // Print first 500 chars to avoid huge logs
        } catch(e) { console.error(e); }
    }

    console.log("\n=== Module PDF ===");
    try {
        let dataBuffer = fs.readFileSync("GEE-PMT-Module-4-SY-25-26 (1).pdf");
        let pdfFunc = typeof pdf === 'function' ? pdf : (pdf.default || pdf.pdf);
        if (typeof pdfFunc !== 'function') {
            console.log("pdf is not a function. Keys in pdf:", Object.keys(pdf));
        } else {
            const data = await pdfFunc(dataBuffer);
            console.log(data.text.substring(0, 1500));
        }
    } catch(e) { console.error(e); }
}

readFiles();
