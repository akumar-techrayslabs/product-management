function showWarning() {
    Swal.fire({
        title: 'Warning!',
        text: 'No Any data ',
        icon: 'pending',
        confirmButtonText: 'OK'
    });
}
window.showWarning = showWarning;
var existingItems = localStorage.getItem('formData');
if (!existingItems) {
    showWarning();
}
else {
    var product = JSON.parse(existingItems);
    var products = product.map(function (pro) { return JSON.parse(pro); });
    console.log(existingItems);
    var tableBody_1 = document.querySelector("#productTable tbody");
    if (!tableBody_1) {
        console.log("Table body not found ");
    }
    else {
        products.forEach(function (product) {
            var row = document.createElement("tr");
            row.innerHTML = "\n      <td class=\"py-3 px-2 bg-gray-200\">".concat(product.product_id, "</td>\n      <td class=\"py-3 px-2 bg-gray-200\">").concat(product.product_title_value, "</td>\n      <td class=\"py-3 px-2 bg-gray-200\">").concat(product.product_brand_value, "</td>\n      <td class=\"py-3 px-2 bg-gray-200\">").concat(product.product_category_value, "</td>\n      <td class=\"py-3 px-2 bg-gray-200\">").concat(product.product_price_value, "</td>\n      <td class=\"py-3 px-2 bg-gray-200\">").concat(product.product_stock_value, "</td>\n    ");
            tableBody_1.appendChild(row);
        });
    }
}
