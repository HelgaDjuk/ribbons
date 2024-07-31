function openModal(image) {
    var overlay = document.querySelector('.overlay');
    overlay.style.display = 'flex';
    var img = document.createElement('img');
    img.src = image.src;
    overlay.innerHTML = '';
    overlay.appendChild(img);
  }
  function closeModal(overlay) {
    overlay.style.display = 'none';
  }  
  function filterImages(className) {
    const images = document.querySelectorAll('.gallery-img');
    images.forEach((img) => {
        img.style.display = img.classList.contains(className) ? 'flex' : 'none';
    });
  }
  function resetFilter() {
    const images = document.querySelectorAll('.gallery-img');
    images.forEach((img) => {
        img.style.display = 'flex'; 
    });
}
const navbar = document.getElementById('navbar');

        // Получите начальное положение меню
        const initialPosition = navbar.offsetTop;

        // Обработчик события прокрутки
        window.addEventListener('scroll', () => {
            if (window.scrollY > initialPosition) {
                // Если прокрутка больше начального положения, зафиксируйте меню
                navbar.style.display ="block"
                navbar.style.position = 'fixed';
                navbar.style.top = '0';
            } else {
                // В противном случае верните меню к исходному положению
                navbar.style.position = 'static';
                navbar.style.display ="none"
            }
        });