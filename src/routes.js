const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => res.send( "index.html"));


module.exports = routes;