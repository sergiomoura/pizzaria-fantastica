module.exports = (req, res, next) => {
   
const buscaPizza = req.params.id;
if(!req.cookies.visitadas)
{
    res.cookie('visitadas', buscaPizza);
    console.log("pizzas visitadas: " + buscaPizza)
}
else
{    
    res.cookie('visitadas', decodeURIComponent(`${req.cookies.visitadas},${buscaPizza}`));
    console.log("cookie de pizzas visitadas: " + req.cookies.visitadas + "|c" + req.params.id)
}


   // let visitadas = req.cookies.visitadas;
  //  console.log("cookie de pizzas visitadas" + visitadas)
   // res.cookie('visitadas', req.params.id);
    next();
}