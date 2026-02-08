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
function showUpdate() {
    Swal.fire({
        title: 'Suucess!',
        text: 'Product Updated Successfully',
        icon: 'success',
        confirmButtonText: 'OK'
    });
}
window.showWarning = showWarning;
window.showDelete = showDelete;
window.showUpdate = showUpdate;
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
      <td class="py-3 px-2 bg-gray-200 "> <i class="fa-solid fa-trash cursor-pointer" style="color: #1e2939;" onclick="deleteProduct('${product.product_id}')"></i>
      </td>
      <td class="py-3 px-2 bg-gray-200 "> <i class="fa-solid fa-pen-to-square cursor-pointer" style="color: #1e2939;" onclick="editProduct('${product.product_id}')"></i>
      </td>
    `;
            tableBody.appendChild(row);
        });
    }
    function deleteProduct(id) {
        const delProduct = products.filter((product) => product.product_id != id);
        const updatedProduct = delProduct.map((p) => JSON.stringify(p));
        localStorage.setItem("formData", JSON.stringify(updatedProduct));
        showDelete();
    }
    window.deleteProduct = deleteProduct;
    function getProductsFromStorage() {
        const data = localStorage.getItem("formData");
        if (!data)
            return [];
        return JSON.parse(data).map((p) => JSON.parse(p));
    }
    function editProduct(id) {
        const products = getProductsFromStorage();
        const product = products.find((product) => product.product_id === id);
        if (!product)
            return;
        const editform = document.getElementById("edit-form");
        editform.classList.remove('hidden');
        editform.classList.add('absolute');
        const table = document.getElementById("productTable");
        table.classList.add('hidden');
        document.getElementById("productId").value = product.product_id;
        document.getElementById("product-title").value = product.product_title_value;
        document.getElementById("product-brand").value = product.product_brand_value;
        document.getElementById("product-category").value = product.product_category_value;
        document.getElementById("product-price").value = String(product.product_price_value);
        document.getElementById("product-stock").value = String(product.product_stock_value);
    }
    window.editProduct = editProduct;
    function updatedProduct() {
        const id = document.getElementById("productId").value;
        console.log(id);
        console.log(document.getElementById("product-title").value);
        const updatedProduct = {
            product_id: document.getElementById("productId").value,
            product_title_value: document.getElementById("product-title").value,
            product_brand_value: document.getElementById("product-brand").value,
            product_category_value: document.getElementById("product-category").value,
            product_price_value: Number(document.getElementById("product-price").value),
            product_stock_value: Number((document.getElementById("product-stock").value))
        };
        const updatedProducts = products.map((product) => product.product_id == id ? updatedProduct : product);
        console.log(updatedProducts);
        const updatedString = updatedProducts.map((p) => JSON.stringify(p));
        localStorage.setItem("formData", JSON.stringify(updatedString));
        document.getElementById("edit-form")?.classList.add("hidden");
        document.getElementById("productTable")?.classList.remove("hidden");
        showUpdate();
    }
    window.updatedProduct = updatedProduct;
    const btn = document.getElementById("edit-btn");
    btn?.addEventListener("click", (e) => {
        e.preventDefault();
        updatedProduct();
    });
}
export {};
//# sourceMappingURL=productsList.js.map