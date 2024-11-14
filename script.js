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