function showWarning() {
    Swal.fire({
        title: 'Warning!',
        text: 'No Any data ',
        icon: 'pending',
        confirmButtonText: 'OK'
    });
}
function showDelete() {
    Swal.fire({
        title: 'Suucess!',
        text: 'Product Deleted Successfully',
        icon: 'success',
        confirmButtonText: 'OK'
    }).then(() => {
        window.location.reload();
    });
}
window.showWarning = showWarning;
window.showDelete = showDelete;
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
      <td class="py-3 px-2 bg-gray-200 "> <i class="fa-solid fa-trash cursor-pointer" style="color: #1e2939;" onclick="deleteProduct(${product.product_id})"></i>
      </td>
    `;
            tableBody.appendChild(row);
        });
    }
    function deleteProduct(id) {
        const delProduct = products.filter((product) => product.product_id !== id);
        const updatedProduct = delProduct.map((p) => JSON.stringify(p));
        showDelete();
        localStorage.setItem("formData", JSON.stringify(updatedProduct));
    }
    window.deleteProduct = deleteProduct;
}
export {};
//# sourceMappingURL=productsList.js.map