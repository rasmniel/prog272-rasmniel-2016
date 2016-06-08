var express = require('express');
var router = express.Router();
var fs = require('fs');
var energyUtils = require('../routes/energy-utils');

router.get('/', function(request, response) {
    'use strict';
    // console.log('Renewables called!');
    fs.readFile('data/Renewable.json', 'utf8', function(err, data) {
        if (err) throw err;
        var json = JSON.parse(data);
        // console.log(data);
        response.send({
            result: 'Success',
            renewables: json
        });
    });
});

router.get('/byIndex/:id', function(request, response) {
    'use strict';
    fs.readFile('data/Renewable.json', 'utf8', function(err, data) {
        if (err) throw err;
        var id = request.params.id;
        var json = JSON.parse(data);
        // console.log(json[id]);
        response.send({
            result: 'Success',
            renewable: json[id]
        });
    });
});

router.get('/byIndexSorted/:id', function(request, response) {
    'use strict';
    fs.readFile('data/Renewable.json', 'utf8', function(err, data) {
        if (err) throw err;
        var id = request.params.id;
        var json = JSON.parse(data);
        var sortedJSON = energyUtils.objectToArray(json[id]);
        // console.log(sortedJSON);
        response.send({
            result: 'Success',
            sortedEnergy: sortedJSON
        });
    });
});

router.get('/byYear/:year', function(request, response) {
    'use strict';
    fs.readFile('data/Renewable.json', 'utf8', function(err, data) {
        if (err) throw err;
        var year = request.params.year;
        var json = JSON.parse(data);
        for (var entry in json) {
            var current = json[entry];
            // console.log('Year: ' + current['Year']);
            if (current.Year == year) {
                response.send({
                    result: 'Success',
                    renewable: json[entry]
                });
                return; // Return to avoid wasting time reading through all entries.
            }
        }
        response.send({
            result: 'Not found'
        });
    });
});

router.get('/:id', function(request, response) {
    'use strict';
    console.log('renewables page called');
    response.render('renewables/' + request.params.id, {
        title: 'ElfComponent'
    });
});


module.exports = router;