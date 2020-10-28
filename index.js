//console.log("hola mundo");
//userlener
//7VoH6RSx0b3OuxGl
//
// desplegarservidor


const express = require('express'); //trae el frameword
const { dbconection } = require('./database/config');
require('dotenv').config(); // habilita al servidor a usar variables de entorno
const cors = require('cors')

//CODIGO PARA DESPLEGAR EL SERVIDOR
const server = express();

server.use(cors());

server.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Desplegando el primer servicio REST'
    });
});
dbconection(); //coneccion a la base de datos

//console.log(process.env);
server.listen(process.env.PORT, () => {
    console.log("el servidor se esta desplegando en el puerto : " + process.env.PORT)
    console.log("Lener Crisologo Narro")
});