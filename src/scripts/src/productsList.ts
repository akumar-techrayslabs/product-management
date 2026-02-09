

interface Product{
  product_id:string;
  product_title_value:string;
  product_brand_value:string;
  product_category_value:string;
  product_price_value:number;
  product_stock_value:number;
}

declare var Swal: any;


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
  }).then(()=>{
  window.location.reload();

  });
}
function showUpdate() {
  Swal.fire({
    title: 'Suucess!',
    text: 'Product Updated Successfully',
    icon: 'success', 
    confirmButtonText: 'OK'
  }).then(()=>{
    window.location.reload();
  });
}

(window as any).showWarning = showWarning;
(window as any).showDelete = showDelete;
(window as any).showUpdate = showUpdate;
 const existingItems = localStorage.getItem('formData');

 if(!existingItems)
 {
    showWarning();
 }
 else{
  let product:string[] = JSON.parse(existingItems);

  const products: Product[] = product.map((pro)=>JSON.parse(pro));

 console.log(existingItems);
 


  
  const tableBody = document.querySelector("#productTable tbody") as HTMLTableSectionElement | null;


    if(!tableBody)
    {
      console.log("Table body not found ");
    }
    else{
        products.forEach((product: Product) => {
    
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
    

    

    function deleteProduct(id:string):void
{
  const delProduct = products.filter((product) =>product.product_id != id);
  const updatedProduct = delProduct.map((p)=>JSON.stringify(p));
  localStorage.setItem("formData",JSON.stringify(updatedProduct));
  showDelete();
}
(window as any).deleteProduct = deleteProduct

function getProductsFromStorage():Product[]{
  const data = localStorage.getItem("formData");
  if(!data) return[];
  return JSON.parse(data).map((p:string) =>JSON.parse(p));
}

  function editProduct(id:string):void
  {
    
    const product = products.find((product) => product.product_id ==id)
    if(!product) return;

    const editform = document.getElementById("edit-form") as HTMLElement;
    editform.classList.remove('hidden');
    editform.classList.add('absolute');

    const table = document.getElementById("productTable") as HTMLElement;
    table.classList.add('hidden');

    (document.getElementById("productId") as HTMLInputElement).value = product.product_id;

    (document.getElementById("product-title") as HTMLInputElement).value = product.product_title_value;

    (document.getElementById("product-brand") as HTMLInputElement).value = product.product_brand_value;


    (document.getElementById("product-category") as HTMLInputElement).value = product.product_category_value;

    (document.getElementById("product-price") as HTMLInputElement).value = String(product.product_price_value);

    (document.getElementById("product-stock") as HTMLInputElement).value = String(product.product_stock_value);    



  }

  (window as any).editProduct = editProduct

  function updatedProduct():void {
    const id = (document.getElementById("productId") as HTMLInputElement).value;
    console.log(id);

    console.log( (document.getElementById("product-title") as HTMLInputElement).value);
    
    const updatedProduct: Product = {

      product_id: (document.getElementById("productId") as HTMLInputElement).value,
      product_title_value: (document.getElementById("product-title") as HTMLInputElement).value,
      product_brand_value : (document.getElementById("product-brand") as HTMLInputElement).value,
      product_category_value: (document.getElementById("product-category") as HTMLInputElement).value,
      product_price_value: Number((document.getElementById("product-price") as HTMLInputElement).value) ,
      product_stock_value: Number(((document.getElementById("product-stock") as HTMLInputElement).value))

    };

    const updatedProducts = products.map((product)=>product.product_id == id? updatedProduct: product);
    console.log(updatedProducts);
    

    const updatedString = updatedProducts.map((p)=>JSON.stringify(p));

    localStorage.setItem("formData",JSON.stringify(updatedString));
    document.getElementById("edit-form")?.classList.add("hidden");
    document.getElementById("productTable")?.classList.remove("hidden");
    showUpdate();

  }

  (window as any).updatedProduct = updatedProduct;

  const btn = document.getElementById("edit-btn") as HTMLButtonElement;

  btn?.addEventListener("click",(e)=>{
    e.preventDefault();
    updatedProduct();

  })
  }  




