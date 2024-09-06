document.getElementById("coldStorageForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const ownerName = document.getElementById("ownerName").value;
    const businessName = document.getElementById("businessName").value;
    const contactEmail = document.getElementById("contactEmail").value;
    const contactPhone = document.getElementById("contactPhone").value;
    const address = document.getElementById("address").value;
    const facilitySize = document.getElementById("facilitySize").value;
    const storageType = document.getElementById("storageType").value;
    const storageConditions = document.getElementById("storageConditions").value;
    const hoursOfOperation = document.getElementById("hoursOfOperation").value;
    const securityMeasures = document.getElementById("securityMeasures").value;
    const certifications = document.getElementById("certifications").value;
    const pricingStructure = document.getElementById("pricingStructure").value;
    const contractTerms = document.getElementById("contractTerms").value;

    // Handle image files
    const fileInput = document.getElementById("facilityPhotos");
    if (fileInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageBase64 = e.target.result;  // Read image as Base64

            const coldStorageData = {
                ownerName,
                businessName,
                contactEmail,
                contactPhone,
                address,
                facilitySize,
                storageType,
                storageConditions,
                hoursOfOperation,
                securityMeasures,
                certifications,
                pricingStructure,
                contractTerms,
                imageBase64  // Store Base64 image string
            };

            localStorage.setItem("coldStorageData", JSON.stringify(coldStorageData));
            alert("Cold storage details registered successfully!");

            // Redirect to cold_storage_cards.html
            window.location.href = "cold_storage_cards.html";
        };

        reader.readAsDataURL(fileInput.files[0]);  // Read the first selected file
    } else {
        // Store data without an image
        const coldStorageData = {
            ownerName,
            businessName,
            contactEmail,
            contactPhone,
            address,
            facilitySize,
            storageType,
            storageConditions,
            hoursOfOperation,
            securityMeasures,
            certifications,
            pricingStructure,
            contractTerms,
            imageBase64: ""  // No image selected
        };

        localStorage.setItem("coldStorageData", JSON.stringify(coldStorageData));
        alert("Cold storage details registered successfully!");

        // Redirect to cold_storage_cards.html
        window.location.href = "cold_storage_cards.html";
    }
});
