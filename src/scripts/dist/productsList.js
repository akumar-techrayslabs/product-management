function showWarning() {
    Swal.fire({
        title: 'Warning!',
        text: 'No Any data ',
        icon: 'pending',
        confirmButtonText: 'OK'
    });
}
window.showWarning = showWarning;
const existingItems = localStorage.getItem('formData');
if (!existingItems) {
    showWarning();
}
else {
    let product = JSON.parse(existingItems);
    const products = product.map((pro) => JSON.parse(pro));
    console.log(existingItems);
    const tableBody = document.querySelector("#productTable tbody");
    if (!tableBody) {
        console.log("Table body not found ");
    }
    else {
        products.forEach((product) => {
            const row = document.createElement("tr");
            row.innerHTML = `
      <td class="py-3 px-2 bg-gray-200">${product.product_id}</td>
      <td class="py-3 px-2 bg-gray-200">${product.product_title_value}</td>
      <td class="py-3 px-2 bg-gray-200">${product.product_brand_value}</td>
      <td class="py-3 px-2 bg-gray-200">${product.product_category_value}</td>
      <td class="py-3 px-2 bg-gray-200">${product.product_price_value}</td>
      <td class="py-3 px-2 bg-gray-200">${product.product_stock_value}</td>
    `;
            tableBody.appendChild(row);
        });
    }
}
export {};
//# sourceMappingURL=productsList.js.map