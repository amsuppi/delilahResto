module.exports = (sequelize, type)=>{
    return sequelize.define('user', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING(50),
        lastname: type.STRING(50),
        email: {
            type: type.STRING(50),
            unique: true,
            allowNull: false },
        phone: type.INTEGER(11),
        adress: type.STRING(50),
        pass: type.STRING,
        admin: type.BOOLEAN (10)
    })
}
