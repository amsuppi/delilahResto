const jwt = require('jsonwebtoken');



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
    isAdmin
}