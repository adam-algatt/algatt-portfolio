const menu = document.querySelector('.menu');
const toggle = document.querySelector('.toggle');
const navItems = document.querySelector('.nav-item');

// Hamburger Toggle Functionality
function toggleMenu() {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        toggle.querySelector('a').innerHTML = `<i class='fa fa-bars'></i>`;
    } else {
        menu.classList.add('active');

        //change hamburger icon to close icon
        toggle.querySelector('a').innerHTML = `<i class='fa fa-close'></i>`
    }
}

toggle.addEventListener('click', toggleMenu, false);

// submenu activation
function toggleNavItems() {
    if(this.classList.contains('submenu-active')) {
        this.classList.remove('submenu-active');
    } else if (menu.querySelector('.submenu-active')){
        menu.querySelector('submenu-active').classList.remove('submenu-active');
        this.classList.add('submenu-active')
    } else {
        this.classList.add('submenu-active')
    }
}

function closeSubmenu(e) { 
    if(menu.querySelector('.submenu-active')) {
        let active = menu
        .querySelector('submenu-active')
        .contains(e.target);

        if (!active && menu.querySelector('.submenu-active')) {
            menu.querySelector('submenu-active').classList.remove('submenu-active');
        }
    }
 }

// nav items event listener
(function() {
    // find all elements with class of 'nav-item' 
let menus = document.querySelectorAll('.nav-item');
// push to array
let submenus = [...menus];
// if el at arr index has class 'submenu' and gets clicked 
//toggle the sub menu upon click
submenus.forEach(sub => {
    if (sub.querySelector('.submenu')) {
        sub.addEventListener('click', toggleNavItems, false); 
        sub.addEventListener('keypress', toggleNavItems, false);
    }
})
})
()

document.addEventListener('click', closeSubmenu, false);