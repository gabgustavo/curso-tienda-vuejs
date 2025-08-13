const jwt = require('jwt-simple');
const moment = require('moment');
const secret = 'AQQkADAwATYwMAItYjg&yMy1kY2I2LTAwA*i0wMAoAEAAKf';

exports.decodeToken = (req, res, next) => { 
    if(!req.headers?.authorization) {
        return res.status(403).send({ message: 'Petición no autorizada' });
    }

    const token = req.headers.authorization;

    if(token.split('.').length !== 3) {
        return res.status(403).send({ message: 'Token no valido' });
    }
    try {
        const payload = jwt.decode(token, secret);

        if(payload.exp <= moment().unix()) {
            return res.status(401).send({ message: 'Token expirado' });
        }
        req.logged = payload;
        
        next();
    } catch (error) {
        return res.status(403).send({ message: 'Token no valido' });
    }
}
