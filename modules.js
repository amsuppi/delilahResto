var products = (sequelize, type)=>{
    return sequelize.define('products', {
        id:{
            type: type.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: type.VARCHAR(50),
        price: type.INIT(5),
        stock: type.INIT(5)
    })
}

var user = (sequelize, type)=>{
    return sequelize.define('user', {
        id:{
            type: type.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.VARCHAR(50),
        lastname: type.VARCHAR(50),
        email: type.VARCHAR(50),
        phone: type.INIT(11),
        adress: type.VARCHAR(50),
        pass: type.VARCHAR(50),
    })
}

module.exports = {products, user};