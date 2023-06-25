const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const userList = document.querySelector('.user-list');

const mapImageTag = document.querySelector('.map__wrapper > picture');
const mapGoogle = document.querySelector('.map__google');

// mobile menu
navMain.classList.remove('main-nav--nojs');
userList.classList.remove('user-list--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.replace('main-nav--closed', 'main-nav--opened');
  } else {
    navMain.classList.replace('main-nav--opened', 'main-nav--closed');
  }
});

// map
mapImageTag.remove();
mapGoogle.classList.remove('map__google--nojs');
