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




});
  

});