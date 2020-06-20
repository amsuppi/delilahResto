const router = require('express').Router();
const bcrypt = require('bcrypt');
const {users} = require('../../db');
const { check, validationResult } = require('express-validator');
const jwtSecret = require("../../midelware");

const jwt = require('jsonwebtoken');

router.post('/register', [
    check('email', 'Debe llenar el campo email').not().isEmpty(),
    check('pass', 'La contraseña es obligatoria').not().isEmpty()
],
async (req, res)=>{
    
    const error = validationResult(req);
    if(!error.isEmpty()){
        res.status(403).json("Faltan datos obligatorios");
    }

    req.body.pass = await bcrypt.hashSync(req.body.pass, 10);
    const RegiterUser = users.create(req.body);
    res.status(200).json("Registrado con exito");

});

router.post('/login', async (req, res)=>{
    const loginUser = await users.findOne({where: {email: req.body.email} });

    if(loginUser){
        const validate = bcrypt.compareSync(req.body.pass, loginUser.pass);
        if(validate){

            const token = jwt.sign({id: loginUser.id}, jwtSecret);
            res.json({token});

        }else{
            res.status(403).json({error: "El usuario y/o contraseña es incorrecto"});
        }

    }else{
        res.status(403).json({error: "El usuruario no existe"});
    }
});

router.get("/", async (req, res) => {
    const getUsers = await users.findAll();
    res.status(200).json(getUsers);
  });

  router.put("/:id", async (req, res) => {
    await users.update(req.body, {
      where: { id: req.params.id }
    }).then(()=>{
        res.status(200).json("Producto actualizado correctamente")
    }).catch(()=>{
        res.status(403).json("No se pudo actualizar el producto");
    })
    
  });
  
  router.delete('/:id', async (req, res)=> {
      await users.destroy({
          where: {id: req.params.id}
      }).then(()=>{
        res.status(200).json("Producto eliminado");
      }).catch(()=>{
        res.status(403).json("No se pudo eliminar el producto");
      })
      
  })


module.exports = router;