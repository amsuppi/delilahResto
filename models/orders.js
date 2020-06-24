module.exports = (sequelize, type) => {
    return sequelize.define('order', {
        orderId: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: type.STRING,
        total: type.INTEGER(5),
        pay: type.STRING
    })
}
