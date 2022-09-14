// Burger-menu

const burgerList = document.querySelector('.burger__list');
const burgerNav = document.querySelector('.burger__nav');
const burgerSwitch = document.getElementById('burger__switch');
const bgDim = document.querySelector('.background__dim');

burgerList.addEventListener('click', () => {
    burgerNav.classList.toggle('burger__nav_active');
    bgDim.classList.toggle('background__dim_active');
});

document.addEventListener('click', (e) => {
    if (e.target === bgDim || e.target.closest('.nav__items a')) {
        burgerNav.classList.remove('burger__nav_active');
        bgDim.classList.remove('background__dim_active');
        burgerSwitch.checked = false;
    };
});

// Modal window

const feedback = document.querySelector('.feedback');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

feedback.addEventListener('click', () => {
    popup.style.display = 'flex';
});

popup.addEventListener('click', (e) => {
    if (e.target === popup || e.target.closest('.popup__close') || e.target.closest('.sand__button')) {
        popup.style.display = 'none';
    };
});
