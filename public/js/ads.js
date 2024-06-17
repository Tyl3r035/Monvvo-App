// ads.js

// Example script for initializing googleFC
var googleFC = {
    promptForConsent: function(options) {
        console.log("Prompting for consent with options:", options);
        // Actual implementation here
    },
    callbackQueue: [],
    showRevocationMessage: function() {
        console.log("Showing revocation message");
        // Actual implementation here
    }
};

// Simulating googlefc initialization
googlefc = googleFC;

// Geolocation check using ipapi.co
function checkGeolocation() {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            if (data && data.country_code && ['AT', 'BE', 'BG', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'GR', 'HR', 'HU', 'IE', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK'].includes(data.country_code)) {
                document.getElementById('privacyButton').style.display = 'block';
                document.getElementById('privacyLink').style.display = 'block';
            }
        })
        .catch(error => {
            console.error('Error fetching geolocation data:', error);
        });
}

document.getElementById('privacyButton').addEventListener('click', function() {
    this.classList.add('hide');
});

// Call the function to check geolocation
checkGeolocation();
