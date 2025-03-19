const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/html/pag01.html`);
});

app.listen(8081, () => {
    console.log("Servidor rodando em http://localhost:8081");
});