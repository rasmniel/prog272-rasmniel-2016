function objectToArray(obj) {
    'use strict';
    var objAsArray = [];
    for (var property in obj) {
        objAsArray.push([property, obj[property]]);
    }
    objAsArray.sort(function(a, b) {
        return a[1] > b[1];
    });
    return objAsArray;
}

module.exports.objectToArray = objectToArray;