const jwt = require('jwt-simple');


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

    req.id = payload.id;
    next();
};

const isAdmin = (req, res, next) => {
    const admin = req.body.admin
    if(!admin === 1)
    return res.json('Usuario no autorizado.');
    next();
}


module.exports = {
    checkToken: checkToken,
    isAdmin: isAdmin
}