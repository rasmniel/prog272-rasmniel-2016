define(function() {
    'use strict';

    var settings = {
        'dataType': 'JSON',
        'dataSource': 'Local MongoDb',
        'comment': 'Comment'
    };
    var list = [];

    function getSettings() {
        $.getJSON('/database-settings/getSettings', function(response) {
                $('#debug').html(JSON.stringify(response, null, 4));
                settings = response.settings;
                $('#dataType').val(response.settings.dataType);
                $('#dataSource').val(response.settings.dataSource);
                $('#comment').val(response.settings.comment);
            })
            .fail(function(a, b, c) {
                console.log('Error', a, b, c);
                $('#debug').html('Error occured: ', a.status);
            })
            .done(function() {
                console.log('second success');
            })
            .always(function() {
                console.log('complete');
            });
    }

    var setSettings = function() {
        settings = {
            dataType: $('#dataType').val(),
            dataSource: $('#dataSource').val(),
            comment: $('#comment').val()
        };
    };

    var home = {
        color: 'Red',
        size: 'Big',
        init: function() {
            console.log(home.color);
            $('#elf-view').load('/home', function() {
                $('#display').html(home.color);
                $('#display2').html(home.size);
                getSettings();
                $("#target").submit(function(event) {
                    event.preventDefault();
                    var userFormData = $(this).serialize();
                    $('#debug').html(userFormData);
                    var userData = {
                        dataType: $('#dataType').val(),
                        dataSource: $('#dataSource').val(),
                        comment: $('#comment').val()
                    };
                    $.post('/database-settings/updateSettings', userData, function(result) {
                        console.log(settings);
                    });
                });
                $("#dataType").change(setSettings)
                $('#buttonExecute').click(execute);
                $('#buttonInsert').click(insertJSON);
                $('#buttonClear').click(clear);

            });
        }
    };

    var execute = function() {
        list = null;
        if (settings.dataType === 'JSON') {
            $.getJSON('renewables/', function(result) {
                display(result);
            }).done(function() {
                console.log('second success');
            }).fail(function(a, b, c) {
                console.log('Error', a, b, c);
                $('#debug').html('Error occured: ', a.status);
            }).always(function() {
                console.log('complete');
            });
        }
        else if (settings.dataType === 'Database') {
            loadData();
        }
    };

    function loadData() {
        $.getJSON('/renewables/getData', function(result) {
            display(result);
        }).done(function() {
            console.log('second success');
        }).fail(function(a, b, c) {
            console.log('Error', a, b, c);
            $('#debug').html('Error occured: ', a.status);
        }).always(function() {
            console.log('complete');
        });
    }

    function display(result) {
        list = result.renewables;
        $('#debug').html(JSON.stringify(result.renewables, null, 4));
    }

    var insertJSON = function() {
        for (var i = 0; i < list.length; i++) {
            $.post('/renewables/addJSON', list[i], function(result) {
                $('#debug').html(JSON.stringify(result, null, 4));
            }, 'json').fail(function(a, b, c) {
                console.log('Error', a, b, c);
                $('#debug').html('Error occured: ', a.status);
            });
        }
    };

    var clear = function() {
        $.get('/renewables/clear', function(result) {
            $('#debug').html(JSON.stringify(result, null, 4));
        });
    };

    return home;
});