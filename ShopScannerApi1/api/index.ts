import { db } from '@vercel/postgres';
const express = require("express");
const app = express();
//TODO: falta seguir el tutorial de posgres, en una carpeta a parte hacer una clase de acc a datos
//      para el jueves llevar al menos un json de productos
//
//      hacer un script que me lea el csv de la db y la convierta en un solo insert
//      
//

/*
/aa?cosa
esto se iria a la  de /aa

*/ 

app.get("/", async function(req, res) {
    const client = await db.connect();
    const a = await client.sql`SELECT * FROM productos LIMIT 5;`;
    res.status(200).json({a});
});
app.get("/aa", async function(req, res) {
    const client = await db.connect();
    const a = await client.sql`SELECT * FROM productos LIMIT 1;`;
    res.status(200).json({
        req:"a"
    });
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;