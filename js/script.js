// Espera a que todo el contenido de la página se cargue
document.addEventListener('DOMContentLoaded', function() {

    // Selecciona el botón de la hamburguesa y el menú de navegación
    const hamburgerButton = document.getElementById('hamburger-button');
    const mainNav = document.querySelector('.main-nav');

    // Comprueba que ambos elementos existan antes de añadir el evento
    if (hamburgerButton && mainNav) {
        // Añade un evento de clic al botón
        hamburgerButton.addEventListener('click', function() {
            // Alterna la clase 'mobile-open' en el menú
            // Esto mostrará u ocultará el menú
            mainNav.classList.toggle('mobile-open');
            // Alterna la clase 'is-active' en el botón para animar las líneas
            hamburgerButton.classList.toggle('is-active');
        });
    }

});

// --- CÓDIGO PARA LA ANIMACIÓN DE FADE-IN AL SCROLL ---

// Selecciona todas las secciones que queremos animar
const sectionsToAnimate = document.querySelectorAll('.fade-in-section');

// Configuración del observador
const observerOptions = {
    root: null, // Observa en relación al viewport del navegador
    rootMargin: '0px',
    threshold: 0.1 // Se activa cuando al menos el 10% de la sección es visible
};

// Crea el observador
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Si la sección está entrando en la pantalla...
        if (entry.isIntersecting) {
            // ...le añade la clase 'is-visible' para activar la animación CSS
            entry.target.classList.add('is-visible');
            // Deja de observar esta sección para que la animación no se repita
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Le dice al observador que vigile cada una de las secciones
sectionsToAnimate.forEach(section => {
    observer.observe(section);
});