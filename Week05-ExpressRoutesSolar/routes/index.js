var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Week05-ExpressRoutesSolar-Nielsen'
    });
});

router.get('/renewables', function(request, response) {
    console.log('Renewables called!');
    fs.readFile('data/Renewable.json', 'utf8', function(err, data) {
        if (err) throw err;
        console.log(data);
        response.send({
            result: 'Success',
            renewables: data
        });
    });
});

module.exports = router;
