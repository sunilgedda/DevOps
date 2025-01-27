const form = document.getElementById('registrationForm');
    const formContainer = document.getElementById('formContainer');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            formContainer.classList.remove('active');
            successMessage.classList.add('active');
        }
    });

    function validateForm() {
        clearMessages();
        let valid = true;

        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        if (usernameInput.value.trim() === '') {
            showError(usernameInput, 'Username is required');
            valid = false;
        }


        if (!isValidEmail(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email');
            valid = false;
        }

        if (!isValidPassword(passwordInput.value)) {
            showError(passwordInput, 'Password must be at least 6 characters long, include @, a number, an uppercase letter, and a special character.');
            valid = false;
        }

        return valid;
    }

    function showError(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('.error-message');
        small.innerText = message;
        input.style.borderColor = 'red';
    }

    function clearMessages() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.innerText = '');
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => input.style.borderColor = '');
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function isValidPassword(password) {
        const re = /^(?=.*[A-Z])(?=.*[@])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
        return re.test(password);
    }

