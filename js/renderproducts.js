const products = [
  {
    name: "Product Name Here",
    price: "$25.99",
    image: "/images/products/product1.jpg",
  },
  {
    name: "Product Name Here",
    price: "$25.99",
    image: "/images/products/product2.jpg",
  },
  {
    name: "Product Name Here",
    price: "$25.99",
    image: "/images/products/product3.jpg",
  },
  {
    name: "Product Name Here",
    price: "$25.99",
    image: "/images/products/product4.jpg",
  },
  {
    name: "Product Name Here",
    price: "$25.99",
    image: "/images/products/product5.jpg",
  },
  {
    name: "Product Name Here",
    price: "$25.99",
    image: "/images/products/product6.jpg",
  },
  {
    name: "Product Name Here",
    price: "$25.99",
    image: "/images/products/product7.jpg",
  },
  {
    name: "Product Name Here",
    price: "$25.99",
    image: "/images/products/product8.jpg",
  },
  // Add more...
];

const productList = document.getElementById("product-list");

products.forEach((product) => {
  const li = document.createElement("li");
  li.className = "bg-white  group cursor-pointer ";

  li.innerHTML = `
      <div class="overflow-hidden rounded-  mb-1"><img src="${product.image}" alt="${product.name}" class="w-full   group-hover:scale-[1.1] duration-100 ease-out " /></div>
      <h3 class=" responsive-text-name font-semibold product-title">${product.name}</h3>
      <p class=" responsive-text-price text-[#4A9E14]">Starting from: <span class="font-semibold">${product.price}</span></p>
    `;

  const a = document.createElement("a");
  a.href = `productDetails.html?index=${products.indexOf(product)}`; // Replace with actual product link if needed
  a.appendChild(li);

  productList.appendChild(a);
});
