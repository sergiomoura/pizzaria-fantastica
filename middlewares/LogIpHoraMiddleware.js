const fs = require('fs');
const path = require('path');



const LogIpHoraMiddleware =(req, res, next) => {    
    let linha = `${req.ip} | ${new Date().toISOString()} | ${req.protocol + '://' + req.get('Host')} \n`;
    fs.appendFileSync(path.join(__dirname,"../logs/log.txt"), linha);
    next();   // passa para o proximo middleware     
}

module.exports = LogIpHoraMiddleware;