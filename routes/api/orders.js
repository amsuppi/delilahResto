const router = require('express').Router();
const midelware = require('../../midelware');
const { orders, products } = require('../../db');

//------------------------------------------------------------

    router.get("/", midelware.checkToken, midelware.isAdmin, async (req, res) => {
        const getOrders = await orders.findAll();
        res.status(200).json(getOrders);
      });
    
      router.post("/", midelware.checkToken, async (req, res) => {
        const postProduct = req.body.productId;
        const postOrder = req.body;
        postOrder.userId = req.id;
        const postOrders = await orders.create(postOrder).then(
            (order)=>{
              postProduct.forEach(async element => {
                const prod = await products.findOne({
                  where: { productId: element }
                })
                 prod.addProduct(order);
              });
              res.status(200).json("Su orden a sido generada con exito");
            }
        )
      });
      
      router.put("/:orderId",midelware.checkToken, midelware.isAdmin, async (req, res) => {
        await orders.update(req.body, {
          where: { orderId: req.params.orderId }
        }).then(()=>{
            res.status(200).json("La orden fue actualizada correctamente")
        }).catch(()=>{
            res.status(400).json("No se pudo actualizar la orden");
        })
        
      });
      
      router.delete('/:orderId', midelware.checkToken, midelware.isAdmin, async (req, res)=> {
          await orders.destroy({
              where: { orderId: req.params.orderId}
          }).then(()=>{
            res.status(200).json("Orden eliminada con exito");
          }).catch(()=>{
            res.status(400).json("No se pudo eliminar la orden");
          })
          
      })

module.exports = router;