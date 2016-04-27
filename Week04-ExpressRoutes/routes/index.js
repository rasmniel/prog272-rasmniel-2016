var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Routes Nielsen' });
});

router.get('/read', function(request, response, next) {
  response.send({name: 'Rasmus Nielsen'});
});

module.exports = router;
