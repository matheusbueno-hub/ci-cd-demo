const http = require("node:http");


const PORT = process.env.PORT || 3000;


const server = http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8"
    });


    response.end(JSON.stringify({
        message: "Nova versão publicada!",
        status: "online"
    }));
});


module.exports = server;


if (require.main === module) {
    server.listen(PORT, () => {
        console.log(`Servidor disponível na porta ${PORT}`);
        console.log('Link para acesso: http://localhost:3000')
    });
}
