module.exports = {
	index: (req, res)=>{
		res.render("index");
	},

	show: (req,res) => {
		res.render("pizza");
	}
}