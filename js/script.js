function addToCart(productId, productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let productIndex = cart.findIndex(product => product.id === productId);

    if (productIndex > -1) {
        cart[productIndex].quantity++;
    } else {
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function updateCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsDiv = document.querySelector('.cart-items');
    let totalPrice = 0;

    cartItemsDiv.innerHTML = '';

    cart.forEach(product => {
        let productDiv = document.createElement('div');
        productDiv.classList.add('cart-item');
        
        productDiv.innerHTML = `
            <img src="img/${product.name.toLowerCase().replace(/ /g, '-')}.jpg" alt="${product.name}">
            <span>${product.name}</span>
            <span>S/ ${product.price}</span>
            <span>Cantidad: ${product.quantity}</span>
            <button onclick="removeFromCart(${product.id})">Eliminar</button>
        `;
        cartItemsDiv.appendChild(productDiv);

        totalPrice += product.price * product.quantity;
    });

    document.getElementById('total-price').textContent = `S/ ${totalPrice.toFixed(2)}`;
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(product => product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

document.addEventListener('DOMContentLoaded', updateCart);