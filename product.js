const params = new URLSearchParams(window.location.search);

const productName = params.get("name");

const product = products.find(p => p.name === productName);

const container = document.getElementById("productDetails");

if(product){

container.innerHTML = `

<img src="${product.image}" alt="${product.name}">

<h2>${product.name}</h2>

<p><strong>Category:</strong> ${product.category}</p>

<p>Premium Quality Product</p>

<a class="order-btn"
href="https://wa.me/919507059053?text=${encodeURIComponent("Hello, I want to order " + product.name)}"
target="_blank">

Order on WhatsApp

</a>

`;

}else{

container.innerHTML = "<h2>Product Not Found</h2>";

}
