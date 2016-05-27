define(function() {
    var energyOverview = {
        color: 'Beige',
        size: 'Granular',
        init: function() {
            console.log(energyOverview.color);
            $('#elf-view').load('/high-tech-energy/energy-overview-page', function() {
                $('#display').html(energyOverview.color + ' ' + energyOverview.size);
                energyOverview.getHighTechEnergy();
            });
        },
        getHighTechEnergy: function() {
            $.getJSON('/highTechEnergy/', function(response) {
                    // console.log(response);
                    $('#debug').html(JSON.stringify(response, null, 4));
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
    return energyOverview;
});