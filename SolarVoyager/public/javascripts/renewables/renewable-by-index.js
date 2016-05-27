define(function() {
    'use strict';
    var byIndex = {
        color: 'Pink',
        size: 'Tiny',
        init: function() {
            console.log(byIndex.color);
            $('#elf-view').load('/renewables/renewables-by-index', function() {
                $('#display').html(byIndex.color + ' ' + byIndex.size);
                $('#getByIndex').click(byIndex.getByIndex);
            });
        },
        getByIndex: function() {
            var index = $('#inputIndex').val();
            $.getJSON('/renewableByIndex/' + index, function(response) {
                    // console.log(response);
                    $('#displayByIndex').html(JSON.stringify(response, null, 4));
                })
                .done(function() {
                    console.log('second success');
                })
                .fail(function(a, b, c) {
                    console.log('Error', a, b, c);
                    $('#debug').html('Error occured: ', a.status);
                })
                .always(function() {
                    console.log('complete');
                });
        }
    };
    return byIndex;
});
