const express = require('express');
const rutas = express.Router();
const customercontroller=require('../customercontroller');

//rutas.get("/", (req,res) => {
//	res.send("Hola mundo pero en node jajaja");
//});

rutas.get('/',customercontroller.list);
rutas.post('/add',customercontroller.save);
rutas.get('/delete/:id',customercontroller.delete);
rutas.get('/update/:id',customercontroller.edit)
rutas.post('/update/:id',customercontroller.update)

module.exports = rutas;