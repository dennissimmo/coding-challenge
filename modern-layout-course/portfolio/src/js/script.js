const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const menuItems = document.querySelectorAll(".nav-menu__list-item");

if (hamburger) {
    hamburger.addEventListener('click', (e) => {
        console.log(e);
        console.log(navMenu);
        navMenu.classList.toggle("nav-menu_active");
        hamburger.classList.toggle("active");
    });
    console.log(hamburger);

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            navMenu.classList.toggle("nav-menu_active");
            hamburger.classList.toggle("active");
        });
    })
}