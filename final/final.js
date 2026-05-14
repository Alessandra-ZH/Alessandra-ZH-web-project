/*LIVE COUNTER*/

let counter = document.getElementById("counter");

let current = 5000;

counter.textContent = current.toLocaleString();

    setInterval(() => {
        current++;

        counter.textContent = current.toLocaleString();
    }, 5000); 

/*READ MORE TOGGLE*/

function toggleText(button) {
    let text = button.nextElementSibling;

    if(text.style.display === "block") {
        text.style.display = "none";
        button.textContent = "Read More";
    } else {
        text.style.display = "block";
        button.textContent = "Read Less"
    }
}

/*PRODUCT SEARCH BAR*/

document.addEventListener("DOMContentLoaded", function () {

    const search = document.getElementById("productSearch");
    const table = document.getElementById("productTable");

    if (!search || !table) return;

    search.addEventListener("keyup", function () {

        let searchText = search.value.toLowerCase();
        let rows = table.querySelectorAll("tr");

        for (let i = 1; i < rows.length; i++) {

            let productName = rows[i].cells[0].textContent.toLowerCase();
            let productDescription = rows[i].cells[1].textContent.toLowerCase();

            let matchesSearch =
            productName.includes(searchText) ||
            productDescription.includes(searchText);

            if (matchesSearch) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    });

});

/*NEWSLETTER SUBSCRIBE*/

document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    document.getElementById("subscribe-message").textContent =
    "Thank you for subscribing to our newsletter!";
});