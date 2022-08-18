const { sequelize, Sequelize } = require('sequelize')

const sequelize = new Sequelize('node_sequelize','root','',{
    host:'localhost',
    dialect:'mysql'
})

try{
    sequelize.authenticate()
    console.log(`conected`)
}catch(err){
    console.log('nao foi possivel conectar:', error)
}


module.exports = sequelize