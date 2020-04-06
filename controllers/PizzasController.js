const pizzas = require('../database/Pizzas.json');
const fs = require("fs");
const path = require('path');

module.exports = {
	index: (req, res) => {
		res.render("index", { pizzas, busca: "" });
	},
	show: (req, res) => {

		// Capturando a pizza com o id passado na rota
		let pizza = pizzas.find(
			pizza => pizza.id == req.params.id
		);

		// Capturando a posição da pizza no array
		let pos = pizzas.indexOf(pizza);

		// determinando o id da próxima pizza e da anterior
		let idPrev = null;
		let idNext = null;

		if (pos > 0) {
			idPrev = pizzas[pos - 1].id;
		}

		if (pos < pizzas.length - 1) {
			idNext = pizzas[pos + 1].id;
		}

		// Retornando a pizza para o usuário
		if (pizza) {
			res.render("pizza", { pizza, idNext, idPrev });
		} else {
			res.render("erros/pizzaNaoEncontrada", { id: req.params.id });
		}
	},
	search: (req, res) => {
		let busca = req.query.q;
		if (busca) {
			let result = pizzas.filter(p => p.nome.toUpperCase().includes(busca.toUpperCase()));
			return res.render('index', { pizzas: result, busca });
		} else {
			return res.redirect('/');
		}
	},
	edit: (req, res) => {
		// Carregar a pizza de id passado pela rota
		let pizza = pizzas.find(
			(pizza) => {
				return pizza.id == req.params.id;
			}
		)

		// Enviar view edit-pizza passando para ela a pizza carregada
		return res.render("crud-pizzas/edit", { pizza });
	},
	create: (req, res) => {
		return res.render("crud-pizzas/create");
	},
	list: (req, res) => {
		return res.render("crud-pizzas/list", { pizzas });
	},
	store: (req, res) => {

		// Capturar as info enviadas pelo usuário
		let { nome, ingredientes, preco } = req.body;
		ingredientes = ingredientes.split(","); // Partindo a string nas virgulas
		ingredientes = ingredientes.map( // remover possíveis espaços de cada vírgula
			ing => ing.trim()
		)

		// Tratar o upload do arquivo
		let img = `/img/${req.file.originalname}`;

		// Criar um objeto literal representando uma pizza com as informações enviadas
		let id = pizzas[pizzas.length - 1].id + 1;
		const pizza = { id, nome, ingredientes, preco: Number(preco), destaque: false, img }

		// Adicionar a pizza criada ao array de pizzas
		pizzas.push(pizza);

		// Salvar o array de pizzas no Pizzas.json
		fs.writeFileSync(path.join('database', 'Pizzas.json'), JSON.stringify(pizzas))

		// Redirecionar o usuário para a lista de pizzas
		res.redirect("/pizzas");

	},
	update: (req, res) => {
		// Capturar o id da pizza a ser alterada
		let id = req.params.id;

		// Capturar os novos dados da pizza
		let { nome, ingredientes, preco } = req.body;

		// Alterar os campos da pizza (exceto a imagem)
		let pizza = pizzas.find(pizza => pizza.id == id);
		pizza.nome = nome;
		pizza.preco = Number(preco);
		pizza.ingredientes = ingredientes.split(",").map(ing => ing.trim());

		// Salvar o array de pizzas no Pizzas.json
		fs.writeFileSync(path.join('database', 'Pizzas.json'), JSON.stringify(pizzas))

		// Redirecionar o usuário para a lista de pizzas
		res.redirect("/pizzas");
	},
	delete: (req, res) => {
		// Capturar o id da pizza
		let id = req.params.id;

		// remover a pizza do id
		pizzas.splice(pizzas.findIndex(e => e.id == req.params.id), 1);

		// Salvando o array de pizzas no arquivo
		fs.writeFileSync("database/Pizzas.json", JSON.stringify(pizzas));

		// redirecionar para a lista de pizzas
		res.redirect("/pizzas");


	}
}