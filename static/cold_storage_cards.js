document.addEventListener("DOMContentLoaded", () => {
    // Retrieve data from localStorage
    const storedData = localStorage.getItem("coldStorageData");

    if (storedData) {
        const coldStorageData = JSON.parse(storedData);
        displayColdStorageCard(coldStorageData);
    }

    function displayColdStorageCard(data) {
        // Create a card container
        const cardContainer = document.createElement("div");
        cardContainer.className = "card";

        // Card content
        cardContainer.innerHTML = `
            <div class="card-content">
                <h3>Owner: ${data.ownerName}</h3>
                <p><strong>Business Name:</strong> ${data.businessName}</p>
                <p><strong>Address:</strong> ${data.address}</p>
                <p><strong>Type of Storage:</strong> ${data.storageType}</p>
                <p><strong>Facility Size:</strong> ${data.facilitySize} sq ft</p>
                <p><strong>Storage Conditions:</strong> ${data.storageConditions}</p>
                <p><strong>Hours of Operation:</strong> ${data.hoursOfOperation}</p>
                <p><strong>Security Measures:</strong> ${data.securityMeasures}</p>
                <p><strong>Licenses and Certifications:</strong> ${data.certifications}</p>
                <p><strong>Pricing Structure:</strong> ${data.pricingStructure}</p>
                <p><strong>Contract Terms:</strong> ${data.contractTerms}</p>
                <p><strong>Contact Phone:</strong> ${data.contactPhone}</p>
                <p><strong>Contact Email:</strong> ${data.contactEmail}</p>
                ${data.imageBase64 ? `<img src="${data.imageBase64}" alt="Facility Photo" class="facility-photo">` : ""}
                <a href="#" class="select">Select</a>
            </div>
        `;

        // Append to the container in the HTML
        document.querySelector(".container").appendChild(cardContainer);
    }
});
