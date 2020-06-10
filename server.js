const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const $sequelize = require('sequelize');
const sequelize = new $sequelize('mysql://mari:suppi@localhost:8889/data_base');

const resultado = sequelize.query(
    `SELECT * FROM products`,
    { raw: true },
);

//----------------------------------------------------------------------

app.use(bodyParser.json());

app.get("/productos", (req, res, next)=>{

    res.json(resultado);
    next();
});

app.get('/productos/:id', function (req, res) {
    const id = req.params.id;

    sequelize.query(
        `SELECT * FROM productos WHERE id = ?`,
        {replacements:[id], type: sequelize.QueryTypes.SELECT})

        .then(resultado =>{
            res.json(resultado);
        })

  });

app.put('/productos/:id', (req, res)=>{
    const title = req.body.title;
    const price = req.body.price;
    const stock = req.body.stock;
    const id = req.body.id;

        sequelize.query(
            `UPDATE products SET title = ?, price = ?, stock = ? WHERE id = ?`,
            {replacements:[title, price, stock, id]})
        
        .then( res.json("actualizado"))
    
});

app.post('/productos', (req, res) =>{

    const title = req.body.title;
    const price = req.body.price;
    const stock = req.body.stock;

    sequelize.query(`
        INSERT INTO products (title, price, stock) VALUES ( ?, ?, ?)`,
        {replacements: [title, price, stock]

    }).then(res.json("Agregado"))

});


app.listen(3000,()=>{
    console.log('servidor inicalizado');
   
})



