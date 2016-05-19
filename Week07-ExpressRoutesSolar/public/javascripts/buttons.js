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

    $('#getRenewables').click(function() {
        $.getJSON('/renewables', function(response) {
                $('#displayRenewables').html(JSON.stringify(response, null, 4));
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
    });

    $('#getByYear').click(function() {
        var year = $('#inputYear').val();
        $.getJSON('/renewableByYear/' + year, function(response) {
                // console.log(response);
                $('#displayByYear').html(JSON.stringify(response, null, 4));
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
    });

    $('#getByIndex').click(function() {
        var index = $('#inputIndex').val();
        $.getJSON('/renewableByIndex/' + index, function(response) {
                // console.log(response);
                $('#displayByIndex').html(JSON.stringify(response, null, 4));
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
    });

    // Go to raw renewables on new page.
    $('#toRenewables').click(function() {
        console.log("Renewables button pressed!");
        window.location.href = '/renewables';
    });

    // Clear output.
    $('#clear').click(function() {
        $('#displayRenewables').html('');
        $('#displayByYear').html('');
        $('#displayByIndex').html('');
        $('#inputYear').val('2006');
        $('#inputIndex').val('0');
    });
});