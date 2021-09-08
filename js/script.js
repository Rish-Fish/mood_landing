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
  menuLeft.classList.add('menu-left-active');
  mobileMenuWrap.classList.add('active');
  faBarsToggle.classList.add('disable');
  faTimesToggle.classList.add('active');
  document.body.classList.add('scroll-disable');
  scrollDisableGoToTop.classList.add('disable');
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

// cкрытие меню по клику на Esc
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
      menuLeft.classList.remove('menu-left-active');
      mobileMenuWrap.classList.remove('active');
      faTimesToggle.classList.remove('active');
      faBarsToggle.classList.remove('disable');
      document.body.classList.remove('scroll-disable');
      scrollDisableGoToTop.classList.remove('disable');
  }
  });