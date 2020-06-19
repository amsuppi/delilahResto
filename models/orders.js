module.exports = (sequelize, type)=>{
    return sequelize.define('orders', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_user: type.STRING(50),
        id_products: type.STRING(5),
    });
}
