const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const input = path.join(__dirname, '..', 'public', 'assets', 'result.svg');
const output = path.join(__dirname, '..', 'public', 'assets', 'og-image.png');

async function generate() {
    try {
        if (!fs.existsSync(input)) {
            console.error('Input SVG not found:', input);
            process.exit(1);
        }

        await sharp(input)
            .png({ quality: 90 })
            .resize(1200, 630, { fit: 'cover' })
            .toFile(output);

        console.log('OG image generated at:', output);
    } catch (err) {
        console.error('Failed to generate OG image:', err);
        process.exit(1);
    }
}

generate();
