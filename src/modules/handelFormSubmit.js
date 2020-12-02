const handelFormSubmit = (form) => {
  'use strict';

  const loadMessage = 'Загрузка...',
    errorMessage = document.getElementById('thanks-error'),
    successMesage = document.getElementById('thanks');

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 14px';
  statusMessage.style.color = '#ffd11a';
  statusMessage.style.display = 'absolute';
  statusMessage.style.textAlign = 'center';

  const btn = form.querySelector('[type="submit"]'),
    checkbox = form.querySelector('.checkbox'),
    box = form.querySelector('.box');

  const checkboxMess = document.createElement('ul');
  checkboxMess.style.cssText = 'font-size: 10px';
  checkboxMess.style.color = 'red';
  checkboxMess.style.display = 'absolute';
  checkboxMess.style.textAlign = 'center';

  const formsName = document.querySelectorAll('.form-name');

  for (const formName of formsName) {
    formName.addEventListener('input', () => {
      formName.value = formName.value.replace(/[^а-яё ]/iu, '');
    });
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!checkbox.checked) {
      box.appendChild(checkboxMess);
      checkboxMess.textContent = 'Подтвердите согласие на обработку даных';
      return;
    } else if (checkbox.checked) {
      checkboxMess.textContent = '';

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

          checkboxMess.textContent = '';
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

export default handelFormSubmit;
