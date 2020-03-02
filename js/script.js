//Backend
function PizzaPrice(totalSizePrice,crustType,toppingsTotalPrice,quantity){
	this.totalSizePrice = totalSizePrice,
	this.crustType = crustType,
	this.toppingsTotalPrice = toppingsTotalPrice,
	this.quantity = quantity
}

PizzaPrice.prototype.calculatePizzaPrice = function() {
	return this.quantity *(this.totalSizePrice + this.crustType + this.toppingsTotalPrice)
}



$(document).ready( function ()
{
$('#pizz').submit(function(event){
	
	let selectedPizzaCrust = parseInt($("input[name = 'crust']:checked").val())

	 let selectedPizzaSizes = []
	 let totalSizePrice = 0
	 let toppingsTotalPrice = 0
	 $("input[name='size']:checked").each(function(){
		 selectedPizzaSizes.push(parseInt($(this).val()))
	 })

	 totalSizePrice = selectedPizzaSizes.reduce((totalSizePrice,element) => totalSizePrice + element)
	//  console.log(totalSizePrice)


	let selectedToppingPrices =[]
	$("input[name='Sauce']:checked").each(function(){
		selectedToppingPrices.push(parseInt($(this).val()))
	})

	toppingsTotalPrice = selectedToppingPrices.reduce((toppingsTotalPrice,topping) => toppingsTotalPrice + topping)
	// console.log(toppingsTotalPrice)

	let pizzaQuantity = selectedPizzaSizes.length

	//Create a new instance of the object PizzaPrice
	let newPizza = new PizzaPrice(totalSizePrice, selectedPizzaCrust,toppingsTotalPrice, pizzaQuantity)
	let pizzaCost = newPizza.calculatePizzaPrice()


	//Get the delivery info
	let delivery = $("input[name='delivery']:checked").val()
	let deliveryCost=0 

	function getDelivery(){
		if (delivery ==='delivery'){
			let location = prompt("Enter the location of delivery")
			deliveryCost=250
		}else{
			return false
		}
	}

		getDelivery()
	pizzaCost += deliveryCost

	// console.log(pizzaCost)



	$("#total").val(`${pizzaCost}`)
	$("#quantity").val(`${pizzaQuantity}`)
	$("#toppings").val(`${toppingsTotalPrice}`)
	$("#sizes").val(`${totalSizePrice}`)

	$(".output").show();

	$("#total").append("<li><span class='container'>" +"You selected " +toppingNames+"</span></li>");  
 	$("#total").append("<li><span class='container'>" +"You orderd " + inputedNumberOfPizzas +" "+ inputedSizeName +""  + "</span></li>"); 
 	$("#total").append("<li><span class='container'>" +"You selected " +selectedCrustName + "</span></li>");
 	$("#total").append("<li><span class='container'>" +"Total cost is ksh: "+ totalCost+ " "+"</span></li>");




  

	event.preventDefault()
});
  

});