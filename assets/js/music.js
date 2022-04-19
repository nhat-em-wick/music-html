const $ = document.querySelector.bind(document)

const menuHamburger = $('.menu-hamburger')
const menuMobile = $('.menu-mobile .sidebar-menu')
const closeMenu = $('.menu-mobile--close')
const overlay = $('.menu-overlay')

function toggleMenu() {
  menuMobile.classList.toggle('active')
  overlay.classList.toggle('active')
}

menuHamburger.addEventListener('click', toggleMenu)
closeMenu.addEventListener('click', toggleMenu)