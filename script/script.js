window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  //toggle Menu
  const toogleMenu = () => {
    const bodyDelegate = document.querySelector('body');
    const ulList = document.querySelector('.list'),
      freeVisitForm = document.getElementById('free_visit_form'),
      callbackForm = document.getElementById('callback_form'),
      popupGift = document.getElementById('gift');

    function disableScroll() {
      let pagePosition = window.scrollY;
      bodyDelegate.classList.add('no-scroll');
      bodyDelegate.dataset.position = pagePosition;
      bodyDelegate.style.top = -pagePosition + 'px';
    }

    function enableScroll() {
      let pagePosition = parseInt(bodyDelegate.dataset.position, 10);
      bodyDelegate.classList.remove('no-scroll');
      window.scroll({ top: pagePosition });
      bodyDelegate.removeAttribute('data-position');
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
      } else if (
        event.target.closest('.close_icon') ||
        event.target.closest('.overlay') ||
        event.target.closest('.close-btn')
      ) {
        popupGift.style.display = 'none';
      }
    });
  };
  toogleMenu();
});
