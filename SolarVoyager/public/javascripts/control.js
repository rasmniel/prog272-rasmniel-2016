define(['jquery', 'home', 'about', 'renewables', 'renewableByYear',
        'renewableByIndex', 'energyOverview', 'energyTypes'
    ],
    function($, home, about, renewables, renewableByYear,
        renewableByIndex, energyOverview, energyTypes) {
        'use strict';

        function showBar() {
            //console.log('Show Bar Clicks called now');
            $('#display2').html('bar');
        }

        var control = {
            color: 'black',
            size: 'unisize',
            setup: function() {
                $(document).on('click', '#showClick', showBar);
                $('#display2').html(control.color + ' - ' + control.size);
            },
            init: function() {
                $('.homeMenu').click(home.init);
                $('.aboutMenu').click(about.init);
                
                $('.renewablesMenu').click(renewables.init);
                $('.renewablesByIndexMenu').click(renewableByIndex.init);
                $('.renewablesByYearMenu').click(renewableByYear.init);

                $('.highTechEnergyOverviewMenu').click(energyOverview.init);
                $('.highTechEnergyTypesMenu').click(energyTypes.init);

                home.init();
            }
        };
        return control;
    });
