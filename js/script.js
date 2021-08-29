AOS.init();


// Mobile menu
let menuLeft = document.querySelector('.menu-left'); // накинуть сюда класс .menu-left-active 
let mobileMenuWrap = document.querySelector('.mobile-menu-wrap'); // накинуть .active (display:block)
let faBarsToggle = document.querySelector('.fa-bars'); // накинуть сюда .disable (display:none)
let faTimesToggle = document.querySelector('.fa-times'); //накинуть .active (display:block)
let scrollDisable = document.getElementsByTagName('body'); //накинуть сюда .scroll-disable
let scrollDisableGoToTop = document.querySelector('.to_top_container'); //накинуть сюда .disable

let navItemPush = document.querySelectorAll('.nav-item-push'); // накинуть на li .nav-item

// появление меню по нажатию на бургер
faBarsToggle.addEventListener('click', function () {
  menuLeft.classList.toggle('menu-left-active');
  mobileMenuWrap.classList.toggle('active');
  faBarsToggle.classList.toggle('disable');
  faTimesToggle.classList.toggle('active');
  document.body.classList.add('scroll-disable');
  scrollDisableGoToTop.classList.toggle('disable');
});

// скрытие меню по нажатию на крестик
faTimesToggle.addEventListener('click', function () {
  menuLeft.classList.remove('menu-left-active');
  mobileMenuWrap.classList.remove('active');
  faTimesToggle.classList.remove('active');
  faBarsToggle.classList.remove('disable');
  document.body.classList.remove('scroll-disable');
  scrollDisableGoToTop.classList.remove('disable');
});

// скрытие меню по нажатию на разделы сайта
navItemPush.forEach(function (navItemPush) {
  navItemPush.addEventListener('click', function () {
    menuLeft.classList.remove('menu-left-active');
    mobileMenuWrap.classList.remove('active');
    faTimesToggle.classList.remove('active');
    faBarsToggle.classList.remove('disable');
    document.body.classList.remove('scroll-disable');
    scrollDisableGoToTop.classList.remove('disable');
  })
});