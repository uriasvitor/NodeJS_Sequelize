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

app.get('/user/:id', async (req,res)=>{
    const id = req.params.id
    console.log(id)
    const user = await User.findOne({ raw:true, where: {id:id} })

    res.send(user);
})

app.post('/user/delete/:id', async (req,res)=>{
    const id = req.params.id
    console.log(id)
    const user = await User.destroy({ where: {id:id} })
    console.log(user)

    res.redirect('/')
})
app.post('/user/update',async (req,res)=>{
    const id = req.body.id
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter

    if(newsletter === 'on'){
        newsletter = true;
    }
    
    const userData = {
        id,
        name,
        occupation,
        newsletter
    }

    console.log(name, occupation, newsletter)
    const user = await User.update( userData, { where:{ id: id} })

    res.send(user)
})

app.get('/user/edit/:id', async (req,res)=>{
    const id = req.params.id

    const user = await User.findOne({ raw: true, where:{ id:id }})

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