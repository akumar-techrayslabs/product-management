
 const existingItems = localStorage.getItem('formData');
 console.log(existingItems);
 
//  const item = JSON.parse(JSON.parse(existingItems))

if (existingItems) {
  const products = JSON.parse(existingItems); 
  console.log("type of products ",typeof products);
  
  console.log(products);
  
  const tableBody = document.querySelector("#productTable tbody") as HTMLTableSectionElement;


  products.forEach((product: string) => {
    let pro =JSON.parse(product)
    console.log(pro);
    console.log("product_id",pro.product_id);
    
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="py-3 px-2 bg-gray-200">${pro.product_id}</td>
      <td class="py-3 px-2 bg-gray-200">${pro.product_title_value}</td>
      <td class="py-3 px-2 bg-gray-200">${pro.product_brand_value}</td>
      <td class="py-3 px-2 bg-gray-200">${pro.product_category_value}</td>
      <td class="py-3 px-2 bg-gray-200">${pro.product_price_value}</td>
      <td class="py-3 px-2 bg-gray-200">${pro.product_stock_value}</td>
    `;
    tableBody.appendChild(row);
  });
} else {
  console.log("No product data found in localStorage.");
}   