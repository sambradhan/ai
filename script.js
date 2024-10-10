// script.js

document.addEventListener('DOMContentLoaded', () => {
    const signupBtn = document.getElementById('signup-btn');
    const loginBtn = document.getElementById('login-btn');
    const authForms = document.getElementById('auth-forms');
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const switchToLogin = document.getElementById('switch-to-login');
    const switchToSignup = document.getElementById('switch-to-signup');
    const dashboard = document.getElementById('dashboard');
    const profile = document.getElementById('profile');
    const logoutBtn = document.getElementById('logout-btn');

    // Show Sign Up Form
    signupBtn.addEventListener('click', () => {
        authForms.classList.remove('hidden');
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });

    // Show Login Form
    loginBtn.addEventListener('click', () => {
        authForms.classList.remove('hidden');
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    });

    // Switch to Login from Sign Up
    switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });

    // Switch to Sign Up from Login
    switchToSignup.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    });

    // Handle Sign Up Form Submission
    signupForm.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        // Implement sign-up logic (e.g., send data to backend)
        alert('Sign Up functionality to be implemented.');
    });

    // Handle Login Form Submission
    loginForm.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        // Implement login logic (e.g., authenticate with backend)
        // On successful login, show dashboard
        authForms.classList.add('hidden');
        dashboard.classList.remove('hidden');
        // Optionally, set user information
        document.getElementById('user-name').textContent = 'John Doe';
    });

    // Handle Logout
    logoutBtn.addEventListener('click', () => {
        // Implement logout logic (e.g., clear session)
        dashboard.classList.add('hidden');
        profile.classList.add('hidden');
        authForms.classList.add('hidden');
        signupForm.classList.add('hidden');
        loginForm.classList.add('hidden');
        // Optionally, redirect to home or show login/signup buttons
        alert('Logged out successfully.');
    });

    // Initialize Socket.io for Real-Time Messaging
    const socket = io();

    const messagesContainer = document.getElementById('messages-container');
    const messageForm = document.getElementById('message-form');
    const messageInput = document.getElementById('message-input');

    // Receive messages from server
    socket.on('receiveMessage', (msg) => {
        const messageElement = document.createElement('div');
        messageElement.textContent = msg;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    });

    // Send message to server
    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = messageInput.value.trim();
        if (message) {
            socket.emit('sendMessage', message);
            messageInput.value = '';
        }
    });
});
mkdir ai-workspace
cd ai-workspace
npm init -y
npm install express socket.io mongoose bcrypt jsonwebtoken
