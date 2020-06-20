const jwt = require('jsonwebtoken');
const jwtSecret = require("./jwt.secret");

const validateToken = (req, res, next)=>{
    
    try {
        const token = req.headers.authorization.split(' ')[1];

        const verification = jwt.verify(token, jwtSecret);

        loginUser= verification;
        next();

        
    } catch (error) {

        res.status(400).json("Validación incorrecta");
        
    }
}

const isAdmin = (req, res, next)=>{
    const admin = req.body.admin;

    if(!req.body.admin){
        res.status("403");
        res.json("No estas autorizado");
    }else{
        next();
    }
}

module.exports = {
    validateToken
}