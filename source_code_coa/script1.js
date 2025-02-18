// script.js

// Show login or sign-up form based on user interaction
function showLoginForm() {
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
  }
  
  function showSignupForm() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
  }
  
  // Handle Sign-up
  document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (validateSignup(username, email, password)) {
      localStorage.setItem('user', JSON.stringify({ username, password }));
      alert('Sign-up successful! Please log in.');
      showLoginForm();
    } else {
      displayError('Please fill all fields correctly.');
    }
  });
  
  // Validate sign-up input
  function validateSignup(username, email, password) {
    return username.trim() !== '' && email.includes('@') && password.length >= 6;
  }
  
  // Handle Login
  document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const loginUsername = document.getElementById('login-username').value;
    const loginPassword = document.getElementById('login-password').value;
    const storedUser = JSON.parse(localStorage.getItem('user'));
  
    if (storedUser && storedUser.username === loginUsername && storedUser.password === loginPassword) {
      switchToCalculator();
    } else {
      displayLoginError('Invalid username or password.');
    }
  });
  
  // Switch to calculator page
  function switchToCalculator() {
    document.getElementById('auth-page').classList.add('hidden');
    document.getElementById('calculator-page').classList.remove('hidden');
  }
  
  // Logout
  function logout() {
    alert('Logged out successfully!');
    location.reload();
  }
  
  // Display errors
  function displayError(message) {
    document.getElementById('error-message').textContent = message;
  }
  
  function displayLoginError(message) {
    document.getElementById('login-error-message').textContent = message;
  }
  
  // Binary operations and conversions (same as previous logic)
  function binaryToDecimal(binary) {
    return parseInt(binary, 2);
  }
  
  function decimalToBinary(decimal) {
    return (decimal >>> 0).toString(2);
  }
  
  function performOperation(operation) {
    const binary1 = document.getElementById('binary1').value;
    const binary2 = document.getElementById('binary2').value;
  
    if (!isBinary(binary1) || (binary2 && !isBinary(binary2))) {
      displayResult('Invalid binary input.');
      return;
    }
  
    const num1 = binaryToDecimal(binary1);
    const num2 = binary2 ? binaryToDecimal(binary2) : 0;
    let result;
  
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 === 0) {
          displayResult('Error: Division by zero.');
          return;
        }
        result = Math.floor(num1 / num2);
        break;
    }
  
    displayResult(decimalToBinary(result));
  }
  
  function isBinary(str) {
    return /^[01]+$/.test(str);
  }
  
  function displayResult(result) {
    document.getElementById('output').textContent = result;
  }
  
  function convertToBinary() {
    const input = document.getElementById('binary1').value;
  
    if (isNaN(input) || input === '') {
      displayResult('Enter a valid decimal number.');
      return;
    }
  
    displayResult(decimalToBinary(parseInt(input, 10)));
  }
  
  function convertToDecimal() {
    const input = document.getElementById('binary1').value;
  
    if (!isBinary(input)) {
      displayResult('Enter a valid binary number.');
      return;
    }
  
    displayResult(binaryToDecimal(input));
  }
  
  // Scroll to Bottom Functionality
  window.onscroll = function() {
    const scrollButton = document.getElementById('scroll-button');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.display = "block"; // Show button after scrolling down
    } else {
      scrollButton.style.display = "none"; // Hide button when at the top
    }
  };
  
  function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
  
  