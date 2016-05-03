function getNine() {
    return 9;
}

function getThis() {
    return this;
}

var getThisAnonymous = function() {
    return this;
};

var myObject = {
    getThis: function() {
        return this;
    }
};

var myFunction = (function() {
    return this;
})();

function MyFunction() {
    this.getThis = function() {
        return this;
    };
}

function getThisStrict() {
    'use strict';
    return this;
}


$(document).ready(function() {
    'use strict';
});
