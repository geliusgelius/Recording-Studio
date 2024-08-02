document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.artists__gallery');
    const items = document.querySelectorAll('.artists__item');
    const itemWidth = items[0].offsetWidth + parseInt(window.getComputedStyle(items[0]).marginRight); 
    const itemCount = items.length;
    const totalWidth = itemWidth * itemCount;

    let offset = 0;

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

        if (window.scrollY * 0.5 > totalWidth) {
            gallery.style.transition = 'none'; 
            gallery.style.transform = `translateX(0px)`;
            offset = 0;
            setTimeout(() => gallery.style.transition = 'transform 0.3s ease-out', 0); 
        }
    }

    window.addEventListener('scroll', updatePosition);
    updatePosition(); 
});
