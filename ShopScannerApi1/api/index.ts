import { db } from '@vercel/postgres';
import { kv } from '@vercel/kv';
import Express from 'express';
import http from 'http';
const express = require("express");
const app = express();

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

app.get("/getPagina/:num/:hint", async function( req,res ) {
    let num = req.params.num * 15;
    let hint;
    if(req.params.hint == " "){hint ='%%';}
    else{hint ='% ' + req.params.hint + ' %';}
    const client = await db.connect();
    /*
        de normal es '% hint %' , pero si me devulve un vacio, probar '%hint%' porque puede habreme pedido un substring (va a ser lento pero weno)
        (o podrian lanzarse 2 threads dede el cliente, 1 dando por hecho que es un string y otro dando por hecho que es un substring)
    */
    const a = await client.sql`SELECT * FROM productos WHERE num > ${num} AND LOWER(nombre) LIKE LOWER(${hint}) LIMIT 15;`;
   
    res.send(hint);
});

app.get("/register/nombre/:nombre/passw/:passw",async function (req,res) {

    const client = await db.connect();
    const a = await client.sql`SELECT existe_usuario(${req.params.nombre});`;

    const existe = a["rows"][0]["existe_usuario"]
    

    if(existe == false){
        client.sql`INSERT INTO usuarios (nombre, passw) VALUES (${req.params.nombre}, ${req.params.passw});`
        res.status(200).send(true);
    }
    else{
        res.status(200).send(false);
    }
});

app.get("/login/nombre/:nombre/passw/:passw",async function(req,res) {
    const client = await db.connect();
    const exists = await client.sql`SELECT * FROM usuarios WHERE nombre = ${req.params.nombre} AND passw = ${req.params.passw};`;
    //exists tiene el boolean que me dice si ya existe, sacarlo del json y hacer un if, por ultimo un req.send(true o false o algo asi)
    res.status(200).json({exists});
});




app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
