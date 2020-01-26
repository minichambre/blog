window.onload = function () {
    let nav = document.querySelector('#menu');
    let navMenu = document.querySelector('#nav-menu');
    let mask = document.querySelector('#mask');

    nav.addEventListener('click', () => {
        navMenu.classList.toggle('visible');
        mask.classList.toggle('visible');
    })

    mask.addEventListener('click', () => {
        if (navMenu.classList.contains('visible')) {
            mask.classList.remove('visible');
            navMenu.classList.remove('visible');
        }
    })
}