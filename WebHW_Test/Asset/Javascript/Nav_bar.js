fetch('../../Pages/Navbar.html')
.then(res => res.text())
.then(html => {
    document.getElementById('navbar').innerHTML = html;
});

fetch('../../Pages/Sidebar.html')
.then(res => res.text())
.then(html => {
    document.getElementById('side-bar').innerHTML = html;
});
function OpenSidebar() {
    const div = document.querySelector('.side-bar');
    div.style.display = (div.style.display === "none" || div.style.display === "")? "block" : "none";
};