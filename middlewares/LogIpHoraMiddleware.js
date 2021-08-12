const fs = require('fs');
const path = require('path');

const LogIpHoraMiddleware = (req, res, next) => {

    // Cada linha do log deve estar assim: 127.0.0.1 | 2021-08-11T20:15:00 | /pizzas/create
    let linha = `${req.ip} | ${new Date().toISOString()} | ${req.url}\n`;
    fs.appendFileSync(path.join(__dirname,"../logs/log.txt"), linha);

    next();
}

module.exports = LogIpHoraMiddleware;