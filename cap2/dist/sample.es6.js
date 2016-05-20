'use strict';

var es6Obj = function es6Obj() {
    var ES6 = 'ECMAScript2015';

    return {
        getES6: function getES6() {
            console.log(ES6, ES6, ES6);
        }
    };
};

es6 = es6Obj();
es6.getES6();