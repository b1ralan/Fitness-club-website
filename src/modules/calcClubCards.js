const calcClubCards = () => {
  'use strict';
  const cardsSection = document.getElementById('cards'),
    totalPrice = document.getElementById('price-total');
  let monthOne = document.getElementById('m1'),
    monthSix = document.getElementById('m2'),
    monthNine = document.getElementById('m3'),
    monthTwelve = document.getElementById('m4');

  const mozaika = document.getElementById('card_leto_mozaika'),
    schelkovo = document.getElementById('card_leto_schelkovo');

  const priseMonthMozaika = 3600;
  const priseMonthSchelkovo = 3300;

  mozaika.addEventListener('click', () => {
    totalPrice.textContent = monthOneMozaika;
  });

  const monthOneMozaika = priseMonthMozaika * monthOne.value,
    monthSixMozaika = priseMonthMozaika * monthSix.value,
    monthNineMozaika = priseMonthMozaika * monthNine.value,
    monthTwelveMozaika = priseMonthMozaika * monthTwelve.value;

  const monthOneSchelkovo = priseMonthSchelkovo * monthOne.value,
    monthSixSchelkovo = priseMonthSchelkovo * monthSix.value,
    monthNineSchelkovo = priseMonthSchelkovo * monthNine.value,
    monthTwelveSchelkovo = priseMonthSchelkovo * monthTwelve.value;

  cardsSection.addEventListener('click', (event) => {
    const target = event.target;
    console.log(event.target);

    if (target.closest('#m1')) {
      totalPrice.textContent = monthOneSchelkovo;
    } else if (target.closest('#m2')) {
      console.log('6');
      totalPrice.textContent = monthSixSchelkovo;
    } else if (target.closest('#m3')) {
      totalPrice.textContent = monthNineSchelkovo;
    } else if (target.closest('#m4')) {
      totalPrice.textContent = monthTwelveSchelkovo;
    }
  });
};

export default calcClubCards;
