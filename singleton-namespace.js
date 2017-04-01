/**
 * Created by YSingh on 02/04/17.
 */

//name space singleton pattern in JavaScript is used to avoid naming conflicts
var app = app || {};
app.utilities = app.utilities || {};
app.utilities.Elements = (function () {

    var count = 1;
    function getId() {
        return "Custom" + count++;
    }

    return {
        create: function(tagName) {
            var el = document.createElement(tagName);
            el.id = getId();
            return el;
        }
    }

})();

app.utilities.Elements.create('div')