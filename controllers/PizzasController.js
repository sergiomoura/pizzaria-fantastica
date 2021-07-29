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
	}
}