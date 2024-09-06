document.getElementById('requirementForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    const buyerName = document.getElementById('buyerName').value;
    const productRequired = document.getElementById('productRequired').value;
    const quantity = document.getElementById('quantity').value;
    const state = document.getElementById('state').value;
    const district = document.getElementById('district').value;

    // Create an object to store the buyer's information
    const buyerData = {
        buyerName,
        productRequired,
        quantity,
        state,
        district
    };

    // Save the data to localStorage
    let buyersList = JSON.parse(localStorage.getItem('buyersList')) || [];
    buyersList.push(buyerData);
    localStorage.setItem('buyersList', JSON.stringify(buyersList));

    // Redirect to buyers.html
    window.location.href = 'buyers.html';
});
