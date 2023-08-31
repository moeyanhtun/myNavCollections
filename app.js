const navToggle = document.getElementById('toggle');
const menuSection = document.getElementById('menu-section');
const searchbtn = document.getElementById('search__icon');
const searchBar = document.getElementById('search-bar');



searchbtn.addEventListener('click', () => {
    searchBar.classList.toggle('show-search');
    menuSection.classList.remove('show-menu');
});

navToggle.addEventListener('click', () => {
    menuSection.classList.toggle('show-menu');
    searchBar.classList.remove('show-search');
});