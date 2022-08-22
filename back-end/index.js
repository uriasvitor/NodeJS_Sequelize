const express = require('express')
const cors = require('cors')
const conn = require('./sequelize/conn')


const app = express()
const User = require('./models/User')

app.use(cors())
app.use(express.json())


app.get('/', async(req,res)=>{
    const user = await User.findAll({raw:true})

    console.log(`/Users/create foi acessado`)
    res.send(user)
})

app.post('/user/create', (req,res)=>{
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter

    if(newsletter === 'on'){
        newsletter = true;
    }
    
    console.log(name, occupation, newsletter)
    User.create({name, occupation, newsletter })

    res.redirect('/')
})

conn.sync().then(()=>{
    app.listen(3000,()=>{

    })
}).catch((err)=>{
    console.log(err)
})