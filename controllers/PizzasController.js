const pizzas = require('../database/Pizzas.json');

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
	}
}