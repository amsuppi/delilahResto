module.exports = (sequelize, type) => {
    return sequelize.define('orders', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: type.STRING,
        price: type.INTEGER(5),
        pay: type.STRING,
        id_order: type.INTEGER,
        id_products: type.INTEGER,
    })
}
