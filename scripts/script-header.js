let catalog = document.querySelector('.nav-menu__item-catalog');
let catalogButton = document.querySelector('.nav-menu__link-catalog');

catalogButton.onclick = function(evt) {
  evt.preventDefault();
  catalog.classList.toggle('has-submenu');
}

let search = document.querySelector('.header-menu__search-window');
let searchButton = document.querySelector('.header-menu__link-search');

searchButton.onclick = function(evt) {
  evt.preventDefault();
  search.classList.toggle('header-menu__search-on');
}

let cabinet = document.querySelector('.header-menu__cabinet-window');
let cabinetButton = document.querySelector('.header-menu__link-cabinet');

cabinetButton.onclick = function(evt) {
  evt.preventDefault();
  cabinet.classList.toggle('header-menu__cabinet-on');
}

let basket = document.querySelector('.header-menu__basket-window');
let basketButton = document.querySelector('.header-menu__link-basket')

basketButton.onclick = function(evt) {
  evt.preventDefault();
  basket.classList.toggle('header-menu__basket-on');
}
