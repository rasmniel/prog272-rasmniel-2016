define(function () {
    //Do setup work here

    var about = {
        color: "Green",
        size: "Little",
        init: function() {
            console.log(about.color);
            $('#elf-view').load('/about', function() {
                $('#display').html(about.color + ' ' + about.size);
            });
        }
    };
    return about;

});