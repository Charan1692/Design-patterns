//Example of module and pub-sub pattern
//We use pub-sub when we want to implement events/handlers

//For example - Implementation of on - click event in jQuery

(function(ns) {
	var handlers = {};

	//private function
	function executeHandlers(eventName) {
		var handler = handlers[eventName] || [];

		//execute all the handlers/events since there can be 
		//multiple of them
		//For example - multiple onClick on page
		for(var i = 0; i < handler.length; i++) {
			handler[i].apply(this, []);
		}
	}

	//exposed public method
	ns.on = function(eventName, handler) {
		if(!handlers[eventName]) {
			handlers[eventName] = [];
		}

		handlers[eventName].push(handler);
	}

	//exposed public method
	ns.customClick = function() {
		//some other stuff
		executeHandlers('customClick');
	}
	
} (this.yQuery = this.yQuery || {}));

//Register the event
yQuery.on('customClick', function() {
	//code here
}); 


//Actual call of event/handler
yQuery.customClick();