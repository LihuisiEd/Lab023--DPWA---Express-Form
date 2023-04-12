const express = require('express')

const app = express()

const jsdom = require('jsdom')

const port = 8080

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.use('/', express.static(__dirname + "/public"));


app.listen(port,() => {
    console.log('Aplicacion en linea')
})



const path = require('path')
