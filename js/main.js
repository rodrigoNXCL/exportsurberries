// js/main.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            console.log('Email captado:', email);
            // Aquí puedes agregar más lógica, como enviar a un servicio

            // Mostrar mensaje de éxito
            const mensajeExito = document.getElementById('mensajeExito');
            if (mensajeExito) {
                mensajeExito.style.display = 'block';
            }
            form.reset();
        });
    }
});