var express = require('express');
var router = express.Router();

const UsersController = require('../controllers/UsersController');

/* GET home page. */
router.get('/users/create', UsersController.create);
router.get('/users', UsersController.list);

module.exports = router;
