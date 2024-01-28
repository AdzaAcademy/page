const imageUrls = ['img1.png', 'img2.jpeg', 'img3.jpeg', 'img4.jpeg'];
const backgroundImageElement = document.getElementById('backgroundImage');
const textos = document.getElementById('textos');
var elementosH3 = textos.getElementsByTagName("h3");

let currentImageIndex = 0;
let currentTextIndex = 0;

function changeBackgroundImage() {
    currentTextIndex+=currentTextIndex>elementosH3.length-1?(-elementosH3.length+1):1
    // Cambia la opacidad gradualmente a 0
    backgroundImageElement.style.opacity = 0;
    setTimeout(() => {
        textos.style.transform = `translateY(${100-currentTextIndex*150}%)`;
        
    }, 700);
    
    
    // Después de un breve retraso, cambia la URL de la imagen y restablece la opacidad a 1
    setTimeout(() => {
        backgroundImageElement.style.backgroundImage = `url('${imageUrls[currentImageIndex]}')`;
        backgroundImageElement.style.opacity = 1;
        
        // Incrementa el índice de la imagen o reinicia si alcanza el final de la lista
        currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
    }, 700); // Ajusta el tiempo de retraso según tus necesidades
}

document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('menu-toggle');
    var nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('show'); // Agrega o quita la clase 'show'
    });
});


changeBackgroundImage()
setInterval(changeBackgroundImage, 5000);