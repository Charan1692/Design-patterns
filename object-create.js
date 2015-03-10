var foo = {};

var bar = Object.create(Object.prototype);

//In JavaScript inheritence is achieved using prototype
//ECMA Script 5 introduced Object.create() to reduce the head ache from prototype way inheritence
//first argument is Object's prototype (for other programming language - Parent class)
//So, Object.create creates prototype chainning internally


var Person = {
	firstName: "Yogesh",
	lastName: "Singh",
	sayName: function () {
		return this.firstName + " " + this.lastName;
	}
};

var Customer = Object.create(Person, {
	//every value is represented using value
	firstName: { value: "Manish" },
	type: { value: "Customer" },

	//getType also needs to be object and value can be obtained from function
	getType: {
		value: function() {
			return this.type;
		} 
	} 
});


var LoyalCustomer = Object.create(Customer, {
	//every value is represented using value
	firstName: { value: "Ashish" },
	type: { value: "loyal Customer" },

	//getType also needs to be object and value can be obtained from function
	isLoyal: {
		value: function() {
			return "Yes";
		} 
	} 
});



console.log(Person.sayName()); //Yogesh Singh
console.log(Customer.sayName()); //Manish Singh
console.log(Customer.getType()); //Customer
console.log(LoyalCustomer.isLoyal()); //Yes
console.log(LoyalCustomer.getType()); //loyal Customer
console.log(Customer.__proto__ === Person) //true
console.log(LoyalCustomer.__proto__ === Customer) //true
console.log(LoyalCustomer.__proto__ === Person) //false