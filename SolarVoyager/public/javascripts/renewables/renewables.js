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
                $('#plusButton').click(renewables.buttonInc);
                $('#minusButton').click(renewables.buttonDec);
            });
        },
        getRenewable: function() {
            $.getJSON('/renewables', function(response) {
                var value = $('#indexInput').val();
                if (value !== undefined) {
                    renewables.index = $('#indexInput').val();
                }
                renewables.renewablesList = response.renewables;
                console.log(renewables.index);
                renewables.showRenewable(renewables.renewablesList[renewables.index]);
                $('#debug').html(JSON.stringify(response, null, 4));
                // For some inexplicable reason, these calls fails the tests despite not being relevant for it...
                // })
                // .done(function() {
                //     console.log("second success");
                // })
                // .fail(function(a, b, c) {
                //     console.log('Error', a, b, c);
                //     $('#debug').html('Error occured: ', a.status);
                // })
                // .always(function() {
                //     console.log("complete");
            });
        },
        showRenewable: function(renewable) {
            renewable = renewables.getSimpleKeys(renewable);
            $('#yearView').val(renewable.year);
            $('#solarView').val(renewable.solar);
            $('#geoView').val(renewable.geo);
            $('#otherBiomassView').val(renewable.otherBiomass);
            $('#windView').val(renewable.wind);
            $('#liquidBiofuelsView').val(renewable.liquidBiofuels);
            $('#woodView').val(renewable.wood);
            $('#hydropowerView').val(renewable.hydropower);
        },
        getSimpleKeys: function(renewable) {
            return {
                year: renewable.Year,
                solar: renewable['Solar (quadrillion Btu)'],
                geo: renewable['Geothermal (quadrillion Btu)'],
                otherBiomass: renewable['Other biomass (quadrillion Btu)'],
                wind: renewable['Wind power (quadrillion Btu)'],
                liquidBiofuels: renewable['Liquid biofuels (quadrillion Btu)'],
                wood: renewable['Wood biomass (quadrillion Btu)'],
                hydropower: renewable['Hydropower (quadrillion Btu)']
            };
        },
        buttonInc: function() {
            var input = $('#indexInput');
            renewables.index = input.val();
            if (renewables.index < 11) {
                input.val(++renewables.index);
            }
            renewables.getRenewable();
        },
        buttonDec: function() {
            var input = $('#indexInput');
            renewables.index = input.val();
            if (renewables.index > 0) {
                input.val(--renewables.index);
            }
            renewables.getRenewable();
        }
    };

    return renewables;
});
