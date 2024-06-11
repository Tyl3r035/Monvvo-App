const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
    const metadataPath = path.resolve(__dirname, '..', '..', 'public', 'pages-metadata.json');

    // Log the metadata path
    console.log('Metadata Path:', metadataPath);

    // Read the JSON file
    let pagesMetadata;
    try {
        const fileContent = fs.readFileSync(metadataPath, 'utf8');
        console.log('File Content:', fileContent);
        pagesMetadata = JSON.parse(fileContent);
    } catch (error) {
        // Log the error details
        console.error('Error reading pages metadata:', error);
        return {
            statusCode: 500,
            body: 'Error reading pages metadata: ' + error.message
        };
    }

    // Generate sitemap content
    let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    pagesMetadata.forEach(page => {
        sitemapContent += `  <url>\n`;
        sitemapContent += `    <loc>${page.loc}</loc>\n`;
        sitemapContent += `    <lastmod>${page.lastmod}</lastmod>\n`;
        sitemapContent += `    <changefreq>${page.changefreq}</changefreq>\n`;
        sitemapContent += `    <priority>${page.priority}</priority>\n`;
        sitemapContent += `  </url>\n`;
    });
    sitemapContent += `</urlset>`;

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/xml',
        },
        body: sitemapContent,
    };
};
