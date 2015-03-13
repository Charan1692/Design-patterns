//Decouples the object that process the request and issue the request.
//Basically, it centralizes the all the process
//Object that actually process the request 
var CarManager = {
	twoWheeler: function(model, id) {
		return this.id + ", " + this.model;
	},
	threeWheeler: function(model, id) {
		return this.id + ", " + this.model;
	},
	fourWheeler: function(model, id) {
		return this.id + ", " + this.model;
	}
}

//Decouples the CarManager object with rest of the world
CarManager.execute = function(command) {	
	return CarManager[command.type].call(command, command.model, command.id);
}


//Object that issue the request
console.log(CarManager.execute({type: "twoWheeler", model: "Hero", id : "1"}));

console.log(CarManager.execute({type: "threeWheeler", model: "Auto", id : "2"}));

console.log(CarManager.execute({type: "fourWheeler", model: "BMW", id : "3"}));

