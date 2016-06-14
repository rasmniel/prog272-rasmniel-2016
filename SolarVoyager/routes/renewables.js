var express = require('express');
var router = express.Router();
var fs = require('fs');
var energyUtils = require('../routes/energy-utils');
var Renewables = require('../models/renewables');
var connect = require('./connect.js');

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

// Database methods
router.get('/getData', function(request, response) {
    'use strict';
    if (!connect.connected) {
        var useSimple = request.query.databaseConnect;
        connect.doConnection(useSimple);
    }
    Renewables.find({}, function(err, docs) {
        if (err) {
            response.send({
                result: 'error'
            });
        }
        response.send({
            result: 'Success',
            renewables: docs
        });
    });
});

router.post('/addJSON', function(request, response) {
    'use strict';
    if (!connect.connected) {
        connect.doConnection(request.body.useSimple);
    }
    var data = request.body;
    var newRenewables = new Renewables({
        Year: data.Year,
        Solar: data['Solar (quadrillion Btu)'],
        Geothermal: data['Geothermal (quadrillion Btu)'],
        OtherBiomass: data['Other biomass (quadrillion Btu)'],
        WindPower: data['Wind power (quadrillion Btu)'],
        LiquidBiofuels: data['Liquid biofuels (quadrillion Btu)'],
        WoodBiomass: data['Wood biomass (quadrillion Btu)'],
        Hydropower: data['Hydropower (quadrillion Btu)'],
    });
    newRenewables.save(function(err) {
        console.log(err);
    });
    // console.log('Saved: ' + data);
    response.send({
        result: 'success'
    });
});

router.get('/clear/', function(request, response) {
    'use strict';
    if (!connect.connected) {
        connect.doConnection(request.body.useSimple);
    }
    Renewables.remove({}, function(err, removeResponse) {
        console.log('collection removed');
        response.send({
            result: 'success: ' + removeResponse.result.n + ' items removed!'
        });
    });
});

// JSON methods
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
