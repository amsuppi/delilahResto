const router = require('express').Router();
const midelware = require('../../midelware');
const { orders } = require('../../db');
const users = require('../../models/users');
const products = require('../../models/products');

//------------------------------------------------------------

    router.get("/",midelware.checkToken, midelware.isAdmin, async (req, res) => {
        const getOrders = await orders.findAll({
          include:[{
            model: products
          }]
        }).then((data)=>{
          console.log(data);
        })
        res.status(200).json(getOrders);
      });
    
      router.post("/",midelware.checkToken, async (req, res) => {
        const postOrders = await orders.create(req.body);
        res.status(200).json(postOrders);
      });
      
      router.put("/:id",midelware.checkToken, midelware.isAdmin, async (req, res) => {
        await orders.update(req.body, {
          where: { id: req.params.orderId }
        }).then(()=>{
            res.status(200).json("La orden fue actualizada correctamente")
        }).catch(()=>{
            res.status(403).json("No se pudo actualizar la orden");
        })
        
      });
      
      router.delete('/:id', midelware.checkToken, midelware.isAdmin, async (req, res)=> {
          await orders.destroy({
              where: {id: req.params.orderId}
          }).then(()=>{
            res.status(200).json("Orden eliminada con exito");
          }).catch(()=>{
            res.status(403).json("No se pudo eliminar la orden");
          })
          
      })

module.exports = router;