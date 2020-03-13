var express = require('express');
var router = express.Router();
var HomeController = require('../app/controllers/home_controller');
var AdmController = require('../app/controllers/adm_controller');

/* GET home page. */
router.get('/', HomeController.index);
router.get('/adm.json', AdmController.index);
router.post('/adm.json', AdmController.create);
router.put('/adm/:adm_id.json', AdmController.change);
router.delete('/adm/:adm_id.json', AdmController.delete);

module.exports = router;
