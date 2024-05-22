const express = require("express");
const app = express();
//TODO: falta seguir el tutorial de posgres, en una carpeta a parte hacer una clase de acc a datos
//      para el jueves llevar al menos un json de productos
//
//      hacer un script que me lea el csv de la db y la convierta en un solo insert
//      
//
app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/resp1", (req, res) => res.send("resp1"));
app.get("/resp2", (req, res) => res.send("resp1"));
app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;