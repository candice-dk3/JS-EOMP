let cart = JSON.parse(localStorage.getItem("cart"));

let cartTableBody = document.getElementById('cart-items');
let totalPriceElement = document.getElementById('total-price');

function displayCartItems() {
  cartTableBody.innerHTML = '';
  let totalPrice = 0;
  cart.forEach(item => {
    let row = `
      <tr>
        <td>${item.name}</td>
        <td>R ${item.price.toFixed(2)}</td>
        <td>1</td>
        <td>R ${item.price.toFixed(2)}</td>
      </tr>
    `;
    cartTableBody.innerHTML += row;
    totalPrice += item.price;
  });
  totalPriceElement.textContent = `Total Price: R ${totalPrice.toFixed(2)}`;
}

displayCartItems();