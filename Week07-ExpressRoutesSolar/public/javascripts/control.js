$(document).ready(function() {
    'use strict';
    $.getJSON('/renewables', function(response) {
            // console.log(response);
            $('#debug').html(JSON.stringify(response, null, 4))
        })
        .done(function() {
            console.log("second success");
        })
        .fail(function(a, b, c) {
            console.log('Error', a, b, c);
            $('#debug').html('Error occured: ', a.status);
        })
        .always(function() {
            console.log("complete");
        });

    // Get raw renewables objects by clicking button.
    $('#toRenewables').click(function() {
        console.log("Renewables button pressed!");
        window.location.href = '/renewables';
    });

    $('#getRenewables').click(function() {
        $.getJSON('/renewables', function(response) {
            $('#displayRenewables').html(JSON.stringify(response, null, 4));
        });
    });

    $('#getByYear').click(function() {
        var year = $('#inputYear').val();
        $.getJSON('/renewableByYear/' + year, function(response) {
            // console.log(response);
            $('#displayByYear').html(JSON.stringify(response, null, 4));
        });
    });

    $('#getByIndex').click(function() {
        var index = $('#inputIndex').val();
        $.getJSON('/renewableByIndex/' + index, function(response) {
            // console.log(response);
            $('#displayByIndex').html(JSON.stringify(response, null, 4));
        });
    });
    
    $('#clear').click(function() {
        $('#displayRenewables').html('');
        $('#displayByYear').html('');
        $('#displayByIndex').html('');
        $('#inputYear').val('');
        $('#inputIndex').val('');
    });
});