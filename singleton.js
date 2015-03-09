//Singleton is module and module is singleton pattern
//But, uses of both is different
//Singleton pattern has only one instance of Object

var dom = (function() {
	//private varriable can be used in private or public method
	var counter = 0;
	//private varriable can be used in private or public method
	var instance;

	//private method used in public method
	function generateId() {
		return "custom" + counter++;
	}

	//public method since exposed from createInstance
	//dom.generateInstance().create('div', 'myId');
	function create(tagName, id) {
		var el = document.createElement(tagName);
		el.id = id || generateId();
		return el;
	}

	function createInstance() {
		return {
			create: create //only create method is accessed
			//once the object is created
		}
	}

	return {
		//these are the public methods accessible from outside
		generateInstance: function() {
			return instance || (instance = createInstance());
		}
	}
} ());

var instance = dom.generateInstance();
dom.generateInstance() === instance; //true
// since there is only one instace of object



//name space singleton pattern in JavaScript is used to avoid naming conflicts
var app = app || {};
app.utilities = app.utilities || {}; 
app.utilities.Elements = (function () {
	
	var count = 1;
	function getId() {
		return "Custom" + count++;
	}

	return {
		create: function(tagName) {
			var el = document.createElement(tagName);
			el.id = getId();
			return el;
		}
	}
	
})();

app.utilities.Elements.create('div')



