const $sequelize = require('sequelize');
const sequelize = new $sequelize('mysql://mibd:root@localhost/data_base');

const express = require('express');
const server = express();

server.listen(3000, ()=>{
    console.log ("Servidor Inicializado..");
})

