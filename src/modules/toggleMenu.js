const toggleMenu = () => {
  'use strict';
  const bodyDelegate = document.querySelector('body');

  const ulList = document.querySelector('.list'),
    freeVisitForm = document.getElementById('free_visit_form'),
    callbackForm = document.getElementById('callback_form'),
    popupGift = document.getElementById('gift'),
    hiddenSmall = document.querySelectorAll('li > a '),
    popupMenu = document.querySelector('.popup-menu'),
    toTop = document.getElementById('totop'),
    thanks = document.getElementById('thanks'),
    thanksError = document.getElementById('thanks-error');

  function disableScroll() {
    document.body.classList.add('no-scroll');
    document.querySelector('html').classList.add('no-scroll');
  }

  function enableScroll() {
    document.body.classList.remove('no-scroll');
    document.querySelector('html').classList.remove('no-scroll');
  }

  const handlerClubList = () => {
    if (ulList.style.display === 'none') {
      ulList.style.display = 'block';
    } else {
      ulList.style.display = 'none';
    }
  };

  const handlerPopupVisit = () => {
    if (freeVisitForm.style.display === 'none') {
      freeVisitForm.style.display = 'block';
    } else {
      freeVisitForm.style.display = 'none';
    }
  };

  const handlerCallback = () => {
    if (callbackForm.style.display === 'none') {
      callbackForm.style.display = 'block';
    } else {
      callbackForm.style.display = 'none';
    }
  };

  const handlerGift = () => {
    document.querySelector('.fixed-gift').style.display = 'none';

    if (popupGift.style.display === 'none') {
      popupGift.style.display = 'block';
    } else {
      popupGift.style.display = 'none';
    }
  };

  bodyDelegate.addEventListener('click', (event) => {
    console.log(event.target);
    // ВЫбор клуба
    if (event.target.closest('.clubs-list')) {
      handlerClubList();
    } else if (
      !event.target.matches('p') ||
      !event.target.closest('.clubs-list')
    ) {
      ulList.style.display = 'none';
    }
    // Записаться на беплатный визит
    if (event.target.closest('.open-popup')) {
      handlerPopupVisit();
      disableScroll();
    } else if (
      event.target.closest('.close_icon') ||
      event.target.closest('.overlay') ||
      event.target.closest('.close-btn')
    ) {
      freeVisitForm.style.display = 'none';
      enableScroll();
    }
    // Перезвоните мне
    if (event.target.closest('#callback_form_open')) {
      handlerCallback();
      disableScroll();
    } else if (
      event.target.closest('.close_icon') ||
      event.target.closest('.overlay') ||
      event.target.closest('.close-btn')
    ) {
      callbackForm.style.display = 'none';
      enableScroll();
    }
    // Подарок
    if (event.target.closest('.fixed-gift')) {
      handlerGift();
      disableScroll();
    } else if (
      event.target.closest('.close_icon') ||
      event.target.closest('.overlay') ||
      event.target.closest('.close-btn')
    ) {
      popupGift.style.display = 'none';
      thanks.style.display = 'none';
      thanksError.style.display = 'none';
      callbackForm.style.display = 'none';
      enableScroll();
    }

    // Плавный скрол из меню навигации
    if (event.target.closest('.scroll')) {
      event.preventDefault();
      hiddenSmall.forEach((elem) => {
        const href = new URL(elem.href);
        const blockId = href.hash;
        if (elem === event.target) {
          document.querySelector(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    }
    // Закртыие бургер меню
    if (event.target.closest('[src="images/menu-button.png"]')) {
      popupMenu.style.display = 'flex';
    } else if (
      event.target.closest('.close-menu-btn') ||
      event.target.closest('.scroll')
    ) {
      popupMenu.style.display = 'none';
    }
  });

  const stickyFunction = () => {
    const navbar = document.getElementById('navbar');
    if (window.pageYOffset >= 180 && window.innerWidth < 768) {
      navbar.classList.add('menu-fix');
    } else {
      navbar.classList.remove('menu-fix');
    }
  };

  window.onscroll = function () {
    stickyFunction();
  };

  const scrollUp = () => {
    function trackScroll() {
      let scrolled = window.pageYOffset;
      let coords = document.documentElement.clientHeight;

      if (scrolled > coords) {
        toTop.style.display = 'block';
      }
      if (scrolled < coords) {
        toTop.style.display = 'none';
      }
    }
    window.addEventListener('scroll', trackScroll);
    toTop.addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  };
  scrollUp();
};

export default toggleMenu;
