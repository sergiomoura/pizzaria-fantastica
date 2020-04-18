const users = require("../database/users.json");

const UsersController = {
    list: (req, res) => {
        res.send(users);
    }
}

module.exports = UsersController;