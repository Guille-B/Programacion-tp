let index = 0;

function mostrarImagen() {
    const imagenes = document.getElementById('imagenes');
    const totalImagenes = document.querySelectorAll('.imagen').length;
    const desplazamiento = -index * 100;
    imagenes.style.transform = 'translateX(' + desplazamiento + '%)';
}

function siguiente() {
    const totalImagenes = document.querySelectorAll('.imagen').length;
    index++;
    if (index >= totalImagenes) {
        index = 0; // Regresar a la primera imagen
    }
    mostrarImagen();
}

function anterior() {
    const totalImagenes = document.querySelectorAll('.imagen').length;
    index--;
    if (index < 0) {
        index = totalImagenes - 1; // Ir a la última imagen
    }

    mostrarImagen();
}

// Función para cargar el navbar
function loadNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el navbar:', error));
}

// Cargar el navbar al iniciar la página
window.onload = loadNavbar;