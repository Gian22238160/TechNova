// Selecciona todas las tarjetas del carrusel
const slides = document.querySelectorAll(".pr"); 
let index = 0; // índice del producto actualmente visible

// Función para mostrar la tarjeta correspondiente al índice
function showSlide(i) {
    // Oculta todas las tarjetas
    slides.forEach(slide => slide.classList.remove("active"));
    // Muestra solo la tarjeta actual
    slides[i].classList.add("active");
}

// Muestra la primera tarjeta al cargar la página
showSlide(index);

// Configura los botones de avanzar (flecha derecha)
document.querySelectorAll(".fa-angle-right").forEach(btn =>
    btn.addEventListener("click", () => {
        // Incrementa el índice y vuelve al inicio si supera el número de tarjetas
        index = (index + 1) % slides.length;
        showSlide(index);
    })
);

// Configura los botones de retroceder (flecha izquierda)
document.querySelectorAll(".fa-angle-left").forEach(btn =>
    btn.addEventListener("click", () => {
        // Decrementa el índice y vuelve al final si es menor que 0
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    })
);

// Cambio automático cada 4 segundos
setInterval(() => {
    index = (index + 1) % slides.length; // Avanza al siguiente producto
    showSlide(index); // Muestra la tarjeta correspondiente
}, 4000);


//OPCIONES
document.addEventListener("DOMContentLoaded", function() {
    const botonNLL = document.querySelector(".NLL");
    const botonPD = document.querySelector(".PD");
    const botonO = document.querySelector(".O");
    
    function cambiarCategoria(titulo, descripcion) {
        document.querySelector(".cabeceraf2 h1").textContent = titulo;
        document.querySelector(".cabeceraf2 p").textContent = descripcion;
    }
    
    if (botonNLL) {
    botonNLL.addEventListener("click", function() {
        cambiarCategoria(
            "Nuevos Lanzamientos",
            "Descubre los productos más recientes que acaban de llegar. Innovación, diseño moderno y tecnología de punta para mantenerte siempre actualizado"
        );
    });
    }

    if (botonPD) {
    botonPD.addEventListener("click", function() {
        cambiarCategoria(
            "Productos Destacados",
            "Explora nuestros productos más populares y recomendados. Calidad, rendimiento y diseño excepcionales seleccionados especialmente para ti"
        );
    });
    }

    if (botonO) {
        botonO.addEventListener("click", function() {
        cambiarCategoria(
            "Ofertas Especiales",
            "Aprovecha nuestras promociones y descuentos exclusivos en productos seleccionados. La tecnología que quieres a precios que no puedes dejar pasar."
        );
    });
}

});