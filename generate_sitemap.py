import os
import xml.etree.ElementTree as ET
from datetime import datetime

# Function to traverse the directory and collect URLs
def collect_urls(directory, base_url):
    urls = []
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(".html"):
                file_path = os.path.join(root, file)
                url = file_path.replace(directory, base_url).replace("\\", "/")
                urls.append(url)
    return urls

# Function to create the sitemap XML
def create_sitemap(urls, output_file):
    urlset = ET.Element("urlset", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")

    for url in urls:
        url_element = ET.Element("url")
        loc = ET.Element("loc")
        loc.text = url
        lastmod = ET.Element("lastmod")
        lastmod.text = datetime.now().strftime("%Y-%m-%d")

        url_element.append(loc)
        url_element.append(lastmod)
        urlset.append(url_element)

    tree = ET.ElementTree(urlset)
    tree.write(output_file, encoding="utf-8", xml_declaration=True)

# Define the main function
def main():
    # Define your site's base URL and directory to scan
    base_url = "https://monvvo.com"
    directory_to_scan = "C:\Users\Tyler\Documents\GitHub\Monvvo-App"  # Update this to your site's root directory
    output_file = "sitemap.xml"

    # Collect URLs from the directory
    urls = collect_urls(directory_to_scan, base_url)

    # Create the sitemap
    create_sitemap(urls, output_file)

    print(f"Sitemap has been generated and saved to {output_file}")

if __name__ == "__main__":
    main()
