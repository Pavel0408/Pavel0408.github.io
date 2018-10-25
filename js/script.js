var button = document.querySelector('.energy-logo__menu-close');
var menu = document.querySelector('.main-header__nav');
var logo = document.querySelector('.energy-logo ')

menu.classList.remove('menu-close__menu-nojs');
button.classList.remove('menu-close__button-nojs');


button.addEventListener('click', function () {
if (button.classList.contains('menu-close__button-closed')) {
  button.classList.remove('menu-close__button-closed');
  menu.classList.remove('menu-close__closed');
  logo.classList.remove('energy-logo');
} else {
  button.classList.add('menu-close__button-closed');
  menu.classList.add('menu-close__closed');
  logo.classList.add('energy-logo');
}
});
