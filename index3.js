const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('projeto1','root', 'root',  {
    host: 'localhost', 
    dialect: 'mysql'
});

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/cad', (req, res) => {
    res.render('formulario');
});

app.post('/add', (req, res) => {
    res.send("Formulário recebido");
})

app.listen(8081, () => {
    console.log("Servidor rodando na url http://localhost:8081");
});