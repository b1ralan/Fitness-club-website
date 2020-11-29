const clubCards = () => {
  'use strict';
  let oneMonth = document.getElementById('m1'),
    sixMonth = document.getElementById('m2'),
    nineMonth = document.getElementById('m3'),
    twelveMonth = document.getElementById('m4'),
    inputPromo = document.getElementById('promo'),
    priceTotal = document.getElementById('price-total'),
    cardLetoMozaika = document.getElementById('card_leto_mozaika'),
    cardLetoSchelkovo = document.getElementById('card_leto_schelkovo'),
    club = document.getElementById('card_order');
  let promocode = 'ТЕЛО2020';

  club.addEventListener('click', () => {
    if (cardLetoMozaika.checked && inputPromo.value !== promocode) {
      if (oneMonth.checked) {
        priceTotal.innerHTML = 1999;
      }
      if (sixMonth.checked) {
        priceTotal.innerHTML = 9900;
      }
      if (nineMonth.checked) {
        priceTotal.innerHTML = 13900;
      }
      if (twelveMonth.checked) {
        priceTotal.innerHTML = 19900;
      }
    }
    if (cardLetoSchelkovo.checked && inputPromo.value !== promocode) {
      if (oneMonth.checked) {
        priceTotal.innerHTML = 2999;
      }
      if (sixMonth.checked) {
        priceTotal.innerHTML = 14900;
      }
      if (nineMonth.checked) {
        priceTotal.innerHTML = 20900;
      }
      if (twelveMonth.checked) {
        priceTotal.innerHTML = 24900;
      }
    }
    if (cardLetoMozaika.checked && inputPromo.value === promocode) {
      if (oneMonth.checked) {
        priceTotal.innerHTML = Math.floor(1999 - 1999 * 0.3);
      }
      if (sixMonth.checked) {
        priceTotal.innerHTML = Math.floor(9900 - 9900 * 0.3);
      }
      if (nineMonth.checked) {
        priceTotal.innerHTML = Math.floor(13900 - 13900 * 0.3);
      }
      if (twelveMonth.checked) {
        priceTotal.innerHTML = Math.floor(19900 - 19900 * 0.3);
      }
    }
    if (cardLetoSchelkovo.checked && inputPromo.value === promocode) {
      if (oneMonth.checked) {
        priceTotal.innerHTML = Math.floor(2999 - 2999 * 0.3);
      }
      if (sixMonth.checked) {
        priceTotal.innerHTML = Math.floor(14900 - 14900 * 0.3);
      }
      if (nineMonth.checked) {
        priceTotal.innerHTML = Math.floor(21900 - 21900 * 0.3);
      }
      if (twelveMonth.checked) {
        priceTotal.innerHTML = Math.floor(24900 - 24900 * 0.3);
      }
    }

    inputPromo.addEventListener('input', () => {
      if (
        inputPromo.value === promocode &&
        oneMonth.checked &&
        cardLetoMozaika.checked
      ) {
        priceTotal.innerHTML = Math.floor(1999 - 1999 * 0.3);
      } else if (
        inputPromo.value !== promocode &&
        oneMonth.checked &&
        cardLetoMozaika.checked
      ) {
        priceTotal.innerHTML = 1999;
      } else if (
        inputPromo.value === promocode &&
        sixMonth.checked &&
        cardLetoMozaika.checked
      ) {
        priceTotal.innerHTML = Math.floor(9900 - 9900 * 0.3);
      } else if (
        inputPromo.value !== promocode &&
        sixMonth.checked &&
        cardLetoMozaika.checked
      ) {
        priceTotal.innerHTML = 9900;
      } else if (
        inputPromo.value === promocode &&
        nineMonth.checked &&
        cardLetoMozaika.checked
      ) {
        priceTotal.innerHTML = Math.floor(13900 - 13900 * 0.3);
      } else if (
        inputPromo.value !== promocode &&
        nineMonth.checked &&
        cardLetoMozaika.checked
      ) {
        priceTotal.innerHTML = 13900;
      } else if (
        inputPromo.value === promocode &&
        twelveMonth.checked &&
        cardLetoMozaika.checked
      ) {
        priceTotal.innerHTML = Math.floor(19900 - 19900 * 0.3);
      } else if (
        inputPromo.value !== promocode &&
        twelveMonth.checked &&
        cardLetoMozaika.checked
      ) {
        priceTotal.innerHTML = 19900;
      }

      if (
        inputPromo.value === promocode &&
        oneMonth.checked &&
        cardLetoSchelkovo.checked
      ) {
        priceTotal.innerHTML = Math.floor(2999 - 2999 * 0.3);
      } else if (
        inputPromo.value === promocode &&
        sixMonth.checked &&
        cardLetoSchelkovo.checked
      ) {
        priceTotal.innerHTML = Math.floor(14900 - 14900 * 0.3);
      } else if (
        inputPromo.value === promocode &&
        nineMonth.checked &&
        cardLetoSchelkovo.checked
      ) {
        priceTotal.innerHTML = Math.floor(21900 - 21900 * 0.3);
      } else if (
        inputPromo.value === promocode &&
        twelveMonth.checked &&
        cardLetoSchelkovo.checked
      ) {
        priceTotal.innerHTML = Math.floor(24900 - 24900 * 0.3);
      }
      if (
        inputPromo.value !== promocode &&
        oneMonth.checked &&
        cardLetoSchelkovo.checked
      ) {
        priceTotal.innerHTML = 2999;
      } else if (
        inputPromo.value !== promocode &&
        sixMonth.checked &&
        cardLetoSchelkovo.checked
      ) {
        priceTotal.innerHTML = 14900;
      } else if (
        inputPromo.value !== promocode &&
        nineMonth.checked &&
        cardLetoSchelkovo.checked
      ) {
        priceTotal.innerHTML = 21900;
      } else if (
        inputPromo.value !== promocode &&
        twelveMonth.checked &&
        cardLetoSchelkovo.checked
      ) {
        priceTotal.innerHTML = 24900;
      }
    });
  });
};

export default clubCards;
