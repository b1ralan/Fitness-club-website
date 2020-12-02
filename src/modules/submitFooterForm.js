const submitFooterForm = (form) => {
  'use strict';

  const loadMessage = 'Загрузка...',
    errorMessage = document.getElementById('thanks-error'),
    successMesage = document.getElementById('thanks');

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 14px';
  statusMessage.style.color = '#ffd11a';
  statusMessage.style.display = 'absolute';
  statusMessage.style.textAlign = 'center';

  const checkClub = document.createElement('div');
  checkClub.style.cssText = 'font-size: 14px';
  checkClub.style.color = 'red';
  checkClub.style.display = 'absolute';
  checkClub.style.textAlign = 'center';

  const clubMozaika = document.getElementById('footer_leto_mozaika'),
    clubSchelkovo = document.getElementById('footer_leto_schelkovo');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!clubMozaika.checked && !clubSchelkovo.checked) {
      form.appendChild(checkClub);
      checkClub.textContent = 'Выберите клуб';
      return;
    } else if (clubMozaika.checked || clubSchelkovo.checked) {
      checkClub.textContent = '';

      form.appendChild(statusMessage);
      let formData = new FormData(form);
      formData = Object.fromEntries(formData);

      statusMessage.textContent = loadMessage;

      postData(formData)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('status network not 200');
          }
          successMesage.style.display = 'flex';
          document.body.classList.add('no-scroll');
          document.querySelector('html').classList.add('no-scroll');

          checkClub.textContent = '';
          form.reset();
        })
        .catch((error) => {
          errorMessage.style.display = 'flex';

          console.error(error);
        });
      const deleteMess = () => {
        statusMessage.textContent = '';
      };

      setTimeout(deleteMess, 3000);
    }
  });

  const postData = (formData) =>
    fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
};

export default submitFooterForm;
