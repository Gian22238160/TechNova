// Carrito de compras

const botonesAgregar = document.querySelectorAll('.producto button');
const contadorCarrito = document.getElementById('cant_productos');
const buscador = document.getElementById('buscador_p');
const productos = document.querySelectorAll('.producto');
let cantidad = 0;


botonesAgregar.forEach(boton => {
  boton.addEventListener('click', () => {
    cantidad++;
    contadorCarrito.textContent = cantidad;


    contadorCarrito.classList.add('animar');
    setTimeout(() => contadorCarrito.classList.remove('animar'), 300);
  });
});


// Barra de Busqueda
buscador.addEventListener('input', e => {
  const texto = e.target.value.toLowerCase().trim();

  productos.forEach(prod => {
    const titulo = prod.querySelector('h2').textContent.toLowerCase();
    prod.style.display = titulo.includes(texto) ? 'flex' : 'none';
  });
});
