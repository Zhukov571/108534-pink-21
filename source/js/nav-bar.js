const navToggler = document.getElementById('navToggler');
const navMenu = document.getElementById('navigation');
const navMenuWrapper= document.getElementById('headerTopLine');

allEventListners();

function allEventListners() {
  navToggler.addEventListener('click', togglerClick);
}

function togglerClick() {
  navToggler.classList.toggle('header__toggler-open');
  navMenu.classList.toggle('open');
  navMenuWrapper.classList.toggle('header__open-nav');
}
