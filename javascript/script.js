document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;

    document.getElementById("newsletterMessage").textContent =
    "Thank you for subscribing! All travel updates will be sent to " + email + ".";
});