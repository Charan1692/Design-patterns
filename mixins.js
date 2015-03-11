function Person (name) {
	this.name = name;
}

function Dog (name) {
	this.name = name;
}

//IF there are 2 different objects, but have some common function 
//For example - moving for Person and Dog
//these seperate objects can extend one common object using mixins

function extend(target) {
	if(!arguments[1]) {
		return;
	}

	for(var counter = 1; counter < arguments.length; counter++) {
		var source = arguments[counter];

		for(var key in source) {
			if(!target[key] && source.hasOwnProperty(key)) {
				target[key] = source[key];
			}
		}
	}
}

var moving = {
	walk: function() {
		return this.name + " is walking";
	},

	eating: function() {
		return this.name + " is eating";
	}
}

var speaking = {
	speak: function() {
		return this.name + " is speaking";
	}
}

extend(Person.prototype, moving, speaking);
extend(Dog.prototype, moving, speaking);

var person = new Person("Yogesh");
console.log(person.walk());
console.log(person.eating());
console.log(person.speak());

var dog = new Dog("Toby");
console.log(dog.walk());
console.log(dog.eating());
console.log(dog.speak());

