module.exports = (sequelize, type) => {
    return sequelize.define('order', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: type.STRING,
        price: type.INTEGER(32),
        pay_method: type.STRING,
        productId: type.INTEGER,
    });

}