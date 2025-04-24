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

  
const params = new URLSearchParams(window.location.search);
const index = parseInt(params.get("index"));

if (!isNaN(index) && products[index]) {
  const product = products[index];
  document.getElementById("product-image").src = product.image;
  document.getElementById("product-image").alt = product.name;

  // Optional: Add name and price if you include elements for them
  const nameEl = document.getElementById("product-name");
  const priceEl = document.getElementById("product-price");
  if (nameEl) nameEl.textContent = product.name;
  if (priceEl) priceEl.textContent = `Price: ${product.price}`;
}