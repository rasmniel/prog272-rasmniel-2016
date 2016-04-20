var MyObject = (function() {
    function MyObject() {
        'use strict';
        $('#sendString').click(function() {
            'use strict';
            $('#stringHolder').html('Send string was clicked');
        });
        $('#getItems').click(function() {
            'use strict';
            for (var i = 0; i < 3; i++) {
                $('#myList').append('<li>Item ' + i + '</li>');
            }
        });
        $('#getMarie').click(function() {
            'use strict';
            var marie = {
                'firstName': 'Marie',
                'lastName': 'Curie',
                'city': 'Paris',
                'country': 'France'
            };
            for (var property in marie) {
                if (marie.hasOwnProperty(property)) {
                    $('#marieList').append('<li>' + property + ': ' + marie[property] + '</li>')
                }
            }
        });
    }
    MyObject.prototype.readyCalled = function() {
        $("#readyCalled").html('Ready was called and myObjected created');
    };
    return MyObject;
}());


$(document).ready(function() {
    var myObject = new MyObject();
    myObject.readyCalled();
});
