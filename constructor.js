function Person (firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;

	//Problems with declaring function inside the constructor:
	//1. It creates the function object each time a instance of Object is created that takes memory
	//2. person1.sayName === person2.sayName //false since differnt object are created each time
	//3. Problems in inheritence
	this.sayName = function() {
		return this.firstName + " " + this.lastName;
	}
}

var person1 = new Person('Yogesh', 'Singh');
console.log(person1.sayName()); //Yogesh Singh

var person2 = new Person('Manish', 'Singh');
console.log(person2.sayName()); //Manish Singh

console.log(person1 instanceof Person); //true
console.log(person1.sayName === person2.sayName); //false

//If we want a function to available for all the instance of 
//Object we add it to prototype
//TO achieve the inheritence, we use prototype
function Person (firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.sayName = function() {
	return this.firstName + " " + this.lastName;
}

var person1 = new Person('Yogesh', 'Singh');
console.log(person1.sayName()); //Yogesh Singh


var person2 = new Person('Manish', 'Singh');
console.log(person2.sayName()); //Manish Singh

console.log(person1 instanceof Person); //true

console.log(person1.sayName === person2.sayName); //true