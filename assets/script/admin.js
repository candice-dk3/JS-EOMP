document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('table-products');

    let items = JSON.parse(localStorage.getItem('items')) || [];

    function renderTable() {
        tableBody.innerHTML = '';
        items.forEach((item, index) => {
            tableBody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.name}</td>
                    <td><img class="product-image" src="${item.image}" width="100" height="100"></td>
                    <td>${item.category}</td>
                    <td>${item.description}</td>
                    <td>${item.price}</td>
                    <td><button class="btn btn-danger delete-btn" data-id="${index}">Delete</button></td>
                </tr>
            `;
        });

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', () => {
                const id = button.getAttribute('data-id');
                items.splice(id, 1);
                localStorage.setItem('items', JSON.stringify(items));
                renderTable();
            });
        });
    }

    renderTable();
});
