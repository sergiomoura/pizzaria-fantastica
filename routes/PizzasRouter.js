var express = require('express');
var router = express.Router();

const PizzasController = require('../controllers/PizzasController');

/* GET home page. */
router.get('/', PizzasController.index);
router.get('/busca', PizzasController.search);
router.get('/pizzas/:id/edit', PizzasController.edit);
router.get('/pizzas/create', PizzasController.create);
router.get('/pizzas/:id', PizzasController.show);
router.get('/pizzas', PizzasController.list);
router.post('/pizzas', PizzasController.store);
router.put('/pizzas/:id/update', PizzasController.update);
router.delete('/pizzas/:id', PizzasController.delete);

module.exports = router;
