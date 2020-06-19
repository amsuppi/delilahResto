const router = require('express').Router();
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://mari:suppi@localhost:8889/mi_base_2.0');


router.get('/', (req, res)=>{
    const resultado = sequelize.query(
        `SELECT * FROM products`,
        {type: sequelize.QueryTypes.SELECT}
    );

    res.json(resultado);
})

router.get('/:id', function (req, res) {
    const id = req.params.id;

    sequelize.query(
        `SELECT * FROM productos WHERE id = ?`,
        {replacements:[id], type: sequelize.QueryTypes.SELECT})

        .then(resultado =>{
            res.json(resultado);
        })

  });

router.put('/:id', (req, res)=>{
    const {id, title, price, stock} = req.body;

        sequelize.query(
            `UPDATE products SET title = ?, price = ?, stock = ? WHERE id = ?`,
            {replacements:[title, price, stock, id]})
        
        .then( res.json("actualizado"))
    
});

router.post('/', (req, res) =>{

    const {title, price, stock} = req.body;

    sequelize.query(`
        INSERT INTO products (title, price, stock) VALUES ( ?, ?, ?)`,
        {replacements: [title, price, stock]

    }).then(res.json("Agregado"))

});

module.exports = router;



