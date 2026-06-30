let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cartItems");
const totalItems = document.getElementById("totalItems");

function displayCart(){

cartItems.innerHTML = "";

if(cart.length === 0){

cartItems.innerHTML = `
<h2 style="text-align:center; margin-top:30px;">
Your Cart is Empty 🛒
</h2>
`;

totalItems.innerHTML = "";

return;

}

cart.forEach((product,index)=>{

cartItems.innerHTML += `

<div class="cart-card">

<img src="${product.image}" alt="${product.name}">

<div class="cart-info">

<h3>${product.name}</h3>

<p>${product.category}</p>

</div>

<button class="remove-btn" onclick="removeItem(${index})">

Remove

</button>

</div>

`;

});

totalItems.innerHTML = `Total Products : ${cart.length}`;

}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

displayCart();

}

displayCart();
