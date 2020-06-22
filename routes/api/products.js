const router = require('express').Router();
const midelware = require('../../midelware'); 
const { products } = require('../../db');


router.get("/", midelware.checkToken, async (req, res) => {
    const getProducts = await products.findAll();
    res.status(200).json(getProducts);
  });

  router.post("/",midelware.checkToken, midelware.isAdmin, async (req, res) => {
    const postProducts = await products.create(req.body);
    res.status(200).json(postProducts);
  });
  
  router.put("/:id",midelware.checkToken, midelware.isAdmin, async (req, res) => {
    await products.update(req.body, {
      where: { id: req.params.id }
    }).then(()=>{
        res.status(200).json("Producto actualizado correctamente")
    }).catch(()=>{
        res.status(403).json("No se pudo actualizar el producto");
    })
    
  });
  
  router.delete('/:id',midelware.checkToken, midelware.isAdmin, async (req, res)=> {
      await products.destroy({
          where: {id: req.params.id}
      }).then(()=>{
        res.status(200).json("Producto eliminado");
      }).catch(()=>{
        res.status(403).json("No se pudo eliminar el producto");
      })
      
  })

module.exports = router;



