var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express Routes Nielsen'
  });
});

router.get('/read', function(request, response) {
  response.send({
    name: 'Rasmus Nielsen'
  });
});

router.get('/add', function(request, response) {
  var operandA = parseInt(request.query.operandA);
  var operandB = parseInt(request.query.operandB);
  response.send({
    sum: operandA + operandB
  });
});

module.exports = router;
