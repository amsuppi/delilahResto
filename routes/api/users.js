const router = require('express').Router();
const bcrypt = require('bcrypt');

const {users} = require('../../db');

router.post('/register', async (req, res)=>{
    req.body.pass = await bcrypt.hashSync(req.body.pass, 10);

    const RegiterUser = users.create(req.body);

    res.status(200).json("Registrado con exito");

});





module.exports = router;