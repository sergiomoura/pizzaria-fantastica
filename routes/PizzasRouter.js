var express = require('express');
var router = express.Router();
const VerificaUsuarioLogado = require("../middlewares/VerificaUsuarioLogado");
const upload = require("../lib/upload");

const PizzasController = require('../controllers/PizzasController');

/* GET home page. */
router.get('/', PizzasController.index);
router.get('/busca', PizzasController.search);
router.get('/pizzas/:id/edit', VerificaUsuarioLogado,PizzasController.edit);
router.get('/pizzas/create', VerificaUsuarioLogado, PizzasController.create);
router.get('/pizzas/:id', PizzasController.show);
router.get('/pizzas', VerificaUsuarioLogado, PizzasController.list);
router.post('/pizzas', VerificaUsuarioLogado, upload.single("img"), PizzasController.store);
router.put('/pizzas/:id/update', VerificaUsuarioLogado, PizzasController.update);
router.delete('/pizzas/:id', VerificaUsuarioLogado, PizzasController.delete);

module.exports = router;
