AOS.init();


// Mobile menu
let menuLeft = document.querySelector('.menu-left'); // накинуть сюда класс .menu-left-active 
let mobileMenuWrap = document.querySelector('.mobile-menu-wrap'); // накинуть .active (display:block)
let faBarsToggle = document.querySelector('.fa-bars'); // накинуть сюда .disable (display:none)
let faTimesToggle = document.querySelector('.fa-times'); //накинуть .active (display:block)

faBarsToggle.addEventListener('click', function () {
  menuLeft.classList.toggle('menu-left-active');
  mobileMenuWrap.classList.toggle('active');
  faBarsToggle.classList.toggle('disable');
  faTimesToggle.classList.toggle('active');
});

faTimesToggle.addEventListener('click', function () {
  menuLeft.classList.remove('menu-left-active');
  mobileMenuWrap.classList.remove('active');
  faTimesToggle.classList.remove('active');
  faBarsToggle.classList.remove('disable');
});