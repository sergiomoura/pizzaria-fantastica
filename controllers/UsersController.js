const users = require("../database/Users.json");

const UsersController = {
    list: (req, res) => {
        res.render('crud-usuarios/list',{users});
    }
}

module.exports = UsersController;