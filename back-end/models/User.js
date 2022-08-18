const { DataType } = requre('sequelize')

const db = require('../sequelize/conn')


const User = db.define('User',{
    name:{
        type: DataType.STRING,
        allowNull: false,
    },
    occupation:{
        type: DataType.STRING,
        require: true,
    },
    newsletter: {
        type: DataType.BOOLEAN,
    },
})

module.exports = User