
var subscribers = {};

//publish method with evtObj
function publish(type, evtObj) {
	if(!subscribers[type]) {
		return;
	}

	if(!evtObj.type) {
		evtObj.type = type;
	}

	//loop through all the listeners and execute the function
	var listeners = subscribers[type];
	for(var counter = 0;  counter < listeners.length; counter ++) {
		listeners[counter](evtObj);
	}
}


function subscribe(type, fn) {
	if(!subscribers[type]) {
		subscribers[type] = [];
	}

	//Check if subscribers has this function, else add it
	if(subscribers[type].indexOf(fn) === -1) {
		subscribers[type].push(fn);	
	}	
}


function unsubscribe(type, fn) {
	if(!subscribers[type]) {
		return;
	}	

	//Remove from Subscribers 
	var listeners = subscribers[type];
	var index = listeners.indexOf(fn);
	if(index > -1) {
		subscribers[type].splice(index, 1);	
	}	
}

function foo(evt) {
	console.log(evt.message);
}

subscribe('test/foo', foo);
publish('test/foo', {message : "test success"});
unsubscribe('test/foo', foo);
publish('test/foo', {message : "should not publish"});