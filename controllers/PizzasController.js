const pizzas = require('../database/Pizzas.json');
const fs = require('fs');
const path = require('path');

module.exports = {
	index: (req, res)=>{
		res.render("index", {pizzas});
	},
	show: (req,res) => {
		// res.send("salve!!!  " + req.params.id);
		
		// 1 - Carregar a pizza de id passado (pizzas.find);

		// 2 - Renderizar a view pizza passando a pizza encontrada
		res.render("pizza")
	},
	busca: (req, res) => {

		// Guardar a string buscada em uma variável "busca"
		const busca = req.query.busca;

		// Representar em um array "encontradas" somente as pizzas
		// que contenham a string buscada
		const encontradas = pizzas.filter(
			p => p.nome.toLowerCase().includes(busca.toLowerCase())
		)

		// Retornar uma view com as pizzas encontradas
		res.render("index", {pizzas: encontradas});
	},
	create: (req,res) => {
		res.render("pizza-create");
	},
	store: (req, res) => {

		let pizza = {
			id:pizzas[pizzas.length - 1].id + 1 ,
			nome: req.body.nome,
			ingredientes: req.body.ingredientes.split(","),
			preco: req.body.preco,
			img: "/img/" + req.file.filename,
			destaque:true
		}

		pizzas.push(pizza);

		// Salvando array de pizzas no arquivo database/Pizzas.json
		fs.writeFileSync(path.join(__dirname,"../database/Pizzas.json"), JSON.stringify(pizzas,null,1));

		// Redireciona o usuário para a rota a raíz
		res.redirect("/");

	}
}