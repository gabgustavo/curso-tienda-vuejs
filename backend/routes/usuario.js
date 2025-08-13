let express = require("express");
let {decodeToken} = require("../middlewares/authenticate");

const usuariosController = require('../controllers/usuarioController');
const { isLogged } = require("../middlewares/isLogged");

let api = express.Router();
isLogged
api.post('/user-register', decodeToken, isLogged, usuariosController.registroUsuarioAdmin);
api.post('/user-login', usuariosController.loginUsuario);

module.exports = api;