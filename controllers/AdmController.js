const users = require("../database/Users.json");

module.exports = {
    show:(req,res) => {
        res.render('adm/login', {error:null});
    },
    login: (req,res) => {

        let {email,senha} = req.body;

        let user = users.find(
            user => (user.email == email && user.senha == senha)
        );

        if(user){
            req.session.user = JSON.stringify(user);
            return res.redirect("/pizzas");
        } else {
            return res.render("adm/login", {error:"Login/Senha inválidos"});
        }

    },
    logout: (req,res) => {
        req.session.destroy();
        res.redirect("/adm/login");
    }
}