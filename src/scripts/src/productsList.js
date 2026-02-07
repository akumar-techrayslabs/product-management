var existingItems = localStorage.getItem('formData');
console.log(existingItems);
//  const item = JSON.parse(JSON.parse(existingItems))
if (existingItems) {
    var products = JSON.parse(existingItems);
    console.log("type of products ", typeof products);
    console.log(products);
    var tableBody_1 = document.querySelector("#productTable tbody");
    products.forEach(function (product) {
        var pro = JSON.parse(product);
        console.log(pro);
        console.log("product_id", pro.product_id);
        var row = document.createElement("tr");
        row.innerHTML = "\n      <td class=\"py-3 px-2 bg-gray-200\">".concat(pro.product_id, "</td>\n      <td class=\"py-3 px-2 bg-gray-200\">").concat(pro.product_title_value, "</td>\n      <td class=\"py-3 px-2 bg-gray-200\">").concat(pro.product_brand_value, "</td>\n      <td class=\"py-3 px-2 bg-gray-200\">").concat(pro.product_category_value, "</td>\n      <td class=\"py-3 px-2 bg-gray-200\">").concat(pro.product_price_value, "</td>\n      <td class=\"py-3 px-2 bg-gray-200\">").concat(pro.product_stock_value, "</td>\n    ");
        tableBody_1.appendChild(row);
    });
}
else {
    console.log("No product data found in localStorage.");
}
