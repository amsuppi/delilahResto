const Sequelize = require('sequelize');

const ProductsModels = require('./models/products');
const UsersModels = require('./models/users');
const OrdersModels = require('./models/orders');

const sequelize = new Sequelize('mysql://mari:suppi@localhost:8889/mi_base_2.0');

const products = ProductsModels(sequelize, Sequelize);
const users = UsersModels(sequelize, Sequelize);
const orders = OrdersModels(sequelize, Sequelize);


sequelize.sync({force: false })
    .then(()=>{
        console.log("Tablas sinconizadas");
        
    });

users.hasMany(orders);
orders.belongsTo(users);
products.belongsToMany(orders, { through: "order-products" });
orders.belongsToMany(products, { through: "order-products" });
    

    
module.exports = {
    products, 
    users, 
    orders
}

