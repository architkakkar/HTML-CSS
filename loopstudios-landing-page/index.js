// Open Mobile View Menu-bar
document.querySelector('.icon-hamburger').addEventListener('click', () => {
    document.querySelector('.header').classList.add('hamburger-bg');
    document.querySelector('.navbar-links').classList.add('hamburger-click');
    document.querySelector('.icon-hamburger').style.display = "none";
    document.querySelector('.icon-close').style.display = "block";
    document.querySelector('.header h1').style.visibility = "hidden";
});

// Close Mobile View Menu-bar
document.querySelector('.icon-close').addEventListener('click', () => {
    document.querySelector('.header').classList.remove('hamburger-bg');
    document.querySelector('.navbar-links').classList.remove('hamburger-click');
    document.querySelector('.icon-close').style.display = "none";
    document.querySelector('.icon-hamburger').style.display = "block";
    document.querySelector('.header h1').style.visibility = "visible";
});