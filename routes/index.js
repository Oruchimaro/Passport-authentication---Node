var express = require('express');
var router = express.Router();

/* index controller init*/
let landing = require('../controllers/landing');

/* GET home page. */
router.get('/', landing.get_landing);

module.exports = router;
