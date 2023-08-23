


// Слайдер сделанный через DisplayNon реализуется через 2 кнопки или по нажатию на сам слайдер, можно сделать перелистование в 2 направление.
// Также можно анимировать слайдер.
const slider = document.querySelector('.slider-advantages');
const sliderItems = Array.from(slider.children);

const sliderControl = document.querySelector('.slider-controls');
const sliderButton = Array.from(sliderControl.children);
// let buttons = sliderControl.querySelector('slider-button');


sliderItems.forEach(function (slide, index){
  // скрываем все слайды, кроме первого
  if (index !== 0) {
    slide.classList.add('slider-none');
  }

  // добавляем индексы
  slide.dataset.index = index;

  //Добавляем data атрибут active для первого / активного слайда
  sliderItems[0].setAttribute('data-active', '');

  // Клик по слайдам
  // slide.addEventListener('click', function(){
  //   showNextSlide('next');
  // });
})

sliderButton.forEach(function (button, index){
  button.dataset.index = index;
  sliderButton[0].setAttribute('data-current', '');

  button.addEventListener('click', function(){
    showNextSlide('next');
    showNextButton('right');
  })
})


function showNextButton(way) {

  const currentButton = sliderControl.querySelector('[data-current]');
  const currentButtonIndex = +currentButton.dataset.index;
  currentButton.classList.remove('slider-controls-current');
  currentButton.removeAttribute('data-current');

  let activeButton;
  if (way === 'right') {
    activeButton = currentButtonIndex + 1 === sliderButton.length ? 0 : currentButtonIndex + 1;
  } else if (way === 'left') {
    activeButton = currentButtonIndex === 0 ? sliderButton.length - 1 : currentButtonIndex - 1;
  }


  const nextButton = sliderControl.querySelector(`[data-index ="${activeButton}"]`);
  nextButton.classList.add('slider-controls-current');
  nextButton.setAttribute('data-current', '');
}

function showNextSlide(direction) {
 // скрывем текущий слайд
 const currentSlide = slider.querySelector('[data-active]');
 const currentSlideIndex = +currentSlide.dataset.index;
 currentSlide.classList.add('slider-none');
 currentSlide.removeAttribute('data-active');

 // рассчитываем индекс след слайда в зависимости от направления движения
 let nextSlideIndex;
 if (direction === 'next') {
   nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
 } else if (direction === 'prev') {
   nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
 }

//  Показываем след слайд
 const nextSlide = slider.querySelector(`[data-index ="${nextSlideIndex}"]`);
 nextSlide.classList.remove('slider-none');
 nextSlide.setAttribute('data-active', '');
}

