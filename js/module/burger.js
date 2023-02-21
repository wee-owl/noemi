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