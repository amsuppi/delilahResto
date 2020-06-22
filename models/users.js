module.exports = (sequelize, type)=>{
    return sequelize.define('user', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING(50),
        lastname: type.STRING(50),
        email: type.STRING(50),
        phone: type.INTEGER(11),
        adress: type.STRING(50),
        pass: type.STRING,
        admin: type.INTEGER (10)
    })
}
