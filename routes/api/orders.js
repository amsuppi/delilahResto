const router = require('express').Router();
const {orders} = require('../../db');

//------------------------------------------------------------

    router.get("/", async (req, res) => {
        const getOrders = await orders.findAll();
        res.status(200).json(getOrders);
      });
    
      router.post("/", async (req, res) => {
        const postOrders = await orders.create(req.body);
        res.status(200).json(postOrders);
      });
      
      router.put("/:id", async (req, res) => {
        await orders.update(req.body, {
          where: { id: req.params.id }
        }).then(()=>{
            res.status(200).json("La orden fue actualizada correctamente")
        }).catch(()=>{
            res.status(403).json("No se pudo actualizar la orden");
        })
        
      });
      
      router.delete('/:id', async (req, res)=> {
          await orders.destroy({
              where: {id: req.params.id}
          }).then(()=>{
            res.status(200).json("Orden eliminada con exito");
          }).catch(()=>{
            res.status(403).json("No se pudo eliminar la orden");
          })
          
      })

module.exports = router;