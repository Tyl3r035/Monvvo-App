const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
    const baseUrl = 'https://www.monvvo.com';
    const metadataPath = path.join(__dirname, '..', '..', 'public', 'pages-metadata.json');
    
    // Read the JSON file
    let pagesMetadata;
    try {
        pagesMetadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
    } catch (error) {
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
