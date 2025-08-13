const Usuario = require("../models/usuario");
const bcrypt = require("bcryptjs");


const registroUsuarioAdmin = async (req, res) => { 
    const dataReq = req.body;

    /* bcrypt.hash(dataReq.password, 10, async (err, hash) => {
        console.log('jmmmmmm');
        
        if (err) {
            return res.status(400).send({ message: 'No se ha podido encriptar la contraseña' });
        }

        console.log(hash);
        
    }) */
    const salt = bcrypt.genSaltSync(10);
    const passHash = await bcrypt.hash(dataReq.password, salt);
    dataReq.password = passHash;    

    const usuario = await Usuario.create(dataReq);
    usuario.password = undefined;    

    return res.status(201).send({
        data: usuario
    });
}

module.exports = {
    registroUsuarioAdmin
};