const router = require('express').Router();
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://mari:suppi@localhost:8889/mi_base_2.0');

//------------------------------------------------------------

router.get("/orders", (req, res)=>{

    sequelize.query(
        `SELECT pedidos.id , user.id , products.id 
        FROM pedidos
        INNER JOIN user ON pedidos.id = user.id
        INNER JOIN products ON pedidos.id = products.id`, 
        {type: sequelize.QueryTypes.SELECT}
    )
});

router.post('/orders', (req, res) =>{

    sequelize.query(
        `SELECT users.name 
        AS user, products.name 
        AS favorite FROM users 
        JOIN products 
        ON users.favorite_product = products.id`, 
        {type: sequelize.QueryTypes.SELECT}
    ).then((result)=>{
        console.log(result);
    })
    
});

module.exports = router;