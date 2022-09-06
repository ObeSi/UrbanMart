let carts = document.querySelectorAll('.add-cart');
let product = [
	{
		name:'Dairy Milk',
		tag:'dairymilk',
		price:20,
		inCart:0
	},

	{
		name:'Five Star',
		tag:'fivestar',
		price:10,
		inCart:0
	},

	{
		name:'Coca Cola',
		tag:'cocacola',
		price:40,
		inCart:0
	},
	{
		name:'Pepsi',
		tag:'pepsi',
		price:80,
		inCart:0
	},
	{
		name:'Maggi',
		tag:'maggi',
		price:15,
		inCart:0
	},
	{
		name:'American Style & Cream Onion',
		tag:'greenchips',
		price:20,
		inCart:0
	},
	{
		name:'Cheddar & Sour Cream',
		tag:'orangechips',
		price:10,
		inCart:0
	},
	{
		name:'Funtastic Ice Cream',
		tag:'funaticicecream',
		price:30,
		inCart:0
	},

]
for (let i=0; i < carts.length; i++){
	carts[i].addEventListener('click', () => {
		cartNumbers(product[i]);
		totalCost(product[i]);
   
	})
}

function onLoadCartNumber(){
	let productNumbers = localStorage.getItem('cartNumbers');

	if (productNumbers){
		document.querySelector('.cart span').textContent =  productNumbers;
	}
}

function cartNumbers(product){
	
	let productNumbers = localStorage.getItem('cartNumbers');
	productNumbers = parseInt(productNumbers);

	if( productNumbers ){
		localStorage.setItem('cartNumbers', productNumbers + 1);
		document.querySelector('.cart span').textContent =  productNumbers + 1;
	}
	else{
		localStorage.setItem('cartNumbers', 1); 
		document.querySelector('.cart span').textContent = 1;
	}

	setItems(product);
	
}

function setItems(product){
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);

	if (cartItems != null){

		if (cartItems[product.tag] == undefined){
			cartItems = {
				...cartItems,
				[product.tag]: product
			}
		}
		cartItems[product.tag].inCart +=1;
	}else{
		product.inCart = 1;
	    cartItems = {
		   [product.tag]:product
	    }
	}

	
	localStorage.setItem('productsInCart', JSON.stringify (cartItems));
}

function clearcart(){
	localStorage.setItem('cartNumbers', productNumbers = 0);
	localStorage.clear;
	document.querySelector('.cart span').textContent = 0;
}

function totalCost(product){
	// console.log('The products price is', product.price);
	let cartCost =localStorage.getItem('totalCost');
	
	console.log("My cartCost is", cartCost);
	console.log(typeof cartCost);
	localStorage.setItem("totalCost", product.price);

	if (cartCost != null){
		cartCost = parseInt(cartCost);
		localStorage.setItem("totalCost", cartCost + product.price);
	}
	else{
		localStorage.setItem("totalCost", product.price);
	}
}

function displayCart(){
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
	let productContainer = document.querySelectorAll(".products-container");

	 if(cartItems && productContainer){
		productContainer.innerHTML = '';
		Object.values(cartItems).map(item => {
			productContainer.innerHTML += `
			<h1>Hello</h1>`
		
		});
		
	 }
}

onLoadCartNumber();
displayCart();