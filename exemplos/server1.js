var http = require ("http");
http.createServer((req, res) => {
    res.end("Meu primeiro server");
}).listen(8081);
console.log("Servidor Rodando em http://localhost:8081");