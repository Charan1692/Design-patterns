/**
 * Created by YSingh on 02/04/17.
 */

function Shape(){}
// augment prototype

Shape.prototype.name = 'shape';

//Using recursion, we able to call toString every time in prototype chain
Shape.prototype.toString = function(){
    var result = [];
    if (this.constructor.uber) {
        result[result.length] = this.constructor.uber.toString();
    }
    //Do certain operations for child
    result[result.length] = this.name;
    return result.join(', ');
};

function TwoDShape(){}

// take care of inheritance
var F = function(){};

F.prototype = Shape.prototype;

TwoDShape.prototype = new F();

TwoDShape.prototype.constructor = TwoDShape;

TwoDShape.uber = Shape.prototype;

// augment prototype
TwoDShape.prototype.name = '2D shape';

function Triangle(side, height) {
    this.side = side;
    this.height = height;
}

// take care of inheritance
var F = function(){};

F.prototype = TwoDShape.prototype;

Triangle.prototype = new F();

Triangle.prototype.constructor = Triangle;

Triangle.uber = TwoDShape.prototype;

// augment prototype
Triangle.prototype.name = 'Triangle';

Triangle.prototype.getArea = function() { return this.side * this.height / 2; }

var my = new Triangle(5, 10);

my.toString();