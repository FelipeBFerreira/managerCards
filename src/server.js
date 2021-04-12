const express = require("express");
const server = express();

/**A implementação de autenticação veio com o uso da rotas e uso no server parte 1 */
const routes = require("./routes");

server.set("view engine", "ejs")
server.use(express.static("public"));

/**Parte 2 uso das rotas */
server.use(routes);

server.listen(3000, () => console.log('RODANDO'));