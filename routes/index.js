var express = require('express');
var router = express.Router();
var HomeController = require('../app/controllers/home_controller');
var AdmController = require('../app/controllers/adm_controller');

/* GET home page. */
router.get('/', HomeController.index);
router.get('/adm.json', AdmController.index);

module.exports = router;
