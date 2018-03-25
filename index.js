//import express from 'express';
//import http from 'http';
//import engine from 'socket.io';
const express 				= require('express');
const http					= require('http');
const engine				= require('socket.io');
//const dbapi 				= require('./db-api/index.js');
//import dbapi from '/db-api/index.js';

const port = 3000;
const app = express();

//Configurar la ruta de archivos estáticos
app.use('/', express.static(__dirname + '/public'));

/*app.get('/pokemons', (req, res) => {
	dbapi.pokemons.find((pokemons) => {
		res.json(pokemons);
	})
});*/

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

let server = http.createServer(app).listen(port, () => {
	console.log(`El servidor está escuchando en el puerto ${port}`);
});

const io = engine.listen(server);

io.on('connection', (socket) => {
	socket.on('message', (msg) => {
		io.emit('message', msg);
	})
})