const Sequelize = require('sequelize');

const ProductsModels = require('./models/products');
const UsersModels = require('./models/users');
const OrdersModels = require('./models/orders');

const sequelize = new Sequelize('mysql://mari:suppi@localhost:8889/mi_base_2.0');

const products = ProductsModels(sequelize, Sequelize);
const users = UsersModels(sequelize, Sequelize);
const orders = OrdersModels(sequelize, Sequelize);

users.hasMany(orders);
orders.belongsTo(users);
products.belongsToMany(orders, { as:"Products", through: "order-products", foreignKey: "productId" });
orders.belongsToMany(products, { as:"Orders", through: "order-products", foreignKey:"orderId" });


sequelize.sync({force: true })
    .then(()=>{
        console.log("Tablas sinconizadas");

        createQuerys();
        
    });

function createQuerys(){

    users.create({
            name:"Franco",
            lastname:"Perez",
            email:"franco.perez@gmail.com",
            phone: 345234234,
            adress:"Av velez Sarfield 123",
            pass: "123456",
            admin: 1
    })
}

module.exports = {
    products, 
    users, 
    orders
}

