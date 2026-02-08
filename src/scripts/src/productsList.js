"use strict";
exports.__esModule = true;
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
    }).then(function () {
        window.location.reload();
    });
}
function showUpdate() {
    Swal.fire({
        title: 'Suucess!',
        text: 'Product Updated Successfully',
        icon: 'success',
        confirmButtonText: 'OK'
    }).then(function () {
        window.location.reload();
    });
}
window.showWarning = showWarning;
window.showDelete = showDelete;
window.showUpdate = showUpdate;
var existingItems = localStorage.getItem('formData');
if (!existingItems) {
    showWarning();
}
else {
    var product = JSON.parse(existingItems);
    var products_1 = product.map(function (pro) { return JSON.parse(pro); });
    console.log(existingItems);
    var tableBody_1 = document.querySelector("#productTable tbody");
    if (!tableBody_1) {
        console.log("Table body not found ");
    }
    else {
        products_1.forEach(function (product) {
            var row = document.createElement("tr");
            row.innerHTML = "\n      <td class=\"py-3 px-2 bg-gray-200\">".concat(product.product_id, "</td>\n      <td class=\"py-3 px-2 bg-gray-200\">").concat(product.product_title_value, "</td>\n      <td class=\"py-3 px-2 bg-gray-200\">").concat(product.product_brand_value, "</td>\n      <td class=\"py-3 px-2 bg-gray-200\">").concat(product.product_category_value, "</td>\n      <td class=\"py-3 px-2 bg-gray-200\">").concat(product.product_price_value, "</td>\n      <td class=\"py-3 px-2 bg-gray-200\">").concat(product.product_stock_value, "</td>\n      <td class=\"py-3 px-2 bg-gray-200 \"> <i class=\"fa-solid fa-trash cursor-pointer\" style=\"color: #1e2939;\" onclick=\"deleteProduct(").concat(product.product_id, ")\"></i>\n      </td>\n      <td class=\"py-3 px-2 bg-gray-200 \"> <i class=\"fa-solid fa-pen-to-square cursor-pointer\" style=\"color: #1e2939;\" onclick=\"editProduct(").concat(product.product_id, ")\"></i>\n      </td>\n    ");
            tableBody_1.appendChild(row);
        });
    }
    function deleteProduct(id) {
        var delProduct = products_1.filter(function (product) { return product.product_id != id; });
        var updatedProduct = delProduct.map(function (p) { return JSON.stringify(p); });
        showDelete();
        localStorage.setItem("formData", JSON.stringify(updatedProduct));
    }
    window.deleteProduct = deleteProduct;
    function editProduct(id) {
        var product = products_1.find(function (product) { return product.product_id === id; });
        if (!product)
            return;
        var editform = document.getElementById("edit-form");
        editform.classList.remove('hidden');
        editform.classList.add('absolute');
        var table = document.getElementById("productTable");
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
        var id = document.getElementById("productId").value;
        console.log(id);
        console.log(document.getElementById("product-title").value);
        var updatedProduct = {
            product_id: document.getElementById("productId").value,
            product_title_value: document.getElementById("product-title").value,
            product_brand_value: document.getElementById("product-brand").value,
            product_category_value: document.getElementById("product-category").value,
            product_price_value: Number(document.getElementById("product-price").value),
            product_stock_value: Number((document.getElementById("product-stock").value))
        };
        var updatedProducts = products_1.map(function (product) { return product.product_id == id ? updatedProduct : product; });
        console.log(updatedProducts);
        var updatedString = updatedProducts.map(function (p) { return JSON.stringify(p); });
        localStorage.setItem("formData", JSON.stringify(updatedString));
        showUpdate();
    }
    window.updatedProduct = updatedProduct;
    var btn = document.getElementById("edit-btn");
    btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function (e) {
        e.preventDefault();
        updatedProduct();
    });
}
