import { cart, addToCart } from './data/cart.js';
import { products } from './data/products.js';

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
  <div class="product-card">
    <img src="${product.image}" alt="${product.name}">
    <p>${product.name}</p>
    <p>R ${product.price}</p>
    <button class="view-more-btn" value="${product.id}">View More</button>
    <button class="purchase  js-add-to-cart" value="${product.id}">Purchase</button>
  </div>
  `;
  let viewMoreButtons = document.querySelectorAll('.view-more-btn');
    viewMoreButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        let id = event.target.value;
        let selectedItem = items.find(item => item.id == id);
        displayModal(selectedItem);
      });
    });
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector('.js-cart-quantity')
    .innerHTML = cartQuantity;
}

document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      addToCart(productId);
      updateCartQuantity();
    });
});


  
let modal = document.getElementById('myModal');
let closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', () => {
modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
if (event.target == modal) {
    modal.style.display = 'none';
}
});

function displayModal(item) {
  let modalImage = document.getElementById('modal-image');
  let modalName = document.getElementById('modal-name');
  let modalCategory = document.getElementById('modal-category');
  let modalDescription = document.getElementById('modal-description');
  let modalPrice = document.getElementById('modal-price');
  modalImage.src = item.image;
  modalName.textContent = item.name;
  modalCategory.textContent = `Category: ${item.category}`;
  modalDescription.textContent = `Description: ${item.description}`;
  modalPrice.textContent = `Price: R ${item.price.toFixed(2)}`;
  modal.style.display = 'block';
}



// Search bar //
document.getElementById('searchButton').addEventListener('click', () => {
    let searchInput = document.getElementById('searchInput').value.toLowerCase();
    let categoryFilter = document.getElementById('categoryFilter').value;
    let filteredItems = items.filter(item => {
        let matchesSearch = item.name.toLowerCase().includes(searchInput);
        let matchesCategory = categoryFilter ? item.category === categoryFilter : true;
        return matchesSearch && matchesCategory;
    });
    displayItems(filteredItems);
});