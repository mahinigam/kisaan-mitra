document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('send-btn');
    const messageInput = document.getElementById('message');
    const chatHistory = document.querySelector('.chat-history');
    const negotiationForm = document.getElementById('negotiation-form');
    
    sendButton.addEventListener('click', () => {
        const messageText = messageInput.value.trim();
        if (messageText) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', 'seller-message');
            messageDiv.innerHTML = `<p><strong>Seller:</strong> ${messageText}</p>`;
            chatHistory.appendChild(messageDiv);
            messageInput.value = '';
            chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll to the bottom
        }
    });
    
    negotiationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const quantity = document.getElementById('quantity').value;
        const price = document.getElementById('price').value;
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'seller-message');
        messageDiv.innerHTML = `<p><strong>Seller:</strong> I offer ${quantity} for ${price}. Is this acceptable?</p>`;
        chatHistory.appendChild(messageDiv);
        chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll to the bottom
    });
});
