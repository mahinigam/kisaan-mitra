// JavaScript for Sign-Up Form Validation

// Function to validate the form
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Get form field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const gender = document.getElementById('gender').value;
    const state = document.getElementById('state').value.trim();
    const district = document.getElementById('district').value.trim();
    const pincode = document.getElementById('pincode').value.trim();
    const identity = document.getElementById('identity').value;

    // Validate each field
    if (!validateName(name)) {
        alert('Please enter a valid name.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!validatePassword(password)) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    if (gender === "") {
        alert('Please select your gender.');
        return;
    }

    if (!validateState(state)) {
        alert('Please enter a valid state.');
        return;
    }

    if (!validateDistrict(district)) {
        alert('Please enter a valid district.');
        return;
    }

    if (!validatePincode(pincode)) {
        alert('Please enter a valid 6-digit pincode.');
        return;
    }

    if (identity === "") {
        alert('Please select a verification identity.');
        return;
    }

    // If all validations pass, submit the form
    alert('Form submitted successfully!');
    // You can proceed to submit the form data using AJAX or a form action.
    window.location.href='index.html'; // Uncomment this line if you want to submit the form.
}

// Helper functions for validation
function validateName(name) {
    return /^[a-zA-Z\s]+$/.test(name); // Name should only contain letters and spaces
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    return password.length >= 6; // Password must be at least 6 characters long
}

function validateState(state) {
    return /^[a-zA-Z\s]+$/.test(state); // State should only contain letters and spaces
}

function validateDistrict(district) {
    return /^[a-zA-Z\s]+$/.test(district); // District should only contain letters and spaces
}

function validatePincode(pincode) {
    return /^\d{6}$/.test(pincode); // Pincode must be exactly 6 digits
}

function setUserType(userType) {
    document.getElementById('user_type').value = userType;
    document.getElementById('signupForm').submit(); // Submit the form
}

// Attach the validation function to the form submission event
document.querySelector('form').addEventListener('submit', validateForm);