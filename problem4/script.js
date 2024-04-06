const registrationForm = document.getElementById('registration-form');
const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let isValid = true;

    if (username.length < 6) {
        usernameError.textContent = 'Username must be at least 6 characters long.';
        isValid = false;
    } else {
        usernameError.textContent = '';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
        passwordError.textContent = 'Password must be at least 8 characters and contain at least one digit.';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (isValid) {
        // 
        alert('You are registered!');
    }
});
