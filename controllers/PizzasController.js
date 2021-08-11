const pizzasJson = require('../database/Pizzas.json');


module.exports = {
	index: (req, res)=>{
		res.render("index", {pizzasJson});
	},
	show: (req, res) => {
		const { id } = req.params
		let proximo = id;
		let voltar = id;
		// 1 - Carregar a pizza de id passado (pizzas.find);		
		let pizza = pizzasJson.find(pizza => pizza.id == id)
		// 2 - Renderizar a view pizza passando a pizza encontrada
		// {pizza:pizza}

		if (id >= pizzasJson.length) {
			//proximo =false
			proximo = 1
		} else {
			proximo = parseInt(id) + 1
		}
		if (id <= 1) {
			//voltar =false
			voltar = pizzasJson.length
		} else {
			voltar = parseInt(id) - 1
		}
		res.render("pizza", { pizza, proximo: proximo, voltar })
	},
	busca:(req, res) =>
	{		
		const  busca  = req.query.busca;
        let pizzaEncontrada = pizzasJson.filter(pizza => pizza.nome.toUpperCase().includes(busca.toUpperCase()))
		res.render("index", {pizzasJson: pizzaEncontrada});
	},
	create:(req, res) =>
	{
		res.render("pizza-create")
	},
	store:(req, res) =>
	{
		let pizza = {
			id:pizzasJson[pizzasJson.length -1].id + 1,
			nome: req.body.nome,
			ingredientes: req.body.ingredientes.split(","),
			preco: Number(req.body.preco),
			img:"/img/" + req.file.filename,
			destaque:true
		}
		pizzasJson.push(pizza);
		res.render("index", {pizzasJson})
	}


// req.query.busca metodo get
// req.query.body metodo post

//X.INCLUDES

}