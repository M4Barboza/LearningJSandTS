require('dotenv').config();
const express = require("express");
const routes = require('./routes.js');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Conexão Ocorreu')
        app.emit('pronto');
    })
    .catch(e => console.log(e));

const { middlewareGlobal } = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true }));

app.use(express.static('./public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(middlewareGlobal);
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
        console.log("Servidor executando na porta 3000");
    });
})