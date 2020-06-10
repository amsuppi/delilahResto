const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const $sequelize = require('sequelize');
const sequelize = new $sequelize('mysql://mari:suppi@localhost:8889/data_base');

const jwt = require('jsonwebtoken');

//--------------------------------------------------------

app.post("/seguro", autenticateUser, (req,res)=>{

    res.send(`Esta es una pagina autenticada hola ${req.body.name}`);
})

const autenticateUser = (req, res, next)=>{
    try{
        const token = req.header.authorization.split(' ')[1];
        const verificationToken = jwt.verify();

        if(verificationToken){
            req.body.name = verificationToken;
            return next();
        }

    }catch(err){
        res.json({error: "Error de validacion"})
    }
};