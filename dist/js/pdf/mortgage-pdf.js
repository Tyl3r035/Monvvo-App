import jsPDF from "jspdf"; // Add this at the top
import "jspdf-autotable"; // Ensure this is also imported for table generation

export function generateMortgagePdf(paymentData, amortizationData) {
    const doc = new jsPDF();

    // Styles
    const colors = {
        navyBlue: "#1C2939",
        forestGreen: "#175134",
        lightGreen2: "#91BBA6",
        white: "#FFFFFF",
        black: "#232525",
    };

    try {
        // Add Logo with Responsive Height
        const logoPath = "./img/logos/monvvo-logo.png"; // Relative path to your logo
        const logoX = 14; // X position
        const logoY = 10; // Y position
        const logoWidth = 40; // Desired width in mm
        const logoAspectRatio = 6.625; // Aspect ratio (width/height)

        if (logoAspectRatio <= 0) throw new Error("Invalid aspect ratio");

        const logoHeight = logoWidth / logoAspectRatio;

        // Add the logo to the PDF
        doc.addImage(logoPath, "PNG", logoX, logoY, logoWidth, logoHeight);
    } catch (error) {
        console.error("Error adding logo to PDF:", error);
    }

    // Adjust Title Section Position
    const titleY = 10 + (40 / 6.625) + 15; // Adjust dynamically based on logo height
    doc.setFont("serif", "bold");
    doc.setTextColor(colors.black); // Ensure the title text is black
    doc.setFontSize(20);
    doc.text("Monvvo Mortgage Calculation Report", 14, titleY);

    // Subheader Section
    doc.setFontSize(12);
    doc.setFont("sans-serif", "normal");
    doc.setTextColor(colors.forestGreen); // Subheader remains green
    const subheaderY = titleY + 8;
    doc.text("Your Trusted Tool in Precision Calculation", 14, subheaderY);

    // Disclaimer Section
    const disclaimerText = "Actual mortgage amount may vary. This is only an estimate.";
    const disclaimerY = subheaderY + 10;

    doc.setFontSize(10);
    doc.setFont("sans-serif", "italic");
    doc.setTextColor(colors.black);

    // Add disclaimer text as regular text (not a link)
    doc.text(disclaimerText, 14, disclaimerY);
    // Payment Details Section
    doc.setTextColor(colors.black);
    doc.setFontSize(14);
    doc.setFont("serif", "bold");
    const paymentDetailsY = disclaimerY + 10;
    doc.text("Payment Details", 14, paymentDetailsY);

    const paymentDetails = paymentData.map(item => [item.label, `${item.value.toLocaleString()}`]);
    doc.autoTable({
        startY: paymentDetailsY + 5,
        head: [
            [
                { content: "Detail", styles: { fillColor: colors.forestGreen, textColor: colors.white, fontStyle: "sans-serif" } },
                { content: "Value", styles: { fillColor: colors.forestGreen, textColor: colors.white, fontStyle: "sans-serif" } }
            ]
        ],
        body: paymentDetails,
        styles: { fontStyle: "sans-serif" },
    });

    // Amortization Schedule Section
    doc.setFontSize(14);
    doc.setFont("serif", "bold");
    doc.setTextColor(colors.black);
    const amortizationY = doc.lastAutoTable.finalY + 10;
    doc.text("Amortization Schedule", 14, amortizationY);

    const amortizationDetails = amortizationData.map((row, index) => [
        index + 1,
        row.date,
        `$${row.principal.toFixed(2)}`,
        `$${row.interest.toFixed(2)}`,
        `$${row.balance.toFixed(2)}`
    ]);

    doc.autoTable({
        startY: amortizationY + 5,
        head: [
            [
                { content: "Month", styles: { fillColor: colors.forestGreen, textColor: colors.white, fontStyle: "sans-serif" } },
                { content: "Date", styles: { fillColor: colors.forestGreen, textColor: colors.white, fontStyle: "sans-serif" } },
                { content: "Principal", styles: { fillColor: colors.forestGreen, textColor: colors.white, fontStyle: "sans-serif" } },
                { content: "Interest", styles: { fillColor: colors.forestGreen, textColor: colors.white, fontStyle: "sans-serif" } },
                { content: "Remaining Balance", styles: { fillColor: colors.forestGreen, textColor: colors.white, fontStyle: "sans-serif" } }
            ]
        ],
        body: amortizationDetails,
        styles: { fontStyle: "sans-serif" },
    });

    // Footer
    const pageHeight = doc.internal.pageSize.height;
    doc.setFillColor(colors.navyBlue);
    doc.rect(0, pageHeight - 20, doc.internal.pageSize.width, 20, "F");
    doc.setTextColor(colors.white);
    doc.setFontSize(10);
    doc.setFont("sans-serif", "normal");
    doc.text("2024, Monvvo | Trusted Tool in Precision Calculation", 14, pageHeight - 8);

    // Save the PDF
    doc.save("Monvvo_Mortgage_Report.pdf");
}
