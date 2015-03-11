function Beverage (name, price) {
	this.name = name;
	this.price = price;
}

Beverage.prototype.getPrice = function() {
	return this.name + " has price = " + this.price;
};

function Coffee(type) {
	Beverage.call(this, "Coffee", 20);
	this.type = type;
}

Coffee.prototype = Object.create(Beverage.prototype);

Coffee.prototype.getType = function() {
	return "Type of Coffee = " + this.type;
};

var coff = new Coffee("Latte");
console.log(coff.getPrice());
console.log(coff.getType());