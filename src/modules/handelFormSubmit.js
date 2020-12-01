const handelFormSubmit = (form) => {
  'use strict';

  const errorMessage = document.getElementById('thanks-error'),
    loadMessage = 'Загрузка...',
    successMesage = document.getElementById('thanks'),
    freeVisitForm = document.getElementById('free_visit_form');

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 14px';
  statusMessage.style.color = '#ffd11a';
  statusMessage.style.display = 'absolute';
  statusMessage.style.textAlign = 'center';

  const btn = form.querySelectorAll('[type="submit"]'),
    checkbox = form.querySelectorAll('.checkbox'),
    box = form.querySelectorAll('.box');

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

  for (const but of btn) {
    for (const check of checkbox) {
      for (const boxchek of box) {
        but.addEventListener('click', () => {
          if (!check.checked) {
            boxchek.appendChild(checkboxMess);
            checkboxMess.textContent = 'Заполните все поля и поставьте галочку';
          } else if (check.checked) {
            checkboxMess.textContent = '';
          }
        });
      }
    }
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    form.appendChild(statusMessage);
    let formData = new FormData(form);
    formData = Object.fromEntries(formData);

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
        document.body.classList.add('no-scroll');
        document.querySelector('html').classList.add('no-scroll');
        freeVisitForm.style.display = 'none';
        checkboxMess.textContent = '';
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

    setTimeout(deleteMess, 3000);
  });
};

export default handelFormSubmit;
