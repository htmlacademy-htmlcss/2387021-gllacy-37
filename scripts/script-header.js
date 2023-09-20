let catalog = document.querySelector('.nav-menu__item-catalog');
let catalogButton = document.querySelector('.nav-menu__link-catalog');

catalogButton.onclick = function (evt) {
  evt.preventDefault();
  catalog.classList.toggle('has-submenu');
  search.classList.remove('header-menu__search-on');
  cabinet.classList.remove('header-menu__cabinet-on');
  basket.classList.remove('header-menu__basket-on')
}

let search = document.querySelector('.header-menu__search-window');
let searchButton = document.querySelector('.header-menu__link-search');

searchButton.onclick = function (evt) {
  evt.preventDefault();
  search.classList.toggle('header-menu__search-on');
  cabinet.classList.remove('header-menu__cabinet-on');
  basket.classList.remove('header-menu__basket-on');
  catalog.classList.remove('has-submenu');
}

let input = document.querySelector('.header-menu__input');
let resetButton = document.querySelector('.header-menu__search-reset');

input.oninput = () => {
  if (input.value !== '') {
    resetButton.classList.add('header-menu__search-reset-on');
  } else {
    resetButton.classList.remove('header-menu__search-reset-on');
  }
  resetButton.onclick = () => {
    resetButton.classList.remove('header-menu__search-reset-on');
  }
}

let cabinet = document.querySelector('.header-menu__cabinet-window');
let cabinetButton = document.querySelector('.header-menu__link-cabinet');

cabinetButton.onclick = function (evt) {
  evt.preventDefault();
  cabinet.classList.toggle('header-menu__cabinet-on');
  search.classList.remove('header-menu__search-on');
  basket.classList.remove('header-menu__basket-on');
  catalog.classList.remove('has-submenu');
}

let basket = document.querySelector('.header-menu__basket-window');
let basketButton = document.querySelector('.header-menu__link-basket')

basketButton.onclick = function (evt) {
  evt.preventDefault();
  basket.classList.toggle('header-menu__basket-on');
  cabinet.classList.remove('header-menu__cabinet-on');
  search.classList.remove('header-menu__search-on');
  catalog.classList.remove('has-submenu');
}

let closeButtons = Array.from(document.querySelectorAll('.basket-window__close-button'));
let basketList = document.querySelector('.basket-window__list');
let basketItems = Array.from(document.querySelectorAll('.basket-window__item'));

// let arr = [basketItems[0], basketItems[1]];
let total = document.querySelector('.basket-window__total-cost');
let costs = Array.from(document.querySelectorAll('.basket-window__item-cost-value'));
// let countElementsArr = arr.length;

closeButtons[0].onclick = () => {
  basketList.removeChild(basketItems[0]);
  total.textContent = total - costs[0];
  console.log(countElementsArr);
  if (basketItems.length === 0) {
    (basket.classList.add('header-menu__basket-empty'));
  }
}

closeButtons[1].onclick = () => {
  basketList.removeChild(basketItems[1]);
  total.textContent = total - costs[1];
  if (basketItems[0] === false && basketItems[1] === false) {
    (basket.classList.add('header-menu__basket-empty'));
  }
}
