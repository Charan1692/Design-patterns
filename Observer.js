var Book = function (name, price) {
	var priceChanging = [],
		priceChanged = [];
	this.name = function(val) {
		return name;
	}
	this.price = function(val) {
		if(val !== undefined && val !== price) {
			for(var i = 0; i < priceChanging.length; i++) {
				if(!priceChanging[i](this, val)) {
					return price;
				}
			}
			price = val;
			for(var i = 0; i < priceChanged.length; i++) {
				priceChanged[i](this);
			}
		}
		return price;
	}
	this.onChanging = function(callback) {
		priceChanging.push(callback);
	}
	this.onChanged = function(callback) {
		priceChanged.push(callback);
	}
}

var bk = new Book('Good Parts', 100);
console.log('The name of book is: ' + bk.name() + ' and price is: ' +  bk.price());

bk.onChanging(function(book, price) {
	if(price > 100) {
		console.log('Price has changed more than expected');
		return false;
	}
	return true;
});

bk.onChanged(function(book) {
	console.log('Current price is: ' + book.price());
})

bk.price(200);
console.log('The name of book is: ' + bk.name() + ' and price is: ' +  bk.price());