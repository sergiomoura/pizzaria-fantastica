const users = require("../database/Users.json");

const UsersController = {
    list: (req, res) => {
        res.render('crud-usuarios/list',{users});
    },
    create: (req,res) =>{
        res.render('crud-usuarios/create');
    }
}

module.exports = UsersController;