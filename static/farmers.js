window.onload = function() {
    const farmers = JSON.parse(localStorage.getItem('farmers')) || [];
    const farmerList = document.getElementById('farmerList');

    farmers.forEach(farmer => {
        const card = document.createElement('div');
        card.className = 'farmer-card';
        card.innerHTML = `
            <img src="${farmer.image}" alt="${farmer.name}" class="farmer-photo">
            <div class="farmer-info">
                <h2>${farmer.name}</h2>
                <p class="rating">Rating: ★★★★★</p>
                <p class="product">Product: ${farmer.product}</p>
                <p class="description">${farmer.description}</p>
                <p class="price">Price: $${farmer.price}</p>
                <form action="farmer1_buy.html">
                    <button class="buy-button">Buy Now</button>
                </form>
            </div>
        `;
        farmerList.appendChild(card);
    });
};
