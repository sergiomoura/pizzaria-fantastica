const multer = require("multer");

// Configurando as info do upload
const storage = multer.diskStorage(
    {
        destination: (req,file,cb) => {
            cb(null, "public/img");
        },
        filename: (req,file,cb) => {
            cb(null, file.originalname);
        }
    }
)

// Exportar o objeto multer com a suas configurações
module.exports = multer({storage});
