//const apiUrl = 'https://api.example.com/data'; // Replace with  API endpoint 

// Function to handle login
function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Placeholder logic for login
    if (email && password) {
        alert("Login successful!");
        // I can add code to redirect to another page or perform additional actions
    } else {
        alert("Invalid login credentials. Please try again.");
    }
}

// Function to validate the contact form
function validateContactForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Placeholder validation logic
    if (name && email && message) {
        alert("Contact form submitted successfully!");
        // I can add AJAX request or other actions here
        return true; // Form submission allowed
    } else {
        alert("Please fill in all fields in the contact form.");
        return false; // Prevent form submission
    }
}

// Example of using a loop
function iterateOverElements() {
    var elements = document.querySelectorAll('.example-class');

    for (var i = 0; i < elements.length; i++) {
        // Do something with each element
        elements[i].style.color = 'red';
    }
}

// Example of using AJAX with vanilla JavaScript
function fetchDataWithAjax() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            // Process the data
            console.log(data);
        }
    };

    xhr.open('GET', apiUrl, true);
    xhr.send();
}

// Example of using AJAX with jQuery (Optional)
function fetchDataWithJQuery() {
    $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            // Process the data
            console.log(data);
        },
        error: function (error) {
            console.log("Error fetching data: " + error);
        }
    });
}
