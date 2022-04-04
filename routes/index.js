var express = require('express');
var router = express.Router();

// a middleware function with no mount path. This code is executed for every request to the router
router.use('/users/cool', (req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
