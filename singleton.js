var dom = (function () {
	var instance;
	var counter = 1;

	function generateId() {
		return counter++;
	}

	function create(tagName) {
		var element = document.createElement(tagName);
		element.id = "container" + generateId();
		return element;
	}

	return {
		createInstance: function () {
			if(!instance) {
				instance = {
					create: create
				}
			}
			return instance;
		}
	}
})();


var obj = dom.createInstance();
obj.create("div");
obj.create("div");
obj.create("p");