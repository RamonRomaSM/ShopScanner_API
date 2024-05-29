import { db } from '@vercel/postgres';
import { kv } from '@vercel/kv';
import Express from 'express';
import http from 'http';
const express = require("express");
const app = express();
/*
ahora ver lo de los dato de la tabla 
(que las 2 tablas tengan las mismas filas pero seleccionando
diferentes columnas), hacer el getSeleccionadas(que coja los valores diferenciales esos) 
meterlos en el where de alguna forma (no se si en el hasMap o como hacerlo)
*/

//      createUser(nombre,passw,Email?)(a las malas sobrecargo con otro que no pida mail)
//      logIn(nombre,passw)
//      cuando guardas un carrito haces el createLista 
//      podria hacer toda la gestion de listas ofline y al cerrar/cerrarsesion/salir guardar el estado del usuario(con la excusa del consumo de peticiones?)


/*
    aparentemente se puede meter un json en el body de una peticion post
    asi que meter ahi a lista que se quiere guardar

    createLista (nombre, idUser, cadena de productos...)    
        te la añado y te mando de vuelta tus listas 

    updateLista (cadena de productos...)
        me pasas la lista nueva y la sobreescribo
        te mando de vuelta tus listas

    deleteLista (nombre idUser)
*/



app.get("/", async function(req, res) {
  
    res.send("a");
});

app.get("/getPagina", async function( req,res ) {
    let num = req.query.num * 15;
    const client = await db.connect();
    const a = await client.sql`SELECT * FROM productos WHERE num > ${num} LIMIT 15;`;
   
    res.status(200).json({a});
});

app.get("/register/nombre/:nombre/aaa/:passw",async function (req,res) {
    res.send(req.params.nombre);
    //comprobar si existe(pedirlo y ver si retorna vacio?) e insertarlo
    //usar posgres
});

app.get("/login",async function(req,res) {
    let nombre = req.query.nombre;
    let passw = req.query.passw;
    //comprobar si esta bien(pedirlo y ver si retorna vacio?) e insertarlo
    //usar posgres
});




app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;