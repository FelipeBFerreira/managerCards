const express = require("express");
const server = express();

 

server.set("view engine", "ejs")
server.use(express.static("public"));

server.get("/" , function (req, res){ res.render("pages/index"); })
server.get("/signup" , function (req, res){ res.render("pages/signup"); })

server.listen(3000, () => console.log('RODANDO'));