const jwt = require('jwt-simple');
const { users } = require('./db');

const checkToken = (req, res , next) => {

    if(!req.headers['token']){
        return res.status(404).json({ error: 'Incluir el user token en el header.'});
    }

    const userToken = req.headers['token'];
    let payload = {};

    try{
        payload = jwt.decode(userToken, 'contraseña muy secreta');
    } catch (err){
        return res.json({error: 'Token Incorrecto.'});
    }

    req.user = payload;
    next();
};

const isAdmin = (req, res, next) => {
    const userI = req.user.admin;

    console.log(userI);
    if(!userI === 1){
        res.json("ERRRORRRRR!");
        return
    }else{
        next();
    } 
}

module.exports = {
    checkToken: checkToken,
    isAdmin: isAdmin
}