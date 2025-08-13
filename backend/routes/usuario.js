let express = require("express");

const usuariosController = require('../controllers/usuarioController');

let api = express.Router();

api.post('/user-register', usuariosController.registroUsuarioAdmin);

module.exports = api;