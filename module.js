//Module pattern can be used to protect our code using private and public 
//We can expose only specific method and varriable using module pattern
//For example - counter in below code cannot be accessed from gobal scope
//We can also pass reference of any other library like JQuery and use it

var dom = (function(jQ) {
	//private varriable can be used in private or public method
	var counter = 0;

	//private method used in public method
	function generateId() {
		return "custom" + counter++;
	}

	//public method since exposed below using return
	function create(tagName, id) {
		var el = document.createElement(tagName);
		el.id = id || generateId();
		return el;
	}

	return {
		//these are the public methods accessible from outside
		create: create
	}
} (jQuery));