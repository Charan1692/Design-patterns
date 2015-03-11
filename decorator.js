//Decorator pattern helps to provide more additive to current Object
//A Coffee shop has price set for coffee
//But, if there are more additives added or removed to coffee like cream, sugar etc.
//Different rate needs to be provided to customer. 

function Coffee () {}

Coffee.prototype.cost = function() {
	return 10;
};

Coffee.sugar = function(coffee) { 
	var cost = coffee.cost();
	coffee.cost = function() {
		return cost + .5;
	}	
}

Coffee.milk = function(coffee) { 
	var cost = coffee.cost();
	coffee.cost = function() {
		return cost + .5;
	}	
}

Coffee.chocolate = function(coffee) { 
	var cost = coffee.cost();
	coffee.cost = function() {
		return cost + .5;
	}	
}

Coffee.cream = function(coffee) { 
	var cost = coffee.cost();
	coffee.cost = function() {
		return cost + 1;
	}	
}


Coffee.small = function(coffee) { 
	var cost = coffee.cost();
	coffee.cost = function() {
		return cost - .5;
	}	
}


Coffee.medium = function(coffee) { 
	var cost = coffee.cost();
	coffee.cost = function() {
		return cost;
	}
}

Coffee.large = function(coffee) { 
	var cost = coffee.cost();
	coffee.cost = function() {
		return cost + .5;
	}
}

Coffee.mocha = function(coffee) {
	Coffee.sugar(coffee);
	Coffee.milk(coffee);
	Coffee.chocolate(coffee);

	var cost = coffee.cost();

	Coffee.cost = function() {
		return cost;
	}
}

var coffee = new Coffee();
Coffee.cream(coffee); // calls prototype cost method, but adds a static method cost to object
Coffee.sugar(coffee); // calls previous set static method and overrides it
console.log('Price of coffee with cream and sugar = ' + coffee.cost()); 
// call previously set static cost method

//When methods are set to prototype and static then called static method

Coffee.mocha(coffee); 
console.log('Price of coffee with cream, sugar and a Mocha = ' + coffee.cost());