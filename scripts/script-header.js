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
