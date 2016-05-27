define(function() {
    var byYear = {
        color: 'Cyan',
        size: 'XL',
        init: function() {
            console.log(byYear.color);
            $('#elf-view').load('/renewables/renewables-by-year', function() {
                $('#display').html(byYear.color + ' ' + byYear.size);
                $('#getByYear').click(byYear.getByYear);
            });
        },
        getByYear: function() {
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
        }
    };
    return byYear;
});