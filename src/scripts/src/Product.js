

var form = document.getElementById('product-form');
var formData = new FormData(form);
var Swal;
function showAlert() {
    Swal.fire({
        title: 'Success!',
        text: 'Product Added Successfully',
        icon: 'success',
        confirmButtonText: 'OK'
    });
}
function showWarning() {
    Swal.fire({
        title: 'Warning!',
        text: 'Insert the valid Type',
        icon: 'pending',
        confirmButtonText: 'OK'
    });
}
window.showAlert = showAlert;
window.showWarning = showWarning;
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var product_id;
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    product_id = randomNumber;
    var product_title = document.getElementById("product-title");
    var product_title_value = product_title.value;
    var product_brand = document.getElementById("product-brand");
    var product_brand_value = product_brand.value;
    var product_category = document.getElementById("product-category");
    var product_category_value = product_category.value;
    var product_price = document.getElementById("product-price");
    var product_price_value = product_price.value;
    var product_stock = document.getElementById("product-stock");
    var product_stock_value = product_stock.value;
    if (typeof product_title_value !== "string" && typeof product_brand_value !== "string" && typeof product_category_value !== "string" && typeof product_price_value !== "string" && typeof product_stock_value !== "string") {
        showWarning();
        return;
    }
    console.log(product_title_value);
    try {
        var existingItems = JSON.parse(localStorage.getItem('formData') || '[]');
        existingItems.push(JSON.stringify({
            product_id: product_id,
            product_title_value: product_title_value,
            product_brand_value: product_brand_value,
            product_category_value: product_category_value,
            product_price_value: product_price_value,
            product_stock_value: product_stock_value
        }));
        localStorage.setItem('formData', JSON.stringify(existingItems));
        console.log('Form data saved successfully.');
        showAlert();
        form.reset();
    }
    catch (error) {
        console.error('Error saving data to localStorage:', error);
    }
});
