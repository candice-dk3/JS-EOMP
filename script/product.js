document.addEventListener('DOMContentLoaded', () => {
    const addToCartButton = document.getElementById('add-to-cart');
    const quantityInput = document.getElementById('quantity');

    addToCartButton.addEventListener('click', () => {
        const productName = document.getElementById('product-name').textContent;
        const productPrice = document.getElementById('product-price').textContent;
        const productQuantity = quantityInput.value;

        const cartItem = {
            name: productName,
            price: productPrice,
            quantity: productQuantity
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        alert('`${}` was added to your cart!');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const productId = '123'; // Example product ID
    fetch(`/api/products/${productId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('product-name').textContent = data.name;
            document.getElementById('product-description').textContent = data.description;
            document.getElementById('product-price').textContent = `$${data.price}`;
            document.getElementById('product-image').src = data.image;
        })
        .catch(error => console.error('Error fetching product data:', error));
});