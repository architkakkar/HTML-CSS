const hamburgerIcon = document.querySelector('.hamburger');

console.log(hamburgerIcon);

hamburgerIcon.addEventListener('click', () => {
  document.querySelector('.dropdown').classList.toggle('show-dropdown');
  document.querySelector('.hamburger-downshape').classList.toggle('show-dropdown');
});