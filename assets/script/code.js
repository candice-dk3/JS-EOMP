let cart = [];

function addToCart(itemId) {
  let selectedItem = items.find(item => item.id == itemId);
  cart.push(selectedItem);
  localStorage.setItem("cart", JSON.stringify(cart));
}
document.getElementById('checkoutButton').addEventListener('click', () => {
  window.location.href = 'checkout.html';
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
