const navToggler = document.getElementById('navToggler');
const navMenu = document.getElementById('navigation');
const navMenuWrapper= document.getElementById('headerTopLine');

allEventListners();
defaultForNav();

function defaultForNav() {
  navMenu.classList.remove('header__nav_no-js');
  navMenuWrapper.classList.remove('header__open-nav');
}

function allEventListners() {
  navToggler.addEventListener('click', togglerClick);
}

function togglerClick() {
  navToggler.classList.toggle('header__toggler-open');
  navMenu.classList.toggle('open');
  navMenuWrapper.classList.toggle('header__open-nav');
}
