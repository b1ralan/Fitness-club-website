'use strict';

import toggleMenu from './modules/toggleMenu';
import mainSliders from './modules/mainSlider';
import carousel from './modules/carousel';
import footer from './modules/footer';
import galleryPhoto from './modules/galleryPhoto';
import clubCards from './modules/clubCards';
import handelFormSubmit from './modules/handelFormSubmit';
import maskPhone from './modules/maskPhone';
import submitFooterForm from './modules/submitFooterForm';

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

// handel Form Submit
const freeVisit = document.getElementById('form2'),
  callBackForm = document.getElementById('form1'),
  bannerFreeForm = document.getElementById('banner-form'),
  footerForm = document.getElementById('footer_form'),
  cardOrder = document.getElementById('card_order');

handelFormSubmit(freeVisit);
handelFormSubmit(callBackForm);
handelFormSubmit(bannerFreeForm);
handelFormSubmit(cardOrder);

submitFooterForm(footerForm);

//mask phone

maskPhone('.tel');

// footer

footer();
