// Function to handle the login process
function login() {
    // Get user inputs
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Perform basic validation (you may want to enhance this)
    if (email.trim() === "" || password.trim() === "") {
        alert("Please enter both email and password.");
        return;
    }

    // Perform login logic with AJAX request
    fetch('your_authentication_endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle the response from the server
        if (data.success) {
            alert("Login successful!");
            // Redirect or perform additional actions after successful login
        } else {
            alert("Login failed. Please check your credentials.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred during login. Please try again.");
    });
}
function register() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;

    if (email.trim() === "" || password.trim() === "" || repassword.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== repassword) {
        alert("Passwords do not match. Please re-enter your password.");
        return;
    }

    // Perform registration logic here (replace this with your actual registration code)
    alert("Registration successful!");
}