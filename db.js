const Sequelize = require('sequelize');

const ProductsModels = require('./models/products');
const UsersModels = require('./models/users');
const OrdersModels = require('./models/orders');

const sequelize = new Sequelize("VFlVxZf6DZ", "VFlVxZf6DZ", "hkoPQeVltz", {
    host: "remotemysql.com",
    dialect: "mysql",
  });

const products = ProductsModels(sequelize, Sequelize);
const users = UsersModels(sequelize, Sequelize);
const orders = OrdersModels(sequelize, Sequelize);

users.hasMany(orders);
orders.belongsTo(users);
products.belongsToMany(orders, { as:"Products", through: "order-products", foreignKey: "productId" });
orders.belongsToMany(products, { as:"Orders", through: "order-products", foreignKey:"orderId" });


sequelize.sync({force: false })
    .then(()=>{
        console.log("Tablas sinconizadas");

        createQuerys();
    });

function createQuerys(){
    products.create({
        
            title: "Milanesas con papas",
            price : "250",
            stock: "20"
    })
    products.create({
        
        title: "Pizza de musarella",
        price : "350",
        stock: "15"
    })

    products.create({
        
        title: "Docena de empandas",
        price : "350",
        stock: "10"
})
}

module.exports = {
    products, 
    users, 
    orders
}

