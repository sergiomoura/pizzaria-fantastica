const usuarios = require("../database/Usuarios.json");

module.exports = {
    showLogin: (req, res) => {
        return res.render('admin/login');
    },
    login: (req,res) => {
        
        // Capturar o email e a senha enviadas pelo cliente
        const {email, senha} = req.body;

        /* sem desconstrução
        const email = req.body.email;
        const senha = req.body.senha;
        */
        
        // Buscar no array de usuários um usuário que tenha email igual ao fornecido
        const usuario = usuarios.find( u => u.email == email && u.senha == senha);
        
        // Usuário está definido?
        if(!usuario){
            return res.redirect('/admin/login?err=1');
        }
        
        // Dou uma mensagem de sucesso
        return res.send("Deu bom!");
    }
}