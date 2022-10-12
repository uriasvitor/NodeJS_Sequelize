const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('node_sequelize','root','',{
    host:'localhost',
    password:'123456',
    dialect:'mysql'
})

module.exports = sequelize