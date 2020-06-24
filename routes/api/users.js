const router = require('express').Router();
const bcrypt = require('bcrypt');
const { users } = require('../../db');
const { check, validationResult } = require('express-validator');
const midelware = require("../../midelware");

const jwt = require('jwt-simple');

router.post('/register', [
    check('email', 'Debe llenar el campo email').not().isEmpty(),
    check('pass', 'La contraseña es obligatoria').not().isEmpty()
],
async (req, res)=>{
    
    const error = validationResult(req);
    if(!error.isEmpty()){
        res.status(400).json("Faltan datos obligatorios");
    }
    req.body.pass = await bcrypt.hashSync(req.body.pass, 10);
    const RegiterUser = users.create(req.body);
    res.status(200).json("Registrado con exito");

});

router.post("/login", async (req, res) => {
    const user = await users.findOne({ where: { email: req.body.email } });
    if (user) {
      const validate = bcrypt.compareSync(req.body.pass, user.pass);
      if (validate) {
        res.status(200).json({ success: createToken(user) });
      } else {
        res.status(401).json({ error: "Usuario o clave incorrecta" });
      }
    } else {
      res.status(401).json({ error: "Usuario o clave incorrecta" });
    }
  });

  const createToken = (user) => {
    const payload = {
      id: user.id
    }

    return jwt.encode(payload, 'contraseña muy secreta');
  };

router.get("/", midelware.checkToken, midelware.isAdmin, async (req, res) => {
    const getUsers = await users.findAll();
    res.status(200).json(getUsers);
  });

  router.put("/:id", midelware.checkToken, midelware.isAdmin, async (req, res) => {
    await users.update(req.body, {
      where: { id: req.params.id }
    }).then(()=>{
        res.status(200).json("Usuario actualizado correctamente")
    }).catch(()=>{
        res.status(400).json("No se pudo actualizar el usuario");
    })
    
  });
  
  router.delete('/:id', midelware.checkToken, midelware.isAdmin, async (req, res)=> {
      await users.destroy({
          where: {id: req.params.id}
      }).then(()=>{
        res.status(200).json("Usuario eliminado");
      }).catch(()=>{
        res.status(400).json("No se pudo eliminar el usuario");
      })
      
  })

 

module.exports = router;