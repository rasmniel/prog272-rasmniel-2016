var express = require('express');
var router = express.Router();
var fs = require('fs');
var energyUtils = require('../routes/energy-utils');

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {
        title: 'SolarVoyager Nielsen'
    });
});

router.get('/renewables/:id', function(request, response) {
    'use strict';
    console.log('renewables page called');
    response.render('renewables/' + request.params.id, {
        title: 'ElfComponent'
    });
});

router.get('/renewables', function(request, response) {
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

router.get('/renewableByIndex/:id', function(request, response) {
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

router.get('/renewablesByIndexSorted/:id', function(request, response) {
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

router.get('/renewableByYear/:year', function(request, response) {
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

router.get('/high-tech-energy/:id', function(request, response) {
    'use strict';
    console.log('high tech energy page called');
    response.render('high-tech-energy/' + request.params.id, {
        title: 'ElfComponent'
    });
});

router.get('/highTechEnergy', function(request, response) {
    'use strict';
    // console.log('Renewables called!');
    fs.readFile('data/HighTechEnergy.json', 'utf8', function(err, data) {
        if (err) throw err;
        var json = JSON.parse(data);
        // console.log(data);
        response.send({
            result: 'Success',
            renewables: json
        });
    });
});

router.get('/highTechEnergyTypes', function(request, response) {
    'use strict';
    // console.log('Renewables called!');
    fs.readFile('data/HighTechEnergy.json', 'utf8', function(err, data) {
        if (err) throw err;
        var json = JSON.parse(data);
        var jsonTypes = [];
        for (var i = 0; i < json.length; i++) {
            var exists = false;
            for (var j = 0; j < jsonTypes.length; j++) {
                if (json[i].MSN === jsonTypes[j].MSN) {
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                jsonTypes.push({
                    'MSN': json[i].MSN,
                    'Description': json[i].Description
                });
            }
        }
        // console.log(data);
        response.send({
            result: 'Success',
            renewables: jsonTypes
        });
    });
});

router.get('/:id', function(request, response) {
    'use strict';
    response.render(request.params.id, {
        title: 'ElfComponent'
    });
});

module.exports = router;
