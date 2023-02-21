const feedback = document.querySelector('.feedback');
const popup = document.querySelector('.popup');

feedback.addEventListener('click', () => {
    popup.style.display = 'flex';
});

popup.addEventListener('click', (e) => {
    if (e.target === popup || e.target.closest('.popup__close') || e.target.closest('.sand__button')) {
        popup.style.display = 'none';
    };
});