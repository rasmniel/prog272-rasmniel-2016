define(function() {
    var home = {
        color: "Red",
        size: "Big",
        init: function() {
            console.log(home.color);
            $('#elf-view').load('/home', function() {
                $('#display').html(home.color + ' ' + home.size);
                $('#toRenewables').click(home.toRenewables);
            });
        },
        toRenewables: function() {
            console.log("Renewables button pressed!");
            window.location.href = '/renewables';
        }
    };
    return home;
});