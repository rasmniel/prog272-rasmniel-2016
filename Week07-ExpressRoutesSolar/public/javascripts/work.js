define(function() {
    var work = {
        color: "Red",
        size: "Big",
        init: function() {
            console.log(work.color);
            $('#elf-view').load('/work', function() {
                $('#display').html(work.color + ' ' + work.size);
                $('#toRenewables').click(work.toRenewables);
            });
        },
        toRenewables: function() {
            console.log("Renewables button pressed!");
            window.location.href = '/renewables';
        }
    };
    return work;
});