const jwt = require('jwt-simple');
const moment = require('moment');
const secret = 'AQQkADAwATYwMAItYjg&yMy1kY2I2LTAwA*i0wMAoAEAAKf';

exports.createToken = (usuario) => {
    const payload = {
        sub: usuario._id,
        nombres: usuario.nombres,
        apellidos: usuario.apellidos,
        email: usuario.email,
        rol: usuario.rol,
        estado: usuario.estado,
        iat: moment().unix(),
        exp: moment().add(1, 'days').unix()
    };

    return jwt.encode(payload, secret);
}