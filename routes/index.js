var express = require('express');
var router = express.Router();
const {token} = require('../middlewares/auth.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/token',token);

module.exports = router;
