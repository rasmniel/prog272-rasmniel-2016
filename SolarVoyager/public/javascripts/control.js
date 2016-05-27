define(['jquery', 'home', 'about', 'renewables', 'renewableByYear', 'renewableByIndex'],
    function($, home, about, renewables, renewableByYear, renewableByIndex) {
        //Do setup work here

        function showBar() {
            //console.log('Show Bar Clicks called now');
            $('#display2').html('bar');
        }

        /*function showRenewable(renewable) {
            console.log('showing renewables!');
            renewable = getSimpleKeys(renewable);
            $('#yearView').val(renewable.year);
            $('#solarView').val(renewable.solar);
            $('#geoView').val(renewable.geo);
            $('#otherBiomassView').val(renewable.otherBiomass);
            $('#windView').val(renewable.wind);
            $('#liquidBiofuelsView').val(renewable.liquidBiofuels);
            $('#woodView').val(renewable.wood);
            $('#hydropowerView').val(renewable.hydropower);
        }

        function getSimpleKeys(renewable) {
            return {
                year: renewable['Year'],
                solar: renewable['Solar (quadrillion Btu)'],
                geo: renewable['Geothermal (quadrillion Btu)'],
                otherBiomass: renewable['Other biomass (quadrillion Btu)'],
                wind: renewable['Wind power (quadrillion Btu)'],
                liquidBiofuels: renewable['Liquid biofuels (quadrillion Btu)'],
                wood: renewable['Wood biomass (quadrillion Btu)'],
                hydropower: renewable['Hydropower (quadrillion Btu)']
            };
        }*/

        var control = {
            color: "black",
            size: "unisize",
            setup: function() {
                $(document).on('click', '#showClick', showBar);
                $('#display2').html(control.color + ' - ' + control.size);
            },
            init: function() {
                $('#homeButton').click(home.init);
                $('#renewableButton').click(renewables.init);
                $('#byYearButton').click(renewableByYear.init);
                $('#byIndexButton').click(renewableByIndex.init);
                $('#aboutButton').click(about.init);
                home.init();
            }
        };
        return control;
    });