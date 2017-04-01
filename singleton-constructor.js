/**
 * Created by YSingh on 02/04/17.
 */
//Singleton using constructor

function SimpleClass(name) {
    this.name = name;

    this.changeName = function (name) {
        this.name = name;
    }

    if(!SimpleClass.globalValue) {
        SimpleClass.globalValue = this;
    }

    return SimpleClass.globalValue;
}

var obj = new SimpleClass("Yogesh");
obj.changeName("Manish");


var obj2 = new SimpleClass("Yogesh");

obj == obj2 // true



