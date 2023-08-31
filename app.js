const navToggle = document.getElementById('toggle');
const menuSection = document.getElementById('menu-section');

navToggle.addEventListener('click', () => {
    if (menuSection.style.right === '-200px') {
        menuSection.style.right = "20px";
    } else {
        menuSection.style.right = "-200px";
    }
})

