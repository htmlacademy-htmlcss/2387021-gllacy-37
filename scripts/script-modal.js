let closeButton = document.querySelector('.modal__button-close');
let modalButton = document.querySelector('.contacts__button');
let modalContainer = document.querySelector('.modal-container');

modalButton.onclick = () => modalContainer.classList.add('modal-container-open');

closeButton.onclick = () => modalContainer.classList.remove('modal-container-open');
