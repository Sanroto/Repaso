'use strict'

const express = require('express')
const bodyparser = require('body-parser')
const fs = require('fs')

const app = express()
const port = process.env.port || 3000
const root = '/carpeta'

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

app.get('/', (req, res) => {
    let index = fs.readFileSync('/Login.html')
    res.end(index)
})

app.get('/:par', (req, res) => {
    let file = fs.readFileSync(req.params.par)
    res.end(file)
})

app.post('/formulario', (req, res) => {
    var name = req.body.user_name
    var correo = req.body.user_email
    var mensaje = req.body.user_message
    console.log(`Probando mi post: ${name}`)
    console.log(`Probando mi post: ${correo}`)
    console.log(`Probando mi post: ${mensaje}`)
})

app.listen(port, () => {
    console.log(`API RESTful corriendo en el http//:localhost:${port}`)
})

let myJson = {
    "arrayPersonas": {
        "id1": {
            "name": "Pepe",
            "apellido": "Loco"
        },
        "id2": {
            "name": "Aurelio",
            "apellido": "Jojoa"
        }
    }
}
app.post('/actualizar', (req, res) => {
    let id = String(req.body.user_id)
    myJson.arrayPersonas[id].name = req.body.user_name
    console.log(myJson.arrayPersonas[id])
})

app.put('/actualizar', (req, res) => {
    let id = String(req.body.user_id)
        //myJson.arrayPersonas[id].name= req.body.user_name  
    console.log(id)
})