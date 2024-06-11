const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.monvvo.com';
const directoryPath = path.join(__dirname, 'public');

function generateSitemap() {
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

    let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    urls.forEach(url => {
        sitemapContent += `  <url>\n`;
        sitemapContent += `    <loc>${url.loc}</loc>\n`;
        sitemapContent += `    <lastmod>${url.lastmod}</lastmod>\n`;
        sitemapContent += `    <changefreq>${url.changefreq}</changefreq>\n`;
        sitemapContent += `    <priority>${url.priority}</priority>\n`;
        sitemapContent += `  </url>\n`;
    });
    sitemapContent += `</urlset>`;

    fs.writeFileSync(path.join(directoryPath, 'sitemap.xml'), sitemapContent);
    console.log('Sitemap generated and saved to public/sitemap.xml');
}

generateSitemap();
