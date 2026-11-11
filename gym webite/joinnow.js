
let form = document.getElementById("join-form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("fullname").value;
    let age = document.getElementById("age").value;
    let message = document.getElementById("message");

    if (age < 16 || age > 100) {
        message.innerHTML = "Please enter a valid age.";
        message.style.color = "red";
    }
    else {
        message.innerHTML = "Thank you " + name +
        "! Your membership request has been received.";
        message.style.color = "#f97316";

        form.reset();
    }

});
