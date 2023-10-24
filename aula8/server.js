const express = require('express')

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome do Cliente: <input type="text" name="nome">
            <button>Enviar</button> 
        </form>
    `);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que foi enviado foi ${req.body.nome}`);
})

app.get('/contato', (req, res) => {
    res.send("Obrigado por entrar em contato com a gente!")
})

app.get('/testes/:idUsuarios?', (req, res) => {
    console.log(req.params);
    res.send(req.params.idUsuarios);
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log("Servidor executando na porta 3000");
});