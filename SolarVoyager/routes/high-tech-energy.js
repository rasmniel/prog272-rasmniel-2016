var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/types', function(request, response) {
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

router.get('/', function(request, response) {
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

router.get('/:id', function(request, response) {
    'use strict';
    console.log('high tech energy page called');
    response.render('high-tech-energy/' + request.params.id, {
        title: 'ElfComponent'
    });
});

module.exports = router;
