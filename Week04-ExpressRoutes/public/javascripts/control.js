$(document).ready(function() {
    console.log('Document loaded!');

    $('#read').click(function() {
        console.log('Read called!');
        $.getJSON('/read', function(result) {
            console.log(result);
            $('#display').html(result.name);
            $('#displayJSON').html('');
        });
    });
    
    $('#readJSON').click(function() {
        console.log("ReadJSON called!");
        $.getJSON('names.json', function(result) {
            console.log(result);
            $('#displayJSON').html(JSON.stringify(result));

            var nameString = '';
            for(var i = 0; i < result.length; i++) {
                nameString += ' ';
                var name = JSON.stringify(result[i].name);
                console.log(name);
                nameString += name + ',';
            }
            nameString = nameString.substr(0, nameString.length - 1);
            nameString = nameString.trim();

            console.log(nameString);
            $('#display').html(nameString);
        });
    });
});