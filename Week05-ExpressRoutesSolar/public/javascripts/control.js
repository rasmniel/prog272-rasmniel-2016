$(document).ready(function() {
    'use strict';
    $.getJSON('/renewables', function(response) {
            // console.log(response);
            $('#debug').html(JSON.stringify(response))
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
    $('#getRenewables').click(function() {
        console.log("Renewables button pressed!");
        window.location.href = '/renewables';
    });

    $('#getByYear').click(function() {
        var year = $('#getByInput').val();
        $.getJSON('/renewableByYear/' + year, function(response) {
            // console.log(response);
            $('#debug').html(JSON.stringify(response));
        });
    });

    $('#getByIndex').click(function() {
        var index = $('#getByInput').val();
        $.getJSON('/renewableByIndex/' + index, function(response) {
            // console.log(response);
            $('#debug').html(JSON.stringify(response));
        });
    });
});