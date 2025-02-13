import '../css/home-affordability.css';
import { generateMortgagePdf } from "./pdf/mortgage-pdf.js";

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired");

    // Inputs
    const annualIncomeInput = document.getElementById('annual-income');
    const monthlyDebtInput = document.getElementById('monthly-debt');
    const downPaymentInput = document.getElementById('affordability-down');
    const loanTermDropdown = document.getElementById('affordability-term');
    const creditScoreDropdown = document.getElementById('affordability-credit');

    // Buttons
    const updateBtn = document.getElementById('update-btn');
    const resetBtn = document.getElementById('reset-btn');

    // Restrict invalid characters in inputs
    const inputsToRestrict = [
        annualIncomeInput,
        monthlyDebtInput,
        downPaymentInput,
        loanTermDropdown,
        creditScoreDropdown,
    ];

    inputsToRestrict.forEach(input => {
        input.addEventListener('keydown', function (event) {
            if (event.key === "-" || event.key === "e") {
                event.preventDefault();
            }
        });
    });


    function calculateAndDisplayResults() {
        console.log("Calculating home affordability...");
    
        const annualIncome = parseFloat(annualIncomeInput.value) || 70000;
        const monthlyDebt = parseFloat(monthlyDebtInput.value) || 1200;
        const downPayment = parseFloat(downPaymentInput.value) || 10000;
        const loanTerm = parseInt(loanTermDropdown.value) || 30;
        const creditScore = parseInt(creditScoreDropdown.value) || 720;
    
        const baseInterestRate = creditScore >= 720 ? 0.05 : creditScore >= 670 ? 0.06 : 0.075;
        const monthlyInterestRate = baseInterestRate / 12;
        const numberOfPayments = loanTerm * 12;
    
        const frontEndRatio = 0.28; // Conservative ratio
        const backEndRatio = 0.36;  // Aggressive ratio
    
        // Determine which tab is active and use the corresponding additional cost inputs
        let propertyTax, pmi, hoa;
        if (document.getElementById("max-budget").style.display !== "none") {
            propertyTax = parseFloat(document.getElementById("max-value-property-tax").value) || 0;
            pmi = parseFloat(document.getElementById("max-value-pmi").value) || 0;
            hoa = parseFloat(document.getElementById("max-value-hoa").value) || 0;
        } else {
            propertyTax = parseFloat(document.getElementById("recommended-value-property-tax").value) || 0;
            pmi = parseFloat(document.getElementById("recommended-value-pmi").value) || 0;
            hoa = parseFloat(document.getElementById("recommended-value-hoa").value) || 0;
        }
    
        // Calculations
        const recommendedMonthlyPayment = (annualIncome / 12) * frontEndRatio;
        const maxMonthlyPayment = (annualIncome / 12) * backEndRatio - monthlyDebt;
    
        const recommendedLoan =
            (recommendedMonthlyPayment * (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments))) /
            monthlyInterestRate;
        const maxLoan =
            (maxMonthlyPayment * (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments))) /
            monthlyInterestRate;
    
        // Monthly Mortgage Payment Calculation
        function calculateMonthlyPayment(loanAmount) {
            return loanAmount * (monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments)));
        }
    
        const recommendedMonthlyMortgage = calculateMonthlyPayment(Math.min(recommendedLoan, maxLoan)) + propertyTax + pmi + hoa;
        const maxMonthlyMortgage = calculateMonthlyPayment(Math.max(recommendedLoan, maxLoan)) + propertyTax + pmi + hoa;
    
        // Update Recommended Budget (Lower Loan Amount)
        const recommendedContent = document.getElementById("recommended-budget");
        if (recommendedContent) {
            const loanValueRecommended = recommendedContent.querySelector("#loan-total-value-recommended");
            if (loanValueRecommended) {
                loanValueRecommended.textContent = `$${Math.ceil(Math.min(recommendedLoan, maxLoan)).toLocaleString()}`;
            }
        
            const principalInterestLabel = recommendedContent.querySelector("#recommended-value-principal-interest");
            if (principalInterestLabel) {
                principalInterestLabel.textContent = `$${Math.ceil(Math.min(recommendedLoan, maxLoan)).toLocaleString()}`;
            }
        
            const monthlyPaymentLabel = recommendedContent.querySelector("#recommended-value-monthly-total");
            if (monthlyPaymentLabel) {
                monthlyPaymentLabel.textContent = `$${Math.ceil(recommendedMonthlyMortgage).toLocaleString()}`;
            }
        }
    
        // Update Maximum Budget (Higher Loan Amount)
        const maxContent = document.getElementById("max-budget");
        if (maxContent) {
            const loanValueMax = maxContent.querySelector("#loan-total-value-max");
            if (loanValueMax) {
                loanValueMax.textContent = `$${Math.ceil(Math.max(recommendedLoan, maxLoan)).toLocaleString()}`;
            }
        
            const principalInterestLabel = maxContent.querySelector("#max-value-principal-interest");
            if (principalInterestLabel) {
                principalInterestLabel.textContent = `$${Math.ceil(Math.max(recommendedLoan, maxLoan)).toLocaleString()}`;
            }
        
            const monthlyPaymentLabel = maxContent.querySelector("#max-value-monthly-total");
            if (monthlyPaymentLabel) {
                monthlyPaymentLabel.textContent = `$${Math.ceil(maxMonthlyMortgage).toLocaleString()}`;
            }
        }
    
        console.log("Results updated.");
    }
    

    // Fetch property tax, PMI, and HOA input elements
    const propertyTaxInput = document.getElementById("recommended-value-property-tax");
    const pmiInput = document.getElementById("recommended-value-pmi");
    const hoaInput = document.getElementById("recommended-value-hoa");

    // Function to attach event listeners
    function addUpdateListener(input) {
        input.addEventListener("input", calculateAndDisplayResults);
    }

    // Attach listeners to property tax, PMI, and HOA inputs
    addUpdateListener(propertyTaxInput);
    addUpdateListener(pmiInput);
    addUpdateListener(hoaInput);
    


    calculateAndDisplayResults();




    // Function to handle tab switching directly
    // function switchTabs(contentId, buttonId) {
    //     const tabs = document.querySelectorAll('.results-content > div');
    //     const navButtons = document.querySelectorAll('.results-tab');

    //     // Hide all content and deactivate all buttons
    //     tabs.forEach(tab => (tab.style.display = 'none'));
    //     navButtons.forEach(button => button.classList.remove('tab-active'));

    //     // Show the selected content and activate the corresponding button
    //     const selectedContent = document.getElementById(contentId);
    //     const selectedButton = document.getElementById(buttonId);

    //     if (selectedContent) {
    //         selectedContent.style.display = 'block';
    //         calculateAndDisplayResults(); // Recalculate when switching tabs
    //     } else {
    //         console.error(`Content with ID '${contentId}' not found.`);
    //     }

    //     if (selectedButton) {
    //         selectedButton.classList.add('tab-active');
    //     } else {
    //         console.error(`Button with ID '${buttonId}' not found.`);
    //     }
    // }

    function switchTabs(contentId, buttonId) {
        const tabs = document.querySelectorAll('.results-content > div');
        const navButtons = document.querySelectorAll('.results-tab');
    
        // Hide all content and deactivate all buttons
        tabs.forEach(tab => (tab.style.display = 'none'));
        navButtons.forEach(button => button.classList.remove('tab-active'));
    
        // Show the selected content and activate the corresponding button
        const selectedContent = document.getElementById(contentId);
        const selectedButton = document.getElementById(buttonId);
    
        if (selectedContent) {
            selectedContent.style.display = 'block';
            calculateAndDisplayResults(); // Recalculate when switching tabs
        } else {
            console.error(`Content with ID '${contentId}' not found.`);
        }
    
        if (selectedButton) {
            selectedButton.classList.add('tab-active');
        } else {
            console.error(`Button with ID '${buttonId}' not found.`);
        }
    }
    

    // Tab switching event listeners
    const tabRecommended = document.getElementById('tab-recommended');
    if (tabRecommended) {
        tabRecommended.addEventListener('click', () => {
            switchTabs('recommended-budget', 'tab-recommended');
        });
    } else {
        console.error("Element with ID 'tab-recommended' not found in the DOM");
    }

    const tabMaxBudget = document.getElementById('tab-max-budget');
    if (tabMaxBudget) {
        tabMaxBudget.addEventListener('click', () => {
            switchTabs('max-budget', 'tab-max-budget');
        });
    } else {
        console.error("Element with ID 'tab-max-budget' not found in the DOM");
    }
    


        // Event listener for the Update button
        updateBtn.addEventListener("click", () => {
            console.log("Update button clicked.");
            calculateAndDisplayResults(); // Recalculate based on current inputs
        });
    
        // Event listener for the Reset button
        resetBtn.addEventListener("click", () => {
            console.log("Reset button clicked.");
    
            // Reset default values
            annualIncomeInput.value = "70000";
            monthlyDebtInput.value = "1200";
            downPaymentInput.value = "10000";
            loanTermDropdown.value = "30";
            creditScoreDropdown.value = "720";
    
            // Clear Property Tax, PMI, and HOA inputs
            propertyTaxInput.value = "";
            pmiInput.value = "";
            hoaInput.value = "";
    
            // Recalculate and display default results
            calculateAndDisplayResults();
        });
    
        // Attach listeners to Property Tax, PMI, and HOA for real-time updates
        function addUpdateListener(input) {
            input.addEventListener("input", calculateAndDisplayResults);
        }
    
        addUpdateListener(propertyTaxInput);
        addUpdateListener(pmiInput);
        addUpdateListener(hoaInput);
    
    
});
