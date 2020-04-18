const users = require("../database/Users.json");

const UsersController = {
    list: (req, res) => {
        res.send(users);
    }
}

module.exports = UsersController;