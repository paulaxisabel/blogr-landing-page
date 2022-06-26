AOS.init()
const hamburger = document.querySelector('.header__hamburger'),
  menu = document.querySelector('.header__links')
hamburger.addEventListener('click', function() {
  if (menu.classList.contains('slideout')) {
    menu.classList.remove('slideout')
    menu.classList.add('slidein')
  } else if (menu.classList.contains('slidein')) {
    menu.classList.remove('slidein')
    menu.classList.add('slideout')
  } else {
    menu.classList.add('slidein')
  }
  hamburger.classList.toggle('open')
})