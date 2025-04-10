function OpenSidebar() {
    const div = document.querySelector(".side-bar");
    div.style.display = (div.style.display === "none" || div.style.display === "")? "block" : "none";
}
