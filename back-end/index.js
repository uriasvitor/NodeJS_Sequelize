const express = require('express')
const conn = require('./sequelize/conn')
const app = express()


app.use('/',(req,res)=>{
    console.log('entrou no sitio')
})


app.listen(3000,()=>{
    console.log('funfando')
})