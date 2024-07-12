import { cart, removeFromCart } from '../data/cart.js';
import { getProduct } from '../data/products.js';

export function renderOrderSummary() {
  let cartSummaryHTML = '';

  cart.forEach((cartItem) => {
    getProduct();
    const productId = cartItem.productId;

    cartSummaryHTML += `
      <div class="cart-item-container js-cart-item-container js-cart-item-container-${productId}">
        <div class="cart-item-details-grid">
          <img class="product-image" src="${item.image}">
          <div class="cart-item-details">
            <div class="product-name">${item.name}</div>
            <div class="product-price">$${item.price}</div>
            <div class="product-quantity js-product-quantity-${productId}">
              <span>Quantity: <span class="quantity-label">${item.quantity}</span></span>
              <span class="update-quantity-link link-primary">Update</span>
              <span class="delete-quantity-link link-primary js-delete-link js-delete-link-${productId}" data-product-id="${productId}">Delete</span>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  const orderSummaryContainer = document.querySelector('.js-order-summary');
  if (orderSummaryContainer) {
    orderSummaryContainer.innerHTML = cartSummaryHTML;

    document.querySelectorAll('.js-delete-link').forEach((link) => {
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        removeFromCart(productId);

        const container = document.querySelector(`.js-cart-item-container-${productId}`);
        if (container) {
          container.remove();
        }
        renderOrderSummary();
      });
    });
  }
}
