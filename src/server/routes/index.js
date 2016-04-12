var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', {
    user: req.user,
    message: req.flash('message')[0]
  });
});

module.exports = router;
