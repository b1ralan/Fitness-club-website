const footer = () => {
  'use strict';
  const footer = document.getElementById('footer'),
    aboutMenu = document.querySelectorAll('li > a ');

  footer.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
      event.preventDefault();
      aboutMenu.forEach((elem) => {
        const href = new URL(elem.href);
        const blockId = href.hash;
        if (elem === event.target) {
          document.querySelector(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    }
  });
};

footer();

export default footer;
