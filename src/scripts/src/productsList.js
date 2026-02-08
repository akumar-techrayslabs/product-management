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
window.showWarning = showWarning;
window.showDelete = showDelete;
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
            row.innerHTML = "\n      <td class=\"py-3 px-2 bg-gray-200\">".concat(product.product_id, "</td>\n      <td class=\"py-3 px-2 bg-gray-200\">").concat(product.product_title_value, "</td>\n      <td class=\"py-3 px-2 bg-gray-200\">").concat(product.product_brand_value, "</td>\n      <td class=\"py-3 px-2 bg-gray-200\">").concat(product.product_category_value, "</td>\n      <td class=\"py-3 px-2 bg-gray-200\">").concat(product.product_price_value, "</td>\n      <td class=\"py-3 px-2 bg-gray-200\">").concat(product.product_stock_value, "</td>\n      <td class=\"py-3 px-2 bg-gray-200 \"> <i class=\"fa-solid fa-trash cursor-pointer\" style=\"color: #1e2939;\" onclick=\"deleteProduct(").concat(product.product_id, ")\"></i>\n      </td>\n    ");
            tableBody_1.appendChild(row);
        });
    }
    function deleteProduct(id) {
        var delProduct = products_1.filter(function (product) { return product.product_id !== id; });
        var updatedProduct = delProduct.map(function (p) { return JSON.stringify(p); });
        showDelete();
        localStorage.setItem("formData", JSON.stringify(updatedProduct));
    }
    window.deleteProduct = deleteProduct;
}
