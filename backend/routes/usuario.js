let express = require("express");

const usuariosController = require('../controllers/usuarioController');

let api = express.Router();

api.post('/user-register', usuariosController.registroUsuarioAdmin);
api.post('/user-login', usuariosController.loginUsuario);

module.exports = api;