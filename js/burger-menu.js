// Добавляем обработчики событий для бургер-кнопки и модального окна
const burger = document.querySelector('.burger');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');

burger.addEventListener('click', () => {
  modal.classList.toggle('show');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});
