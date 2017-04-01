/**
 * Created by YSingh on 02/04/17.
 */

var api = (function () {
    var global = {};
    function subscribe(key, handler) {
        if(!global[key]) {
            global[key] = [];
        }

        global[key].push(handler);
    }
    
    function unsubscribe(key, fn) {
        if(!global[key]) {
            return;
        }

        var index = global[key].indexOf(fn);
        if(index != -1) {
            global[key].splice(index, 1);
        }
    }

    function publish(key, msg) {
        for(var i = 0; global[key] && i < global[key].length; i++) {
            global[key][i](msg);
        }
    }

    return {
        publish: publish,
        subscribe: subscribe,
        unsubscribe: unsubscribe
    }
})();

function handler (msg) {
    console.log(msg);
}

api.subscribe('click', handler);

api.subscribe('click', function (msg) {
    console.log("Another handler");
    console.log(msg);
});

api.publish('click', "Calling all click methods");

api.unsubscribe('click', handler);

api.publish('click', "Calling all click methods");