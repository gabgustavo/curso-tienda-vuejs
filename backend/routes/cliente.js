let express = require("express");

const clienteController = require('../controllers/clienteController');

let api = express.Router();

api.get('/testing', clienteController.testing);

module.exports = api;