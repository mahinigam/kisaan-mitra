document.querySelector('.sell-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const file = formData.get('productImage');

    // Simulate file upload and get image URL (for demonstration purposes)
    const imageURL = URL.createObjectURL(file); // Create a URL for the uploaded image

    // Collect form data
    const farmerData = {
        name: formData.get('farmerName'),
        product: formData.get('productName'),
        description: formData.get('productDescription'),
        price: formData.get('productPrice'),
        image: imageURL // Store the URL of the image
    };

    // Retrieve existing farmers from localStorage
    const farmers = JSON.parse(localStorage.getItem('farmers')) || [];
    farmers.push(farmerData);

    // Save updated farmers list to localStorage
    localStorage.setItem('farmers', JSON.stringify(farmers));

    alert('Product listed successfully!');
    // Optionally, redirect or clear form fields here
});
