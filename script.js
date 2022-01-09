const headerLine = document.querySelector('.header__resp');
const headerLinks = document.querySelector('.header__navLists');

headerLine.addEventListener('click', () => {
  headerLinks.classList.toggle('header__showLinks');
});
