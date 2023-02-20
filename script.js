// Cart //
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#close-cart");

//Open 
cartIcon.addEventListener("click", () => {
	cart.classList.add("active");

});
//Close
closeCart.addEventListener("click", () => {
	cart.classList.remove("active");

});

if (document.readyState == "loading") {
	document.addEventListener("DOMContentLoaded", start);
} else {
	start();
}

//// START ////////
function start() {
	addEvents();
}



///// UPDATE & RERENDER ////
function update() {
	addEvents();
	updateTotal();
}

//// add events /////
function addEvents() {

	let cartRemove_btns = document.querySelectorAll(".cart-remove");
	console.log(cartRemove_btns);
	cartRemove_btns.forEach((btn) => {
		btn.addEventListener("click", handle_removeCartItem);
	});

	let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");
	cartQuantity_inputs.forEach(input => {
		input.addEventListener("change", handle_changeItemQuantity);
	});

	let addCart_btns = document.querySelectorAll(".add-cart");
	addCart_btns.forEach((btn) => {
		btn.addEventListener("click", handle_addCartItem);
	});
}

function handle_addCartItem() {
	let product = this.parentElement;
	let title = product.querySelector(".product-title").innerHTML;
	let price = product.querySelector(".price").innerHTML;
	let imgSrc = product.querySelector(".product-img").src;
	console.log(title, price, imgSrc);

	let newToAdd = {
		title,
		price,
		imgSrc,
	};

	let cartBoxElement = CartBoxComponent(title, price, imgSrc);
	let newNode = document.createElement("div");
	newNode.innerHTML = cartBoxElement;
	const cartContent = cart.querySelector(".cart-content");
	cartContent.appendChild(newNode);
}

function handle_removeCartItem() {
	this.parentElement.remove();

	update();
}

function handle_changeItemQuantity() {
	if(isNaN(this.value) || this.value < 1) {
		this.value = 1;
	}
	this.value = Math.floor(this.value);

	update();
}

/////// UPDATE & RERENDER FUNCTIONS//////
function updateTotal() {
	let cartBoxes = document.querySelectorAll(".cart-box");
	const totalElement = cart.querySelector(".total-price");
	let total = 0;
	cartBoxes.forEach((cartBox) => {
		let priceElement = cartBox.querySelector(".cart-price");
		let price = parseFloat(priceElement.innerHTML.replace("₱", ""));
		let quantity = cartBox.querySelector(".cart-quantity").value;
		total += price * quantity;
	});

	total = total.toFixed(2);

	  

	totalElement.innerHTML = "₱" + total;
}

////// HTML COMPONENTS ////////
function CartBoxComponent(title, price, imgSrc){
	return `
	<div class="cart-box">
	<img src=${imgSrc} alt="" class="cart-img">
		<div class="detail-box">
			<div class="cart-product-title">${title}</div>
			<div class="cart-price">${price}</div>
			<input type="number" value="1" class="cart-quantity">
		</div>
		<i class='bx bxs-trash-alt cart-remove'></i>
	</div>`;

}
						



const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('activate');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('activate');
    })
}




