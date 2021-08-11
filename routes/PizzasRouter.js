var express = require('express');
var router = express.Router();
const multer = require('multer');


const PizzasController = require('../controllers/PizzasController');

const storage = multer.diskStorage({
    destination: (req, file,cb)=>{
        cb(null, './public/img')
    },
    filename:(req, file, cb) =>{
        cb(null, file.originalname)
    }
})
const uploadFile = multer({storage:storage})



/* GET home page. */
router.get('/', PizzasController.index);
router.get('/pizzas/create', PizzasController.create);
router.post('/pizzas/create', uploadFile.single('img'), PizzasController.store);
router.get('/pizzas/:id', PizzasController.show);
router.get('/busca', PizzasController.busca);



module.exports = router;
