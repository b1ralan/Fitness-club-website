const handelFormSubmit = (form) => {
  'use strict';

  const errorMessage = document.getElementById('thanks-error'),
    loadMessage = 'Загрузка...',
    successMesage = document.getElementById('thanks'),
    freeVisitForm = document.getElementById('free_visit_form');

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 14px';
  statusMessage.style.color = '#ffd11a';

  const formsName = document.querySelectorAll('.form-name');

  for (const formName of formsName) {
    formName.addEventListener('input', () => {
      formName.value = formName.value.replace(/[^а-яё ]/iu, '');
    });
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    form.appendChild(statusMessage);
    let formData = new FormData(form);
    formData = Object.fromEntries(formData);

    const checkbox = document.querySelectorAll('[type="checkbox"]');

    if (checkbox !== 'false') {
      console.log('PISOS');
    }

    statusMessage.textContent = loadMessage;

    const postData = (formData) =>
      fetch('./server.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

    postData(formData)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('status network not 200');
        }
        successMesage.style.display = 'flex';
        freeVisitForm.style.display = 'none';
        form.reset();
      })
      .catch((error) => {
        errorMessage.style.display = 'flex';
        freeVisitForm.style.display = 'none';
        console.error(error);
      });
    function deleteMess() {
      statusMessage.textContent = '';
    }
    // function popupClose() {
    //   document.querySelector('.popup').style.display = 'none';
    // }
    setTimeout(deleteMess, 3000);
    // setTimeout(popupClose, 5000);
  });
};

export default handelFormSubmit;
