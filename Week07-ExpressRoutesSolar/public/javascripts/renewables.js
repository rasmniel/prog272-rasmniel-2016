define(function() {
    var renewables = {
        color: 'Blue',
        size: 'Medium',
        init: function() {
            console.log(renewables.color);
            $('#elf-view').load('/all-renewables', function() {
                $('#display').html(renewables.color + ' ' + renewables.size);
                $('#getRenewables').click(renewables.getAll);
            });
        },
        getAll: function() {
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
        }
    };
    return renewables;
});