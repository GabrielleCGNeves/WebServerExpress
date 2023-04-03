const express = require("express");

const router = express.Router();

router.get('/', (req, res) =>{
    res.send("Hello World!")
})

router.get('/servicos', (req, res) =>{
    res.send("Página de Serviços")
})

router.get('/sobrenos', (req, res) =>{
    res.send("Página Sobre nós")
})

const app = express();
app.use('/', router);

module.exports = app;