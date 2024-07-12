// export let cart;

// loadFromStorage();

// export function loadFromStorage() {
//   cart = JSON.parse(localStorage.getItem('cart'));

//   if (!cart) {
//     cart = [{
//       productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
//       quantity: 2,
//       deliveryOptionId: '1'
//     }, {
//       productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
//       quantity: 1,
//       deliveryOptionId: '2'
//     }];
//   }
// }

// function saveToStorage() {
//   localStorage.setItem('cart', JSON.stringify(cart));
// }

// export function addToCart(productId) {
//   let matchingItem;

//   cart.forEach((cartItem) => {
//     if (productId === cartItem.productId) {
//       matchingItem = cartItem;
//     }
//   });

//   if (matchingItem) {
//     matchingItem.quantity += 1;
//   } else {
//     cart.push({
//       productId: productId,
//       quantity: 1,
//       deliveryOptionId: '1'
//     });
//   }

//   saveToStorage();
// }

// export function removeFromCart(productId) {
//   const newCart = [];

//   cart.forEach((cartItem) => {
//     if (cartItem.productId !== productId) {
//       newCart.push(cartItem);
//     }
//   });

//   cart = newCart;

//   saveToStorage();
// }

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