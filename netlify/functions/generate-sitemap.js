const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
    try {
        // Construct the path to the metadata file
        const metadataPath = path.join(process.cwd(), 'public', 'pages-metadata.json');
        console.log('Metadata Path:', metadataPath);

        // Check if the file exists before reading
        if (!fs.existsSync(metadataPath)) {
            throw new Error(`File does not exist at path: ${metadataPath}`);
        }

        // Read the JSON file
        const fileContent = fs.readFileSync(metadataPath, 'utf8');
        console.log('File Content:', fileContent);

        // Parse the JSON content
        const pagesMetadata = JSON.parse(fileContent);
        console.log('Parsed Metadata:', pagesMetadata);

        // Generate sitemap content
        let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
        pagesMetadata.forEach(page => {
            sitemapContent += `  <url>\n`;
            sitemapContent += `    <loc>${page.loc}</loc>\n`;
            sitemapContent += `    <lastmod>${page.lastmod}</lastmod>\n`;
            sitemapContent += `    <changefreq>${page.changefreq}</changefreq>\n`;
            sitemapContent += `    <priority>${page.priority}\n`;
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
    } catch (error) {
        // Log the error details
        console.error('Error:', error.message);
        return {
            statusCode: 500,
            body: 'Error reading pages metadata: ' + error.message
        };
    }
};
