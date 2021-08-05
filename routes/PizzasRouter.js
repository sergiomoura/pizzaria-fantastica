const { response } = require('express');
var express = require('express');
var router = express.Router();

const PizzasController = require('../controllers/PizzasController');

/* GET home page. */
router.get('/', PizzasController.index);
router.get('/pizzas/create', PizzasController.create);
router.post('/pizzas/create', PizzasController.store);
router.get('/pizzas/:id', PizzasController.show);
router.get('/busca', PizzasController.busca);

module.exports = router;
