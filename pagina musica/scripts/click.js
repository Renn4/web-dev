const clickableElements = document.querySelectorAll('.grid-item');
const botonSiguiente = document.querySelector('.boton-siguiente');

function updateButtonAppearance() {
    const anyActive = Array.from(clickableElements).some(element => element.classList.contains('activo'));
    if (anyActive) {
        botonSiguiente.classList.add('prendido');
    } else {
        botonSiguiente.classList.remove('prendido');
    }
}

clickableElements.forEach(element => {
    element.addEventListener('click', function() {
        
        this.classList.toggle('activo');

        const overlay = this.querySelector('.overlay');
        if (overlay) {
            overlay.classList.toggle('activo');
        }

        updateButtonAppearance();
    });
});

updateButtonAppearance();