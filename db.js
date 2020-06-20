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
        console.log("Tablas sinconizadas")
    });

products.belongsToMany(orders, { through: "orders-products" });
orders.belongsToMany(products, { through: "orders-products" });
    
users.hasMany(orders);
orders.belongsTo(users);

    
module.exports = {
    products, 
    users, 
    orders
}

