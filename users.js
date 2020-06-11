const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const $sequelize = require('sequelize');
const sequelize = new $sequelize('mysql://mari:suppi@localhost:8889/data_base');

const jwt = require('jsonwebtoken');

//-----------------------------------------------------------------

app.use(bodyParser.json());

function validateRegister(req, res, next){
    const  email  = req.body.email;

    const user = sequelize.query(`SELECT * FROM user WHERE email = '${email}'`);

        if (user) {
          res.status(400).send({
            message: "Usuario ya existente"
          });
          return;
        }
  
} 

app.post('/registro', validateRegister, (req, res)=>{

 const {name, lastname, email, phone, adress, pass } = req.body;
            sequelize.query(
    
                `INSERT INTO user (name, lastname, email, phone, adress, pass) VALUES ( ?, ?, ?, ?, ?, ?)`,
        
                {replacements: [name, lastname, email, phone, adress, pass]}
    
            ).then(res.json("Contacto agregado"))
           
  
});

function validateLogin(req, res, next){
    const {email, pass} = req.body;

    if(!email || !pass){
        res.json("Faltan datos!!");
    }else{
        next();
    }

   
}

app.post("/login", validateLogin, (req,res)=>{
    const {email, pass} = req.body;
    const token = jwt.sign(email, pass);
    res.json({token}, "secret");

})

const autenticarUsuario = (req,res,next) => {
    try{
        const token = req.header.authorization.split(' ')[1];
        const verificationToken = jwt.verify(token, "secret");

        if(verificationToken){
            req.body.name = verificationToken;
            return next();
        }

    }catch(err){
        res.json({error: "Error de validacion"})
    }
}

app.post("/seguro",  validateLogin, autenticarUsuario, (req,res)=>{

    res.send(`Esta es una pagina autenticada hola ${req.body.name}`);
})



app.listen(3300,()=>{
    console.log('Servidor inicalizado');
   
})