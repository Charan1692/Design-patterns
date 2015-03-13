//Factory pattern
//when client does not know which object out of candidate 
//objects to instantiate but knows the type of object

//Foctory is creator
//employees are concrete product

function Factory () { //Creator
	this.createEmployee = function(type) {
		var employee;
		if(type == 'full time') {
			employee = new FullTime();
		}
		else if(type == 'part time') {
			employee = new PartTime();	
		}
		employee.type = type;
			
		employee.getPrice = function() {
			return this.type + " has rate = " + this.rate;
		}
		return employee;
	}
}

function FullTime() {
	this.rate = 12;
}

function PartTime() {
	this.rate = 6;
}

function run() {
	var factory = new Factory();
	var employees = []; //concrete product
	employees.push(factory.createEmployee('full time')); 
	employees.push(factory.createEmployee('part time')); 

	for(var counter = 0; counter < employees.length; counter++) {
		console.log(employees[counter].getPrice());
	}
}

