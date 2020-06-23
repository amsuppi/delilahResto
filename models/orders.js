module.exports = (sequelize, type) => {
    return sequelize.define('orders', {
        orderId: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: type.STRING,
        price: type.INTEGER(5),
        pay: type.STRING,
        user_id: type.INTEGER,
    })
}
