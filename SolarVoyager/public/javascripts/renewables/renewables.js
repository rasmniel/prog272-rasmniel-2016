define(function() {
    'use strict';
    var renewables = {
        color: 'Blue',
        size: 'Medium',
        index: 0,
        renewablesList: [],
        init: function() {
            console.log(renewables.color);
            $('#elf-view').load('/renewables/all-renewables', function() {
                $('#display').html(renewables.color + ' ' + renewables.size);
                $('#dataType').change(renewables.loadRenewable);
                $('#plusButton').click({
                    value: parseInt($('#indexInput').val()) + 1
                }, indexButtonChange);
                $('#minusButton').click({
                    value: parseInt($('#indexInput').val()) - 1
                }, indexButtonChange);
            });
            renewables.getRenewable();
        },
        loadRenewable: function() {
            var dataType = $('#dataType').val();
            if (dataType === 'JSON') {
                renewables.getRenewable();
            } else if (dataType === 'Database') {
                renewables.getRenewableFromDatabase();
            }
        },
        getRenewable: function() {
            $.getJSON('/renewables', function(response) {
                var value = $('#indexInput').val();
                if (value !== undefined) {
                    renewables.index = $('#indexInput').val();
                }
                renewables.renewablesList = response.renewables;
                var simpleRenewable = renewables.getSimpleKeys(renewables.renewablesList[renewables.index]);
                renewables.showRenewable(simpleRenewable);
                $('#debug').html(JSON.stringify(response, null, 4));
                // For some inexplicable reason, these calls fails the tests despite not being relevant for it...
                // })
                // .done(function() {
                //     console.log('second success');
                // })
                // .fail(function(a, b, c) {
                //     console.log('Error', a, b, c);
                //     $('#debug').html('Error occured: ', a.status);
                // })
                // .always(function() {
                //     console.log('complete');
            });
        },
        getRenewableFromDatabase: function() {
            $.getJSON('/renewables/getData', function(response) {
                var value = $('#indexInput').val();
                if (value !== undefined) {
                    renewables.index = $('#indexInput').val();
                }
                renewables.renewablesList = response.renewables;
                renewables.renewablesList.sort(function(a, b) {
                    // Sort by year descending.
                    return b.Year - a.Year;
                });
                if (renewables.renewablesList.length > 0) {
                    // Renewables from the database has been simplified.
                    var simpleRenewable = renewables.renewablesList[renewables.index];
                    renewables.showRenewable(simpleRenewable);
                    $('#debug').html(JSON.stringify(response, null, 4));
                } else {
                    $('#debug').html('Database is empty!');
                }
            }).done(function() {
                console.log('second success');
            }).fail(function(a, b, c) {
                console.log('Error', a, b, c);
                $('#debug').html('Error occured: ', a.status);
            }).always(function() {
                console.log('complete');
            });
        },
        showRenewable: function(renewable) {
            var dataType = $('#dataType').val();
            if (dataType === 'JSON') {
                renewable = renewables.getSimpleKeys(renewable);
            }
            $('#yearView').val(renewable.Year);
            $('#solarView').val(renewable.Solar);
            $('#geoView').val(renewable.Geothermal);
            $('#otherBiomassView').val(renewable.OtherBiomass);
            $('#windView').val(renewable.WindPower);
            $('#liquidBiofuelsView').val(renewable.LiquidBiofuels);
            $('#woodView').val(renewable.Wood);
            $('#hydropowerView').val(renewable.Hydropower);
        },
        getSimpleKeys: function(renewable) {
            return {
                Year: renewable.Year,
                Solar: renewable['Solar (quadrillion Btu)'],
                Geothermal: renewable['Geothermal (quadrillion Btu)'],
                OtherBiomass: renewable['Other biomass (quadrillion Btu)'],
                WindPower: renewable['Wind power (quadrillion Btu)'],
                LiquidBiofuels: renewable['Liquid biofuels (quadrillion Btu)'],
                Wood: renewable['Wood biomass (quadrillion Btu)'],
                Hydropower: renewable['Hydropower (quadrillion Btu)']
            };
        }
    };

    function indexChange(test) {
        // This expands the capabilities beyond just 12 items.
        // Submitting the JSON twice will let you browse 24 items. Previously this was not possible.
        if (test < renewables.renewablesList.length && test >= 0) {
            renewables.index = test;
            $('#indexInput').val(test);
            renewables.showRenewable(renewables.renewablesList[test]);
        }
    }

    var indexButtonChange = function(event) {
        var test = event.data.value + parseInt(renewables.index);
        indexChange(test);
    };

    return renewables;
});
