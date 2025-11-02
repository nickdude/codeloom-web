const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const input = path.join(__dirname, '..', 'public', 'assets', 'C.svg');
const outputDir = path.join(__dirname, '..', 'public', 'assets');

const sizes = [16, 32, 48, 96];
// We'll create dedicated 192/512 files with canonical names for Android/manifest
const promises = [];

async function generate() {
    try {
        if (!fs.existsSync(input)) {
            console.error('Input SVG not found:', input);
            process.exit(1);
        }

        for (const size of sizes) {
            const out = path.join(outputDir, `favicon-${size}x${size}.png`);
            promises.push(
                sharp(input)
                    .resize(size, size, { fit: 'cover' })
                    .png({ quality: 90 })
                    .toFile(out)
            );
        }

        // Apple touch icon (180x180)
        promises.push(
            sharp(input)
                .resize(180, 180, { fit: 'cover' })
                .png({ quality: 90 })
                .toFile(path.join(outputDir, 'apple-touch-icon.png'))
        );

        // Android / manifest icons
        promises.push(
            sharp(input)
                .resize(192, 192, { fit: 'cover' })
                .png({ quality: 90 })
                .toFile(path.join(outputDir, 'android-chrome-192x192.png'))
        );
        promises.push(
            sharp(input)
                .resize(512, 512, { fit: 'cover' })
                .png({ quality: 90 })
                .toFile(path.join(outputDir, 'android-chrome-512x512.png'))
        );

        await Promise.all(promises);
        console.log('Favicons generated in', outputDir);
    } catch (err) {
        console.error('Failed to generate favicons:', err);
        process.exit(1);
    }
}

generate();
