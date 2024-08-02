document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.header__burger');
    const modal = document.querySelector('.modal');

    burger.addEventListener('click', () => {
        modal.classList.toggle('show-modal');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show-modal');
        }
    });
});
