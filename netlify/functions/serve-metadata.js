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

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
            },
            body: fileContent,
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
