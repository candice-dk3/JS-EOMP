let cart = [];

function addItemToCart(item) {
  cart.push(item);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = "";

  cart.forEach((item) => {
    const cartItemHTML = `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <h4>${item.name}</h4>
        <p>Quantity: ${item.quantity}</p>
        <p>Price: ${item.price}</p>
        <button class="remove-item" data-item-id="${item.id}">Remove</button>
      </div>
    `;
    cartContainer.insertAdjacentHTML("beforeend", cartItemHTML);
  });
}

document.getElementById("add-to-cart").addEventListener("click", () => {
    const item = { };
    addItemToCart(item);
  });

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-item")) {
      const itemId = e.target.getAttribute("data-item-id");
      const index = cart.findIndex((item) => item.id === itemId);
      if (index!== -1) {
        cart.splice(index, 1);
        updateCartDisplay();
      }
    }
  });