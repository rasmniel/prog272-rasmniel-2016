$(document).ready(function() {
    console.log('Document loaded!');

    $('#read').click(function() {
        console.log('Read function called!');
        $.getJSON('/read', function(result) {
            console.log(result);
            $('#display').html(result.name);
            $('#displayJSON').html('');
        });
    });

    $('#readJSON').click(function() {
        console.log("ReadJSON function called!");
        $.getJSON('names.json', function(result) {
            $('#displayJSON').html(JSON.stringify(result));
            var nameString = getNameString(result);
            console.log(nameString);
            $('#display').html(nameString);
        });
    });

    $('#add').click(function() {
        console.log('Add function called!')
        var valueA = $('#operandA').val();
        var valueB = $('#operandB').val();
        console.log("Operands: " + valueA + ' ' + valueB);
        var query = {
            operandA: valueA,
            operandB: valueB
        };
        $.getJSON('/add', query, function(result) {
            console.log(result);
            $('#display').html(result.sum)
            $('#displayJSON').html(JSON.stringify(result));
        });
    });
});

// Get and format the name string in global method for increased code-readability.
function getNameString(result) {
    var nameString = '';
    for (var i = 0; i < result.length; i++) {
        nameString += ' ';
        var name = JSON.stringify(result[i].name);
        nameString += name + ',';
    }
    nameString = nameString.substr(0, nameString.length - 1);
    nameString = nameString.trim();
    return nameString;
}