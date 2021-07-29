const pizzasJson = require('../database/Pizzas.json');

module.exports = {
	index: (req, res)=>{
		res.render("index", {pizzasJson});
	},
	show: (req, res) => {
		const { id } = req.params
		let resultado = pizzasJson.filter(function (pizzas) {
            if (pizzas.id == id)
		        res.render("pizza", {pizzas})		
		})
		
	}

}