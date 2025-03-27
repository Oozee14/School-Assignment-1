document.addEventListener("DOMContentLoaded", function() {
    let elements = document.getElementsByClassName("nav-button");

    Array.from(elements).forEach(function(element) {
        element.addEventListener("click", function() {
            setTimeout(function() {
                window.location.href = "../index.html";
            }, 500);
        });
    });
});
