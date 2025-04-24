const products = [
    { name: "Product Name Here", price: "$25.99", image: "/images/products/product1.jpg" },
    { name: "Product Name Here", price: "$25.99", image: "/images/products/product2.jpg" },
    { name: "Product Name Here", price: "$25.99", image: "/images/products/product3.jpg" },
    { name: "Product Name Here", price: "$25.99", image: "/images/products/product4.jpg" },
    { name: "Product Name Here", price: "$25.99", image: "/images/products/product5.jpg" },
    { name: "Product Name Here", price: "$25.99", image: "/images/products/product6.jpg" },
    { name: "Product Name Here", price: "$25.99", image: "/images/products/product7.jpg" },
    { name: "Product Name Here", price: "$25.99", image: "/images/products/product8.jpg" },
    // Add more...
  ];

  const productList = document.getElementById('product-list');

  products.forEach(product => {
    const li = document.createElement('li');
    li.className = "bg-white rounded group cursor-pointer ";

    li.innerHTML = `
      <div class="overflow-hidden rounded-md  "><img src="${product.image}" alt="${product.name}" class="w-full h-full mb-1 group-hover:scale-[1.1] duration-100 ease-out " /></div>
      <h3 class="text-[13.5px] font-semibold underline ">${product.name}</h3>
      <p class="text-[12px] text-[#4A9E14]"><span>Starting from: </span>${product.price}</p>
    `;

    productList.appendChild(li);
  });