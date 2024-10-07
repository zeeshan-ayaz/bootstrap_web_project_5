// JavaScript file for interactivity

// Function to display an alert when the "Explore More" button is clicked
function exploreMore() {
    alert("Welcome to Interactive Responsive Web!");
}

// Function to validate the contact form
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all required fields.");
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}

// Function to show details when a service is clicked
function showServiceDetails(serviceName) {
    alert("You have selected: " + serviceName);
}


// Function to display the current year in the footer
document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
});
