const express = require('express')
const conn = require('./sequelize/conn')
const app = express()
const User = require('./models/User')

app.use('/',(req,res)=>{
    res.send(`funcionou`)
    console.log('entrou no sitio')
})



conn.sync().then(()=>{
    app.listen(3000,()=>{

    })
}).catch((err)=>{
    console.log(err)
})