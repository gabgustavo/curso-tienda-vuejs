const Usuario = require("../models/usuario");
const bcrypt = require("bcryptjs");
const jwt = require("../helpers/jwt");


const registroUsuarioAdmin = async (req, res) => { 
    const dataReq = req.body;

    const usuarioExistente = await Usuario.find({ email: dataReq.email });
    if (usuarioExistente.length > 0) {
        return res.status(400).send({ message: 'El usuario ya existe' });
    }    
    

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
        message: 'Usuario creado correctamente',
        data: usuario
    });
}

const loginUsuario = async (req, res) => { 
    const dataReq = req.body;
    
    const usuario = await Usuario.findOne({ email: dataReq.email });
    if( !usuario ) {
        return res.status(404).send({ message: 'Usuario o contraseña no son validos' });
    }

    const passValida = bcrypt.compareSync(dataReq.password, usuario.password);
    if( !passValida ) {
        return res.status(404).send({ message: 'Usuario o contraseña no son validos' });
    }
    const token = jwt.createToken(usuario);
    res.status(200).send({
        message: '',
        token: token,
        usuario: {
            _id: usuario._id,
            nombres: usuario.nombres,
            apellidos: usuario.apellidos,
            email: usuario.email,
            rol: usuario.rol,
            estado: usuario.estado
        }
    });
}

module.exports = {
    registroUsuarioAdmin,
    loginUsuario
};