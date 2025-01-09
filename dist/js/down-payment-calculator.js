import '../css/down-payment.css';

    document.addEventListener("DOMContentLoaded", function () {
        const loanTypes = {
            conventional: [0.03, 0.05, 0.10, 0.20], // Conventional: 3%, 5%, 10%, 20%
            fha: [0.035, 0.10] // FHA: 3.5%, 10%
        };

            // Tab switching logic
    const tabs = document.querySelectorAll(".results-tab");
    const downPaymentOptions = document.getElementById("down-payment-options");
    const savingsTimeline = document.getElementById("savings-timeline");

    // Function to show the appropriate tab content
    function showTab(tabId) {
        // Reset active states for tabs
        tabs.forEach(tab => tab.classList.remove("tab-active"));

        // Hide all content
        downPaymentOptions.style.display = "none";
        savingsTimeline.style.display = "none";

        // Set active tab and display corresponding content
        const activeTab = document.getElementById(tabId);
        if (activeTab) {
            activeTab.classList.add("tab-active");

            if (tabId === "tab-recommended") {
                downPaymentOptions.style.display = "block";
            } else if (tabId === "tab-max-budget") {
                savingsTimeline.style.display = "block";
            }
        }
    }

    // Add click event listeners to the tabs
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            showTab(tab.id);
        });
    });

    // Set default tab on load
    showTab("tab-recommended");



        // Down Payment Select JS
        const selectFluid = document.querySelector(".down-payment-select-fluid");
        const selectedOption = selectFluid.querySelector(".selected-option");
        const optionsContainer = document.getElementById("down-payment-chart-select");
        const options = optionsContainer.querySelectorAll(".down-payment-chart-option");
        const allCharts = document.querySelectorAll(".chart-container");
        const monthlyContributionInput = document.getElementById("monthly-contributions"); // Added this line
        let isDropdownOpen = false;
        
        // Toggle dropdown visibility
        selectFluid.addEventListener("click", (event) => {
          // Prevent immediate dropdown closure on option click
          event.stopPropagation();
          isDropdownOpen = !isDropdownOpen;
          optionsContainer.style.display = isDropdownOpen ? "block" : "none";
        });
        
        // Handle option selection and chart display
        options.forEach(option => {
          option.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent event bubbling
            const selectedValue = option.getAttribute("data-value");
            const chartToShow = option.getAttribute("data-chart");
            const displayText = option.textContent;
        
            if (!selectedValue) {
              console.error("Selected option does not have a valid data-value.");
              return;
            }
        
            // Update the selected option display
            selectedOption.textContent = displayText;
            selectedOption.setAttribute("data-value", selectedValue); // Update the data-value attribute
        
            // Hide all charts
            allCharts.forEach(chart => chart.classList.remove("active"));
        
            // Show the respective chart
            const chartElement = document.getElementById(chartToShow);
            if (chartElement) {
              chartElement.classList.add("active");
            } else {
              console.warn(`No chart found for chartToShow: ${chartToShow}`);
            }
        
            // Close the dropdown immediately
            optionsContainer.style.display = "none";
            isDropdownOpen = false;
        
            console.log(`Selected Value: ${selectedValue}, Displaying Chart: ${chartToShow}`);
          });
        });
        
        // Close dropdown when clicking outside
        document.addEventListener("click", (event) => {
          if (!selectFluid.contains(event.target)) {
            optionsContainer.style.display = "none";
            isDropdownOpen = false;
          }
        });
        
        

        


        // Calculator JS
        const homePriceInput = document.getElementById("home-price");
        const loanTypeSelect = document.getElementById("down-payment-chart-select");
        const downPaymentMonths = document.getElementById("down-payment-months");
        const downPaymentSavings = document.getElementById("down-payment-savings");
        const chartContainer = document.getElementById("chart-container");

    
        // Helper function to get input value or fallback to placeholder
        function getInputValueOrPlaceholder(inputElement) {
            return parseFloat(inputElement.value) || parseFloat(inputElement.placeholder) || 0;
        }
    
        // Calculate and display results dynamically
        // function calculateAndDisplayResults() {
        //     const homePrice = getInputValueOrPlaceholder(homePriceInput);
        
        //     // Get the selected loan type from the custom dropdown
        //     const selectedOption = document.querySelector(".selected-option");
        //     if (!selectedOption) {
        //         console.error("No selected option found.");
        //         chartContainer.innerHTML = "<p>Please select a loan type to see results.</p>";
        //         return;
        //     }
        
        //     const loanType = selectedOption.getAttribute("data-value");
        //     if (!loanType) {
        //         console.error("Selected option does not have a valid data-value.");
        //         chartContainer.innerHTML = "<p>Please select a valid loan type to see results.</p>";
        //         return;
        //     }
        
        //     // Get the percentages for the selected loan type
        //     const percentages = loanTypes[loanType];
        //     if (!percentages) {
        //         console.error(`Invalid loan type selected: ${loanType}`);
        //         chartContainer.innerHTML = "<p>Please select a valid loan type to see results.</p>";
        //         return;
        //     }
        
        //     // Clear previous charts and dynamically created elements
        //     chartContainer.innerHTML = "";
        
        //     // Dynamically create and insert the main results text
        //     let homePriceElement = document.getElementById("results-home-price");
        //     if (!homePriceElement) {
        //         const homePriceText = document.createElement("p");
        //         homePriceText.className = "down-payment-results";
        //         homePriceText.innerHTML = `For a <span id="results-home-price"></span> mortgage.`;
        //         chartContainer.before(homePriceText); // Insert the text above the chart container
        //         homePriceElement = document.getElementById("results-home-price");
        //     }
        
        //     // Update the home price dynamically
        //     homePriceElement.textContent = `${homePrice.toLocaleString()}`;
        
        //     // Function to draw a rounded rectangle
        //     function drawRoundedRect(ctx, x, y, width, height, radius, fillStyle) {
        //         ctx.fillStyle = fillStyle;
        //         ctx.beginPath();
        //         ctx.moveTo(x + radius, y);
        //         ctx.lineTo(x + width - radius, y);
        //         ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        //         ctx.lineTo(x + width, y + height - radius);
        //         ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        //         ctx.lineTo(x + radius, y + height);
        //         ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        //         ctx.lineTo(x, y + radius);
        //         ctx.quadraticCurveTo(x, y, x + radius, y);
        //         ctx.closePath();
        //         ctx.fill();
        //     }
        
        //     // Create charts and display text for each percentage
        //     percentages.forEach((percent) => {
        //         const chartWrapper = document.createElement("div");
        //         chartWrapper.style.marginBottom = "20px";
        //         chartWrapper.style.textAlign = "left";
        //         chartWrapper.style.fontFamily = "'Roboto', sans-serif";
        
        //         const percentageLabel = document.createElement("p");
        //         percentageLabel.textContent = `${(percent * 100).toFixed(1)}%`;
        //         percentageLabel.style.fontSize = "18px";
        //         percentageLabel.style.fontWeight = "bold";
        //         percentageLabel.style.margin = "0 0 2px 0";
        //         percentageLabel.style.textAlign = "left";
        
        //         const canvas = document.createElement("canvas");
        //         canvas.style.width = "100%";
        //         canvas.style.height = "25px";
        
        //         chartWrapper.appendChild(percentageLabel);
        //         chartWrapper.appendChild(canvas);
        //         chartContainer.appendChild(chartWrapper);
        
        //         const ctx = canvas.getContext("2d");
        //         const downPayment = homePrice * percent;
        //         const barWidth = (downPayment / homePrice) * canvas.width;
        //         const barHeight = canvas.height;
        
        //         drawRoundedRect(ctx, 0, 0, barWidth, barHeight, 5, "#175134");
        //         ctx.fillStyle = "#175134";
        //         ctx.fillRect(barWidth - 5, 0, 5, barHeight);
        //         drawRoundedRect(ctx, barWidth, 0, canvas.width - barWidth, barHeight, 5, "#cae6d9");
        //         ctx.fillStyle = "#cae6d9";
        //         ctx.fillRect(barWidth, 0, 5, barHeight);
        
        //         const description = document.createElement("p");
        //         description.className = "down-payment-text";
        //         description.style.margin = "2px 0 0 0";
        //         description.style.textAlign = "left";
        //         description.style.fontFamily = "'Roboto', sans-serif";
        //         description.style.fontSize = "16px";
        //         description.innerHTML = `<span>${downPayment.toLocaleString()}</span> for a <span>$${homePrice.toLocaleString()}</span> mortgage.`;
        //         chartWrapper.appendChild(description);
        //     });
        
        //     console.log(`Loan type: ${loanType}, Percentages: ${percentages}`);
        // }


        function calculateAndDisplayResults() {
          const homePrice = getInputValueOrPlaceholder(homePriceInput);
      
          // Get the selected loan type from the custom dropdown
          const selectedOption = document.querySelector(".selected-option");
          if (!selectedOption) {
              console.error("No selected option found.");
              chartContainer.innerHTML = "<p>Please select a loan type to see results.</p>";
              return;
          }
      
          const loanType = selectedOption.getAttribute("data-value");
          if (!loanType) {
              console.error("Selected option does not have a valid data-value.");
              chartContainer.innerHTML = "<p>Please select a valid loan type to see results.</p>";
              return;
          }
      
          // Get the percentages for the selected loan type
          const percentages = loanTypes[loanType];
          if (!percentages) {
              console.error(`Invalid loan type selected: ${loanType}`);
              chartContainer.innerHTML = "<p>Please select a valid loan type to see results.</p>";
              return;
          }
      
          // Retrieve monthly contributions for the savings timeline
          const monthlyContribution = getInputValueOrPlaceholder(monthlyContributionInput);
      
          if (!monthlyContribution || monthlyContribution <= 0) {
              console.error("Invalid monthly contribution input.");
              chartContainer.innerHTML = "<p>Please enter a valid monthly contribution to see results.</p>";
              return;
          }
      
          // Clear previous charts and dynamically created elements
          chartContainer.innerHTML = "";
      
          // Dynamically create and insert the main results text
          let homePriceElement = document.getElementById("results-home-price");
          if (!homePriceElement) {
              const homePriceText = document.createElement("p");
              homePriceText.className = "down-payment-results";
              homePriceText.innerHTML = `For a <span id="results-home-price"></span> mortgage.`;
              chartContainer.before(homePriceText); // Insert the text above the chart container
              homePriceElement = document.getElementById("results-home-price");
          }
      
          // Update the home price dynamically
          homePriceElement.textContent = `${homePrice.toLocaleString()}`;
      
          // Function to draw a rounded rectangle (bar chart logic)
          function drawRoundedRect(ctx, x, y, width, height, radius, fillStyle) {
              ctx.fillStyle = fillStyle;
              ctx.beginPath();
              ctx.moveTo(x + radius, y);
              ctx.lineTo(x + width - radius, y);
              ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
              ctx.lineTo(x + width, y + height - radius);
              ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
              ctx.lineTo(x + radius, y + height);
              ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
              ctx.lineTo(x, y + radius);
              ctx.quadraticCurveTo(x, y, x + radius, y);
              ctx.closePath();
              ctx.fill();
          }
      
          // Create bar charts and display text for each percentage
          percentages.forEach((percent) => {
              const chartWrapper = document.createElement("div");
              chartWrapper.style.marginBottom = "20px";
              chartWrapper.style.textAlign = "left";
              chartWrapper.style.fontFamily = "'Roboto', sans-serif";
      
              const percentageLabel = document.createElement("p");
              percentageLabel.textContent = `${(percent * 100).toFixed(1)}%`;
              percentageLabel.style.fontSize = "18px";
              percentageLabel.style.fontWeight = "bold";
              percentageLabel.style.margin = "0 0 2px 0";
      
              const canvas = document.createElement("canvas");
              canvas.style.width = "100%";
              canvas.style.height = "25px";
      
              chartWrapper.appendChild(percentageLabel);
              chartWrapper.appendChild(canvas);
              chartContainer.appendChild(chartWrapper);
      
              const ctx = canvas.getContext("2d");
              const downPayment = homePrice * percent;
              const barWidth = (downPayment / homePrice) * canvas.width;
              const barHeight = canvas.height;
      
              drawRoundedRect(ctx, 0, 0, barWidth, barHeight, 5, "#175134");
              ctx.fillStyle = "#175134";
              ctx.fillRect(barWidth - 5, 0, 5, barHeight);
              drawRoundedRect(ctx, barWidth, 0, canvas.width - barWidth, barHeight, 5, "#cae6d9");
              ctx.fillStyle = "#cae6d9";
              ctx.fillRect(barWidth, 0, 5, barHeight);
      
              const description = document.createElement("p");
              description.className = "down-payment-text";
              description.style.margin = "2px 0 0 0";
              description.style.fontSize = "16px";
              description.innerHTML = `<span>${downPayment.toLocaleString()}</span> for a <span>$${homePrice.toLocaleString()}</span> mortgage.`;
              chartWrapper.appendChild(description);
      
              // Render amortization chart
              const amortizationCanvas = document.createElement("canvas");
              amortizationCanvas.style.width = "100%";
              amortizationCanvas.style.height = "300px";
              chartContainer.appendChild(amortizationCanvas);
      
              const amortizationCtx = amortizationCanvas.getContext("2d");
              const targetAmount = downPayment;
              const months = Math.ceil(targetAmount / monthlyContribution);
      
              drawAmortizationChart(amortizationCtx, months, monthlyContribution, targetAmount);
          });
      
          console.log(`Loan type: ${loanType}, Percentages: ${percentages}`);
      }
      


 



        
        
      function drawAmortizationChart(months, monthlyContribution, targetAmount, hoverIndex = 0) {
    const canvas = document.getElementById('amortization-chart');
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    // Adjust canvas dimensions dynamically
    const isSmallScreen = window.innerWidth < 700;
    const canvasHeight = isSmallScreen ? 200 : 300;

    canvas.width = canvas.parentElement.offsetWidth * dpr;
    canvas.height = canvasHeight * dpr;
    ctx.scale(dpr, dpr);

    const width = canvas.width / dpr;
    const height = canvas.height / dpr;

    // Adjust padding to prevent overlap
    const padding = { top: 10, right: 35, bottom: 50, left: 50 };
    const gridColor = '#d0d0d0';
    const labelColor = '#505050';

    // Calculate Y-axis max value (targetAmount or slightly higher)
    const yAxisMax = Math.ceil(targetAmount / 10000) * 10000;

    // Calculate data points
    const totalSaved = [];
    let cumulativeSavings = 0;
    for (let i = 0; i < months; i++) {
        cumulativeSavings += monthlyContribution;
        totalSaved.push(Math.min(cumulativeSavings, targetAmount));
    }

    // Helper functions for coordinates
    function getY(value) {
        return height - padding.bottom - (value / yAxisMax) * (height - padding.top - padding.bottom);
    }

    function getX(index) {
        return padding.left + (index / (months - 1)) * (width - padding.left - padding.right);
    }

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw horizontal grid lines (Y-axis) and labels
    ctx.font = '14px Roboto';
    ctx.textAlign = 'right';
    ctx.fillStyle = '#232525'; // Label color
    ctx.strokeStyle = gridColor;

    for (let i = 0; i <= yAxisMax; i += yAxisMax / 5) {
        const y = getY(i);

        // Grid line
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(width - padding.right, y);
        ctx.stroke();

        // Y-axis label
        ctx.fillText(`$${(i / 1000).toFixed(0)}K`, padding.left - 10, y + 5);
    }

    // Draw vertical grid lines (X-axis) and labels
    ctx.textAlign = 'center';
    for (let i = 0; i <= months; i += Math.max(1, Math.floor(months / 12))) {
        const x = getX(i);
        const monthLabel = `${i}M`;

        // Grid line
        ctx.beginPath();
        ctx.moveTo(x, padding.top);
        ctx.lineTo(x, height - padding.bottom);
        ctx.stroke();

        // X-axis label
        ctx.fillText(monthLabel, x, height - 10);
    }

    // Draw the savings line
    ctx.strokeStyle = '#175134'; // Line color
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (let i = 0; i < totalSaved.length; i++) {
        const x = getX(i);
        const y = getY(totalSaved[i]);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Draw hover line and dot
    const x = getX(hoverIndex);
    const y = getY(totalSaved[hoverIndex]);

    // Vertical hover line
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(x, padding.top);
    ctx.lineTo(x, height - padding.bottom);
    ctx.stroke();

    // Hover dot
    const dotRadius = 6;
    ctx.fillStyle = '#175134'; // Dot color
    ctx.beginPath();
    ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
    ctx.fill();

    // Draw hover labels
    ctx.fillStyle = '#232525'; // Label color
    ctx.textAlign = 'left';
    ctx.font = '14px Roboto';
    const labelX = x + 10;
    const labelY = y - 10;

    ctx.fillText(`Saved: $${totalSaved[hoverIndex].toLocaleString()}`, labelX, labelY);
    ctx.fillText(`Month: ${hoverIndex + 1}`, labelX, labelY + 20);
}

        



        
        
        
        
    

    // Reset all inputs to placeholders and defaults
    function resetInputs() {
        homePriceInput.value = "";
        loanTypeSelect.value = "conventional"; // Default to Conventional loan
        chartContainer.innerHTML = ""; // Clear charts
        calculateAndDisplayResults(); // Recalculate using placeholders
    }
    

    // Event listeners for buttons
    document.getElementById("update-btn").addEventListener("click", calculateAndDisplayResults);
    document.getElementById("reset-btn").addEventListener("click", resetInputs);

    // Initialize chart on page load with placeholder values and Conventional loan
    calculateAndDisplayResults();
});
