document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('passwordForm');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const message = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (password === confirmPassword) {
            showMessage('Passwords match!', 'valid');
        } else {
            showMessage('Passwords do not match.', 'invalid');
        }
    });

    function showMessage(msg, className) {
        message.textContent = msg;
        message.className = className;
    }
});
