// generate-sitemap.js
const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'public');
const sitemapPath = path.join(baseDir, 'sitemap.xml');
const baseUrl = 'https://www.monvvo.com'; // Replace with your actual domain

const pages = [
  { dir: 'Loan', file: 'Auto-Loan-Calculator.html', priority: 0.8 },
  { dir: 'Loan', file: 'Loan-Amortization-Calculator.html', priority: 0.8 },
  { dir: 'Loan', file: 'Personal-Loan-Calculator.html', priority: 0.8 },
  { dir: 'Loan', file: 'Student-Loan-Calculator.html', priority: 0.8 },
  { dir: 'Investment', file: 'Compound-Interest-Calculator.html', priority: 0.7 },
  { dir: 'Investment', file: 'Investment-Growth-Calculator.html', priority: 0.7 },
  { dir: 'Investment', file: 'Retirement-Savings-Calculator.html', priority: 0.7 },
  { dir: 'Mortgage', file: 'Down-Payment-Calculator.html', priority: 0.9 },
  { dir: 'Mortgage', file: 'Home-Equity-Calculator.html', priority: 0.9 },
  { dir: 'Mortgage', file: 'Mortgage-Payoff-Calculator.html', priority: 0.9 }
];

function generateSitemap() {
  try {
    const urls = pages.map(page => {
      const lastmod = new Date().toISOString().split('T')[0]; // current date in YYYY-MM-DD format
      return `
        <url>
          <loc>${baseUrl}/${page.dir}/${page.file}</loc>
          <lastmod>${lastmod}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>${page.priority}</priority>
        </url>`;
    });

    const sitemapContent = `
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls.join('\n')}
      </urlset>
    `;

    fs.writeFileSync(sitemapPath, sitemapContent.trim());
    console.log('Sitemap generated successfully.');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap();
