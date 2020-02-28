//Backend
function PizzaPrice(pizzaSize,crustType,toppingsTotalPrice,quantity){
	this.pizzaSize = pizzaSize,
	this.crustType = crustType,
	this.toppingsTotalPrice = toppingsTotalPrice,
	this.quantity = quantity
}

PizzaPrice.prototype.calculatePizzaPrice = function() {
	return this.quantity *(this.pizzaSize + this.crustType + this.toppingsTotalPrice)
}



$(document).ready( function ()
{
$('#pizz').submit(function(event){
	let selectedPizzaSize = $("input[name = 'size']:checked").val()
	let selectedPizzaCrust = $("input[name = 'crust']:checked").val()
	console.log(selectedPizzaSize)


	let selectedToppingPrices =[]
	$("input[name='Sauce']:checked").each(()=>selectedToppingPrices.push(this.val()))
	console.log(selectedToppingPrices.length)


	event.preventDefault()
})
  
	// $('#dropdown_selector').change(function()
	// {
		
	// 	var option = $(this).find('option:selected').val();
		
	// 	$('#showoption').val(option);
	// });
});