window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  //toggle Menu
  const toogleMenu = () => {
    const bodyDelegate = document.querySelector('body');
    const ulList = document.querySelector('.list'),
      freeVisitForm = document.getElementById('free_visit_form'),
      callbackForm = document.getElementById('callback_form'),
      popupGift = document.getElementById('gift'),
      hiddenSmall = document.querySelectorAll('li > a '),
      popupMenu = document.querySelector('.popup-menu');

    function disableScroll() {
      bodyDelegate.classList.add('no-scroll');
    }

    function enableScroll() {
      bodyDelegate.classList.remove('no-scroll');
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
      if (event.target.closest('.clubs-list')) {
        handlerClubList();
      } else if (
        !event.target.matches('p') ||
        !event.target.closest('.clubs-list')
      ) {
        ulList.style.display = 'none';
      }
      if (event.target.closest('.open-popup')) {
        handlerPopupVisit();
        disableScroll();
      } else if (
        event.target.closest('.close_icon') ||
        event.target.closest('.overlay')
      ) {
        freeVisitForm.style.display = 'none';
        enableScroll();
      }
      if (event.target.closest('.callback-btn')) {
        handlerCallback();
        disableScroll();
      } else if (
        event.target.closest('.close_icon') ||
        event.target.closest('.overlay')
      ) {
        callbackForm.style.display = 'none';
        enableScroll();
      }
      if (event.target.closest('.fixed-gift')) {
        handlerGift();
        disableScroll();
      } else if (
        event.target.closest('.close_icon') ||
        event.target.closest('.overlay') ||
        event.target.closest('.close-btn')
      ) {
        popupGift.style.display = 'none';
        enableScroll();
      }
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
        return;
      }
      if (event.target.closest('[src="images/menu-button.png"]')) {
        popupMenu.style.display = 'flex';
      } else if (
        event.target.closest('.close-menu-btn') ||
        event.target.matches('.scroll')
      ) {
        popupMenu.style.display = 'none';
      }
    });
  };

  const stickyFunction = () => {
    const navbar = document.getElementById('navbar');
    const sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky && window.innerWidth < 768) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  };

  window.onscroll = function () {
    stickyFunction();
  };

  toogleMenu();
});
