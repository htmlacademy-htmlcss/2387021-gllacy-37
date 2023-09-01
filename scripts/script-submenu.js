let catalog = document.querySelector('.nav-menu__item-catalog');
let catalogButton = document.querySelector('.nav-menu__link-catalog');
console.log('hi');
catalogButton.onclick = function(evt) {
  evt.preventDefault();
  catalog.classList.toggle('has-submenu');
}
