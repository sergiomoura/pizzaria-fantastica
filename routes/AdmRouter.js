var express = require('express');
var router = express.Router();


const AdmController = require('../controllers/AdmController');

/* GET home page. */
router.get('/adm/login', AdmController.show);
router.post('/adm/login', AdmController.login);
router.get('/adm/logout', AdmController.logout);

module.exports = router;
