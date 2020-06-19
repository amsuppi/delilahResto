module.exports = (sequelize, type)=>{
    return sequelize.define('products', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: type.STRING (50),
        price: type.INTEGER (5),
        stock: type.INTEGER (5)
    })
}

