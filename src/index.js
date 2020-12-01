'use strict';

import toggleMenu from './modules/toggleMenu';
import mainSliders from './modules/mainSlider';
import carousel from './modules/carousel';
import footer from './modules/footer';
import galleryPhoto from './modules/galleryPhoto';
import clubCards from './modules/clubCards';
import freeVisitForm from './modules/freeVisitForm';
import maskPhone from './modules/maskPhone';

//toggle Menu
toggleMenu();

// main sliders

mainSliders();

// carousel

carousel();

// galleryPhoto

galleryPhoto();

// calc
const pageId = document.querySelector('html').id;

if (pageId === 'main') {
  clubCards();
}

// free visit form
const freeVisit = document.getElementById('form2'),
  callBackForm = document.getElementById('form1'),
  bannerFreeForm = document.getElementById('banner-form'),
  footerForm = document.getElementById('footer_form'),
  cardOrder = document.getElementById('card_order');

freeVisitForm(freeVisit);
freeVisitForm(callBackForm);
freeVisitForm(bannerFreeForm);
freeVisitForm(footerForm);
freeVisitForm(cardOrder);

//mask phone

maskPhone('.tel');

// footer

footer();
