const express = require('express')
const app = express()

app.get('/', (req,res)=>{
res.send("DevOps Microservices App Running")
})

app.listen(3000)
