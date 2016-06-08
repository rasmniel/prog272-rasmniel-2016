define(function() {
    'use strict';
    var energyTypes = {
        color: 'Brown',
        size: 'Huge',
        init: function() {
            console.log(energyTypes.color);
            $('#elf-view').load('/high-tech-energy/energy-types-page', function() {
                $('#display').html(energyTypes.color + ' ' + energyTypes.size);
                energyTypes.getHighTechEnergyTypes();
            });
        },
        getHighTechEnergyTypes: function() {
            $.getJSON('/high-tech-energy/types/', function(response) {
                    // console.log(response);
                    $('#debug').html(JSON.stringify(response, null, 4));
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
    return energyTypes;
});
