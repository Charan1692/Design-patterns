/**
 * Created by YSingh on 02/04/17.
 */

function extend(Child, Parent) {
    var F = function () {}
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.uber = Parent.prototype;
}