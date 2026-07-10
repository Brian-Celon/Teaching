const mammoth = require('mammoth');
const fs = require('fs');
const path = require('path');

async function checkImages() {
    const dir = 'Teaching';
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.docx'));
    
    for (const file of files) {
        let fileImgCount = 0;
        const options = {
            convertImage: mammoth.images.inline(function(element) {
                fileImgCount++;
                return element.read("base64").then(function() {
                    return { src: `[IMAGE ${fileImgCount}]` };
                });
            })
        };
        try {
            const result = await mammoth.convertToHtml({path: path.join(dir, file)}, options);
            if (fileImgCount > 0) {
                console.log(`\n--- FILE: ${file} ---`);
                console.log(result.value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').substring(0, 500) + '...');
                const matches = result.value.match(/\[IMAGE \d+\][^<]*/g);
                if (matches) {
                    console.log('Image contexts:', matches);
                }
            }
        } catch(e) { console.error(e); }
    }
}

checkImages();
