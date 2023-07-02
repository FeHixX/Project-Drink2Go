const nav = document.querySelector('.nav');
const userList = document.querySelector('.user-list');
const siteList = document.querySelector('.site-list');
const toggle = document.querySelector('.toggle');

nav.classList.remove('nav--nojs');
userList.classList.remove('user-list--nojs');
siteList.classList.remove('site-list--nojs');

toggle.addEventListener('click', () => {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.replace('nav--closed', 'nav--opened');
    toggle.classList.replace('toggle--closed', 'toggle--opened');
  } else {
    nav.classList.replace('nav--opened', 'nav--closed');
    toggle.classList.replace('toggle--opened', 'toggle--closed');
  }
})
