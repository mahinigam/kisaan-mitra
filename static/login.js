// login.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    const form = document.querySelector('form');
    
    // Add event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Basic validation
        if (validateForm(email, password)) {
            //  just show an alert
            alert('Login successful!');
        }
    });

    /**
     * Validate the form fields.
     * @param {string} email - The email address.
     * @param {string} password - The password.
     * @returns {boolean} - True if validation passes, false otherwise.
     */
    function validateForm(email, password) {
        if (!email || !password) {
            alert('Please fill in all fields.');
            return false;
        }

        // Basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        // Password length validation (at least 6 characters)
        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return false;
        }

        return true;
    }
});