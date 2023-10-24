const express = require('express');
const route = express();
const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatoController');
//Rotas da Home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

//Rota Contato
route.get('/contato', contatoController.paginaInicial)

module.exports = route;