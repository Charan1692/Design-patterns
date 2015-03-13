//Hides the compexity of the code
//For example - to attach event to element that works for all the browsers
//We can write function and client can call it directly


function addEvent (el, evt, fn) {
	if (el.addEventListener) {
		el.addEventListener(evt, fn, false);
	}
	else if (el.attachEvent) {
		el.attachEvent('on' + evt, fn);
	}
	else {
		el['on' + evt] = fn;
	}
}

function removeEvent(el, evt, fn) {
	if (el.removeEventListener) {
		el.removeEventListener(evt, fn, false);
	}
	else if (el.detachEvent) {
		el.detachEvent('on' + evt, fn);
	}
	else {
		el['on' + evt] = null;
	}
}