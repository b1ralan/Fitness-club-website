const galleryPhoto = () => {
  'use strict';
  const gallerySliders = document.querySelector('.gallery-slider'),
    slider = document.querySelectorAll('.gallery-slide'),
    dotsParent = document.querySelector('.slider-dots');
  let dot = document.querySelectorAll('.dot');
  let currentSlide = 0,
    interval;

  for (let i = 0; i < slider.length; i++) {
    const newDot = document.createElement('button');
    newDot.classList.add('dot');
    dotsParent.appendChild(newDot);
  }

  dot = document.querySelectorAll('.dot');
  dot[0].classList.add('dot-active');

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };
  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoPlaySlide = () => {
    prevSlide(slider, currentSlide, 'gallery-slide-active');
    prevSlide(dot, currentSlide, 'dot-active');
    currentSlide++;
    if (currentSlide >= slider.length) {
      currentSlide = 0;
    }
    nextSlide(slider, currentSlide, 'gallery-slide-active');
    nextSlide(dot, currentSlide, 'dot-active');
  };

  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  gallerySliders.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target;

    // if (!target.matches('.dot')) {
    //   return;
    // }

    prevSlide(slider, currentSlide, 'gallery-slide-active');
    prevSlide(dot, currentSlide, 'dot-active');
    if (target.closest('#arrow-left')) {
      currentSlide--;
    } else if (target.closest('#arrow-right')) {
      currentSlide++;
    } else if (target.matches('.dot')) {
      dot.forEach((elem, index) => {
        if (elem === target) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slider.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slider.length - 1;
    }
    nextSlide(slider, currentSlide, 'gallery-slide-active');
    nextSlide(dot, currentSlide, 'dot-active');
  });

  gallerySliders.addEventListener('mouseover', (event) => {
    if (
      event.target.closest('.slider-arrow') ||
      event.target.closest('.gallery-slide') ||
      event.target.closest('.dot')
    ) {
      stopSlide();
    }
  });
  gallerySliders.addEventListener('mouseout', (event) => {
    if (
      event.target.closest('.slider-arrow') ||
      event.target.closest('.gallery-slide') ||
      event.target.closest('.dot')
    ) {
      startSlide();
    }
  });
  startSlide(1500);
};

export default galleryPhoto;
