const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const $sequelize = require('sequelize');
const sequelize = new $sequelize('mysql://mari:suppi@localhost:8889/data_base');

const resultado = sequelize.query(
    `SELECT * FROM productos`,
    { raw: true },
);

//----------------------------------------------------------------------

app.use(bodyParser.json());

app.get("/productos", (req, res, next)=>{

    res.json(resultado);
    next();
});

app.put('/productos/:id', (req, res)=>{
    const title = req.body.title;
    const price = req.body.price;
    const id = req.body.id;

        sequelize.query(
            `UPDATE productos SET title = ?, price = ? WHERE id = ?`,
            {replacements:[title, price, id]})
        
        .then( res.json("actualizado"))
    
});

app.post('/productos', (req, res) =>{

    const title = req.body.title;
    const price = req.body.price;

    sequelize.query(`
        INSERT INTO productos (title, price) VALUES ( ?, ?)`,
        {replacements: [title, price]

    }).then(res.json("Agregado"))

});



app.listen(3000,()=>{
    console.log('servidor inicalizado');
   
})



