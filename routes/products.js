var express = require('express');
var router = express.Router();
const {index, create, update, destroy} = require('../controllers/ProductController.js');
const {auth} = require('../middlewares/auth.js');


/* GET home page. */
router.get('/', index);
router.use(auth);
router.post('/', create);
router.put('/:id/edit', update);
router.delete('/:id', destroy);

module.exports = router;
