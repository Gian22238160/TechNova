const slides = document.querySelectorAll(".pr");
const dots = document.querySelectorAll(".dot");
let index = 0;

function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));
    slides[i].classList.add("active");
    dots[i].classList.add("active");
}

showSlide(index);

dots.forEach(dot => {
    dot.addEventListener("click", () => {
        index = Number(dot.dataset.index);
        showSlide(index);
    });
});

setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 10000);

document.addEventListener("DOMContentLoaded", function() {
    const botonNLL = document.querySelector(".NLL");
    const botonPD = document.querySelector(".PD");
    const botonO = document.querySelector(".O");

    const productos = {
        NLL: [
            {
                img: "PRODUCTOS/n1-removebg-preview.png",
                nombre: "Notebook ASUS Vivobook Go 15",
                precio: "$300.00"
            },
            {
                img: "PRODUCTOS/N8-removebg-preview.png",
                nombre: "Auriculares HyperX Cloud II",
                precio: "$349.00"
            },
            {
                img: "PRODUCTOS/GR-removebg-preview.png",
                nombre: "Gabinete Gamer Cougar MX330",
                precio: "$349.00"
            }
        ],
        PD: [
            {
                img: "PRODUCTOS/ml.png",
                nombre: "Monitor LG UHD 4K 27",
                precio: "$420.00"
            },
            {
                img: "PRODUCTOS/m2.png",
                nombre: "Monitor HP Pro 4K Thunderbolt 4 de la serie 7 de 27",
                precio: "$509.00"
            },
            {
                img: "PRODUCTOS/mo2.png",
                nombre: "Mouse Vertical Ergonómico Inalámbrico",
                precio: "$250.00"
            }
        ],
        O: [
            {
                img: "PRODUCTOS/OFE1.png",
                nombre: "SSD Kingston 512GB",
                precio: "$89.00"
            },
            {
                img: "PRODUCTOS/OFE2.png",
                nombre: "Laptop HP Ryzen 7",
                precio: "$599.00"
            },
            {
                img: "PRODUCTOS/OFE3.png",
                nombre: "Tarjeta Gráfica RTX 3060",
                precio: "$299.00"
            }
        ]
    };

    function actualizarProductos(cat) {
        productos[cat].forEach((p, i) => {
            const pr = slides[i];
            pr.querySelector("img").src = p.img;
            pr.querySelector("h1").textContent = p.nombre;
            pr.querySelector("p").textContent = p.precio;
        });
        index = 0;
        showSlide(0);
    }

    const textos = {
        NLL: {
            titulo: "Nuevos Lanzamientos",
            desc: "Descubre las últimas novedades que acaban de llegar. Innovación, diseño moderno y tecnología de punta."
        },
        PD: {
            titulo: "Productos Destacados",
            desc: "Explora nuestros productos más populares y recomendados. Calidad y rendimiento excepcionales."
        },
        O: {
            titulo: "Ofertas Especiales",
            desc: "Aprovecha nuestros descuentos exclusivos. La tecnología que quieres a precios irresistibles."
        }
    };

    function cambiarTexto(cat) {
        document.querySelector(".cabeceraf2 h1").textContent = textos[cat].titulo;
        document.querySelector(".cabeceraf2 p").textContent = textos[cat].desc;
    }

    if (botonNLL) botonNLL.addEventListener("click", () => {
        cambiarTexto("NLL");
        actualizarProductos("NLL");
    });

    if (botonPD) botonPD.addEventListener("click", () => {
        cambiarTexto("PD");
        actualizarProductos("PD");
    });

    if (botonO) botonO.addEventListener("click", () => {
        cambiarTexto("O");
        actualizarProductos("O");
    });
});