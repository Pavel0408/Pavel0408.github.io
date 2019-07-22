var button = document.querySelector('.main-header__button-close');
var menu = document.querySelector('.main-header__nav');
var logo = document.querySelector('.energy-logo ')


menu.classList.remove('main-header__nav--nojs');
button.classList.remove('main-header__button-close--nojs');


button.addEventListener('click', function () {
  if (button.classList.contains('main-header__button-close--closed')) {
    button.classList.remove('main-header__button-close--closed');
    menu.classList.remove('main-header__nav--closed');

  } else {
    button.classList.add('main-header__button-close--closed');
    menu.classList.add('main-header__nav--closed');
  }
});
