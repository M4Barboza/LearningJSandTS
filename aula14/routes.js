const express = require('express');
const route = express();
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController');


//Rotas da Home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

//Rota Contato
route.get('/contato', contatoController.paginaInicial)

module.exports = route;