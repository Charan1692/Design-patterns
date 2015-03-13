
//Simple version of pub - sub
var subscribers = {};

//different publish method without evtObj
function publish(type) {
	if(!subscribers[type]) {
		return;
	}

	var listeners = subscribers[type];
	for(var counter = 0;  counter < listeners.length; counter ++) {
		listeners[counter].call(this);
	}
}

function subscribe(type, fn) {
	if(!subscribers[type]) {
		subscribers[type] = [];
	}
	if(subscribers[type].indexOf(fn) === -1) {
		subscribers[type].push(fn);	
	}	
}


function unsubscribe(type, fn) {
	if(!subscribers[type]) {
		return;
	}	
	var listeners = subscribers[type];
	var index = listeners.indexOf(fn);
	if(index > -1) {
		subscribers[type].splice(index, 1);	
	}	
}

function foo() {
	console.log('published');
}

subscribe('test/foo', foo);
publish('test/foo');
unsubscribe('test/foo', foo);
publish('test/foo');