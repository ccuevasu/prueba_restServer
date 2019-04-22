require("./config/config");

const express = require('express');
const app = express();

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', function(req, res) {
    res.json('Hello World')
})

app.get('/usuario', function(req, res) {
    res.json('get usuario')
})

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        })
    } else {
        res.json({
            persona: body
        });
    }




})

app.put('/usuario/:idUsuario', function(req, res) {

    let id = req.params.idUsuario;

    res.json({
        titulo: "Nombre Usuario",
        id
    });
    res.json('put usuario')
})

app.delete('/usuario', function(req, res) {
    res.json('delete usuario')
})

app.listen(process.env.PORT, () => {
    console.log(`escuchando puerto: `, process.env.PORT);
})