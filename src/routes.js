const express = require('express');
const routes = express.Router();

const loginController = require('../views/controllers/loginController');
const carController = require('../views/controllers/carController');


routes.get('/', carController.index)
routes.get('/login' , loginController.login)

module.exports = routes;