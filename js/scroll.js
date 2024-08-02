document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.artists__gallery');
    const items = document.querySelectorAll('.artists__item');
    const itemWidth = items[0].offsetWidth + parseInt(window.getComputedStyle(items[0]).marginRight); // Ширина одного элемента
    const itemCount = items.length;
    const totalWidth = itemWidth * itemCount;

    let offset = 0;

    // Создаем клоны для создания бесконечного эффекта
    function createClones() {
        for (let i = 0; i < itemCount; i++) {
            const clone = items[i].cloneNode(true);
            gallery.appendChild(clone);
        }
    }

    createClones();

    function updatePosition() {
        offset = (window.scrollY * 0.5) % totalWidth;
        gallery.style.transform = `translateX(-${offset}px)`;

        // Если прокрутка за пределы, то перемещаем в начало
        if (window.scrollY * 0.5 > totalWidth) {
            gallery.style.transition = 'none'; // Отключаем анимацию
            gallery.style.transform = `translateX(0px)`;
            offset = 0;
            setTimeout(() => gallery.style.transition = 'transform 0.3s ease-out', 0); // Включаем анимацию
        }
    }

    window.addEventListener('scroll', updatePosition);
    updatePosition(); // Обновляем позицию при загрузке
});
