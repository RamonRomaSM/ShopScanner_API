import { db } from '@vercel/postgres';
import Express from 'express';
import http from 'http';
const express = require("express");
const app = express();
//TODO: falta seguir el tutorial de posgres, en una carpeta a parte hacer una clase de acc a datos
//      para el jueves llevar al menos un json de productos
//
//      hacer un script que me lea el csv de la db y la convierta en un solo insert
//      
//      SELECT * FROM tfg.productos LIMIT 0,5
//      el 0 se refiere a la fila por la que empieza 
//      el 5 el numero de filas que recoje a partir del dado
//

app.get("/", async function(req, res) {
  
    res.send("a");
});

app.get("/getPagina", async function( req,res ) {
    let num = req.query.num * 15;
    const client = await db.connect();
    const a = await client.sql`SELECT * FROM productos WHERE num > ${num} LIMIT 15;`;
   
    res.status(200).json({a});
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;