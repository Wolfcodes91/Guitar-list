var express = require('express');
var router = express.Router();
var guitars = require('../data/guitars')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { guitars });
});

router.post('/guitars', function(req, res) {
  req.body.inTune = false;
  guitars.push(req.body);
  res.redirect('/')
})

router.delete('/guitars/:idx', function(req, res) {
  guitars.splice(req.params.idx, 1)
  res.redirect('/')
})

module.exports = router;
