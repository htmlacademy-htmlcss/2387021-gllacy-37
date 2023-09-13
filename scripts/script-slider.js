let sliders = Array.from(document.querySelectorAll('.slider__item'));
let prevButtons = Array.from(document.querySelectorAll('.slider__button-prev'));
let nextButtons = Array.from(document.querySelectorAll('.slider__button-next'));
let sliderDots = Array.from(document.querySelectorAll('.slider__pagination-item'));

let sliderShow = (index) => {
  for (let i = 0; i < sliders.length; i++) {
    sliders[i].classList.remove('slider__item--active');
  }
  sliders[index].classList.add('slider__item--active');

    if (index === 0) {
      document.body.style.backgroundColor = '#feafc3';
    } else if (index === 1) {
      document.body.style.backgroundColor = '#69a9ff';
    } else if (index === 2) {
      document.body.style.backgroundColor = '#ffc850';
    }

  for (let i = 0; o < sliderDots.length; i++) {
    sliderDots[i].classList.remove('slider__pagination-item--active');
  }
  sliderDots[index].classList.add('slider__pagination-item--active');
}

let prevSlide = () => {
  let currentIndex = sliders.findIndex(slider => slider.classList.contains('slider__item--active'));
  let newIndex  = currentIndex - 1 ;
  if (newIndex < 0) {
    newIndex = sliders.length - 1;
  }
  sliderShow(newIndex);
}

let nextSlide = () => {
  let currentIndex = sliders.findIndex(slide => slide.classList.contains('slider__item--active'));
  let newIndex = currentIndex + 1;
  if (newIndex == sliders.length) {
    newIndex = 0;
  }
  sliderShow(newIndex);
}

for (let nextButton of nextButtons) {
   nextButton.addEventListener('click', nextSlide);
}

for (let prevButton of prevButtons) {
  prevButton.addEventListener('click', prevSlide);
}
