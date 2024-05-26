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
POSTGRES_URL="postgres://default:LgdV3Hc7UFKI@ep-quiet-feather-a2l8vl1h-pooler.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require"
POSTGRES_PRISMA_URL="postgres://default:LgdV3Hc7UFKI@ep-quiet-feather-a2l8vl1h-pooler.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require&pgbouncer=true&connect_timeout=15"
POSTGRES_URL_NO_SSL="postgres://default:LgdV3Hc7UFKI@ep-quiet-feather-a2l8vl1h-pooler.eu-central-1.aws.neon.tech:5432/verceldb"
POSTGRES_URL_NON_POOLING="postgres://default:LgdV3Hc7UFKI@ep-quiet-feather-a2l8vl1h.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require"
POSTGRES_USER="default"
POSTGRES_HOST="ep-quiet-feather-a2l8vl1h-pooler.eu-central-1.aws.neon.tech"
POSTGRES_PASSWORD="LgdV3Hc7UFKI"
POSTGRES_DATABASE="verceldb"
*/ 
/*
export default async function handler (req,res){
    const client = await db.connect();
    const a = await client.sql`SELECT * FROM productos LIMIT 5;`;
    console.log(req);
    res.status(200).json({a});
}
*/
/*
const client = await db.connect();
const a = await client.sql`SELECT * FROM productos LIMIT 5;`;


app.get("/", (req, res) => res.send(res.json({a})));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
*/



app.get("/", async function(req, res) {
    const client = await db.connect();
    const a = await client.sql`SELECT * FROM productos LIMIT 5;`;
    res.status(200).json({a});
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;