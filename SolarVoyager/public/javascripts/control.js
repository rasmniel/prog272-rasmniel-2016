define(['jquery', 'home', 'about', 'renewables', 'renewableByYear', 'renewableByIndex'],
    function($, home, about, renewables, renewableByYear, renewableByIndex) {
        //Do setup work here

        function showBar() {
            //console.log('Show Bar Clicks called now');
            $('#display2').html('bar');
        }

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