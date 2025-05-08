document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("log-button").addEventListener("click", function() {
        const contentWrapper = document.querySelector(".content-wrapper");
        contentWrapper.classList.add("fade-out");

        setTimeout(function() {
            window.location.href = "Pages/Dashboard/Dashboard.html";
        }, 500);
    });
});
