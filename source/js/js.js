;(function () {
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
}());

;(function () {
/*Modal*/
!function (e) { "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function (e) { for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t;)++n; return Boolean(o[n]) }), "function" != typeof e.closest && (e.closest = function (e) { for (var t = this; t && 1 === t.nodeType;) { if (t.matches(e)) return t; t = t.parentNode } return null }) }(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function () {
  var modalButtons = document.querySelectorAll('.js-open-modal');
  var	closeButtons = document.querySelectorAll('.js-modal-close');

modalButtons.forEach(function (item) {

  item.addEventListener('click', function (e) {
    e.preventDefault();
    var modalId = this.getAttribute('data-modal'),
      modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
    modalElem.classList.add('active');
  }); // end click

}); // end foreach

closeButtons.forEach(function (item) {

  item.addEventListener('click', function (e) {
    var parentModal = this.closest('.modal');

    parentModal.classList.remove('active');
  });

}); // end foreach

document.body.addEventListener('keyup', function (e) {
  var key = e.keyCode;

  if (key == 27) {

    document.querySelector('.modal.active').classList.remove('active');
  };
}, false);

}); // end ready
/*End Modal*/
}());
