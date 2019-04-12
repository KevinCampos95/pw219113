const express = require('express');
const rutas = express.Router();

rutas.get("/", (req,res) => {
	res.send("Hola mundo pero en node jajaja");
});

module.exports = rutas;