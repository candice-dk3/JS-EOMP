function CreateItem(id, name, category, image, description, price) {
  this.id = id;
  this.name = name;
  this.category = category;
  this.image = image;
  this.description = description;
  this.price = price;
}
let item1 = new CreateItem(
  1,
  "Indulge 60ml",
  "Perfume",
  "https://github.com/candice-dk3/JS-EOMP-Images/blob/main/indulge.png?raw=true",
  "Step into a world of unparalleled luxury and sophistication with Indulge, an exquisite Eau de Parfum crafted for those who seek the finer things in life. Indulge captivates with its rich blend of opulent notes, designed to allure and enchant.",
  120
);
let item2 = new CreateItem(
  2,
  "Black Onyx 100ml",
  "Perfume",
  "https://github.com/candice-dk3/JS-EOMP-Images/blob/main/black-onyx.png?raw=true",
  "A captivating blend of dark plum and blackcurrant intertwines with the zest of bergamot, creating an enigmatic and invigorating opening.",
  100
);
let item3 = new CreateItem(
  3,
  "Olympea 80ml",
  "Perfume",
  "https://github.com/candice-dk3/JS-EOMP-Images/blob/main/olympea.png?raw=true",
  "A luminous burst of green mandarin and aquatic jasmine sets a fresh and invigorating tone, mingled with the subtle sweetness of ginger lily.",
  100
);
let item4 = new CreateItem(
  4,
  "Victoria Secret - Rush 250ml",
  "Body Mist",
  "https://github.com/candice-dk3/JS-EOMP-Images/blob/main/body-mist-1.png?raw=true",
  "Perfect for daily wear, whether you're heading to work, running errands, or enjoying a casual day out. Rush is your go-to body mist for an instant pick-me-up and a burst of freshness.",
  230
);
let item5 = new CreateItem(
  5,
  "Victoria Secret - Love Spell   250ml",
  "Body Mist",
  "https://github.com/candice-dk3/JS-EOMP-Images/blob/main/body-mist-2.png?raw=true",
  "Love Spell is a captivating blend of cherry blossom and juicy peach, creating a flirty, floral, and fruity fragrance that enchants the senses.",
  230
);
let item6 = new CreateItem(
  6,
  "Victoria Secret - Pure Seduction   250ml",
  "Body Mist",
  "https://github.com/candice-dk3/JS-EOMP-Images/blob/main/body-mist-3.png?raw=true",
  "Pure Seduction is a seductive blend of red plum and freesia, creating a bold, fruity, and floral fragrance that is irresistibly alluring.",
  230
);
let item7 = new CreateItem(
  7,
  "Coco Lotion Body Lotion  414ml",
  "Body Lotion",
  "https://github.com/candice-dk3/JS-EOMP-Images/blob/main/body-lotion-1.png?raw=true",
  "Coco Lotion is inspired by the natural beauty and calming essence of the tropics. It's designed to give your skin the ultimate hydration and a touch of paradise.",
  350
);
let item8 = new CreateItem(
  8,
  "Water Lotion Body Lotion  414ml",
  "Body Lotion",
  "https://github.com/candice-dk3/JS-EOMP-Images/blob/main/body-lotion-2.png?raw=true",
  "Water Lotion is inspired by the refreshing and rejuvenating qualities of water. It's designed to quench your skin's thirst, leaving it feeling hydrated and healthy.",
  350
);
let item9 = new CreateItem(
  9,
  "Rosewater Lotion Body Lotion  414ml",
  "Body Lotion",
  "https://github.com/candice-dk3/JS-EOMP-Images/blob/main/body-lotion-3.png?raw=true",
  "Rosewater Lotion is inspired by the timeless beauty and soothing properties of roses. It's designed to offer your skin a touch of elegance and tranquility.",
  350
);

let items = [item1, item2, item3, item4, item5, item6, item7, item8, item9];
localStorage.setItem("items", JSON.stringify(items));

function displayItems(items) {
    let productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';
    items.forEach(item => {
      productGrid.innerHTML += `
        <div class="product-card">
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name}</p>
            <p>R ${item.price}</p>
            <button class="view-more-btn" value="${item.id}">View More</button>
            <button class="purchase" value="${item.id}">Purchase</button>
        </div>
      `;
    });
    let viewMoreButtons = document.querySelectorAll('.view-more-btn');
    viewMoreButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        let id = event.target.value;
        let selectedItem = items.find(item => item.id == id);
        displayModal(selectedItem);
      });
    });
    let purchaseButtons = document.querySelectorAll('.purchase');
    purchaseButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        addToCart(event.target.value);
      });
    });
  }

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

  function addToCart(id) {
    let items = JSON.parse(localStorage.getItem('items'));
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let item = items.find(item => item.id == id);
    let cartItem = cart.find(item => item.id == id);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.push({...item, quantity: 1});
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${item.name} has been added to your cart.`);
  }
function addToCart(id) {
    let items = JSON.parse(localStorage.getItem('items'));
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let item = items.find(item => item.id == id);
    let cartItem = cart.find(item => item.id == id);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({...item, quantity: 1});
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${item.name} has been added to your cart.`);
}
displayItems(items);
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
