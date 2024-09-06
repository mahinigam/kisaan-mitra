document.addEventListener('DOMContentLoaded', () => {
    // Load data from localStorage
    const buyersList = JSON.parse(localStorage.getItem('buyersList')) || [];
    const buyersListContainer = document.getElementById('buyersList');

    // Function to create a buyer card
    function createBuyerCard(buyer) {
        const buyerCard = document.createElement('div');
        buyerCard.className = 'buyer-card';

        buyerCard.innerHTML = `
            <h2>${buyer.buyerName}</h2>
            <p><strong>Product Required:</strong> ${buyer.productRequired}</p>
            <p><strong>Quantity:</strong> ${buyer.quantity} kg</p>
            <p><strong>State:</strong> ${buyer.state}</p>
            <p><strong>District:</strong> ${buyer.district}</p>
            <form action="connect.html" method="GET">
                <input type="hidden" name="buyerName" value="${buyer.buyerName}">
                <input type="hidden" name="productRequired" value="${buyer.productRequired}">
                <input type="hidden" name="quantity" value="${buyer.quantity}">
                <input type="hidden" name="state" value="${buyer.state}">
                <input type="hidden" name="district" value="${buyer.district}">
                <button class="connect-btn" type="submit">Connect</button>
            </form>
        `;

        return buyerCard;
    }

    // Iterate over the buyers and create buyer cards
    buyersList.forEach(buyer => {
        const buyerCard = createBuyerCard(buyer);
        buyersListContainer.appendChild(buyerCard);
    });
});
