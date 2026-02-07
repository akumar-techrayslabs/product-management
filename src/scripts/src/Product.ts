

const form = document.getElementById('product-form') as HTMLFormElement;
const formData = new FormData(form);

var Swal: any;

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


(window as any).showAlert = showAlert;
(window as any).showWarning = showWarning;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault(); 
    let product_id : number;
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    product_id = randomNumber;

    
    let product_title = document.getElementById("product-title") as HTMLInputElement;
    let product_title_value = product_title.value

    let product_brand = document.getElementById("product-title") as HTMLInputElement;
    let product_brand_value = product_brand.value

    let product_category = document.getElementById("product-title") as HTMLInputElement;
    let product_category_value = product_category.value


    let product_price = document.getElementById("product-title") as HTMLInputElement;
    let product_price_value = product_price.value

    let product_stock = document.getElementById("product-title") as HTMLInputElement;
    let product_stock_value = product_stock.value

    if(typeof product_title_value !== "string" && typeof product_brand_value !== "string" && typeof product_category_value !== "string" && typeof product_price_value !== "string" &&  typeof product_stock_value !=="string" )
    {
        showWarning();
        return;
    }
  

    console.log(product_title_value);

    try {
   const existingItems = JSON.parse(localStorage.getItem('formData') || '[]') as string[];
    existingItems.push(JSON.stringify({
        product_id,
        product_title_value,
        product_brand_value,
        product_category_value,
        product_price_value,
        product_stock_value

    }))

     localStorage.setItem('formData', JSON.stringify(existingItems));
    console.log('Form data saved successfully.');
    showAlert();
    form.reset();

  } catch (error) {
    console.error('Error saving data to localStorage:', error);
  }


  });



