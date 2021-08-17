module.exports = (req,res,next) => {
    
    let idPizzaDaVez = req.params.id;

    if(!req.cookies.visitadas){
        res.cookie('visitadas', idPizzaDaVez);
        console.log("Primeira pizza visitada: " + idPizzaDaVez);
    } else {
        console.log("Pizzas já visitadas: " + req.cookies.visitadas);
        res.cookie('visitadas',`${req.cookies.visitadas},${idPizzaDaVez}`);
        console.log(req.cookies);
    }
    next();
}