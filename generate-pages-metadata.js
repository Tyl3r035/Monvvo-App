const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.monvvo.com';
const directoryPath = path.join(__dirname, 'public');
const metadataFilePath = path.join(__dirname, 'public', 'pages-metadata.json');

function generatePagesMetadata() {
    let urls = [];

    function readDirectory(directory) {
        fs.readdirSync(directory).forEach(file => {
            const fullPath = path.join(directory, file);
            if (fs.lstatSync(fullPath).isDirectory()) {
                readDirectory(fullPath);
            } else {
                const relativePath = fullPath.replace(directoryPath, '').replace(/\\/g, '/');
                if (relativePath.endsWith('.html')) {
                    urls.push({
                        loc: `${baseUrl}${relativePath}`,
                        lastmod: new Date().toISOString().split('T')[0],
                        changefreq: 'monthly',
                        priority: 0.8
                    });
                }
            }
        });
    }

    readDirectory(directoryPath);

    fs.writeFileSync(metadataFilePath, JSON.stringify(urls, null, 2));
    console.log('Pages metadata generated and saved to public/pages-metadata.json');
}

generatePagesMetadata();
