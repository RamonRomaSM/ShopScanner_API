import { sql } from '@vercel/postgres';
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
app.get("/", (req, res) => res.send( sql`SELECT * FROM productos WHERE precio < 10 LIMIT 5;`));

app.get("/resp1", (req, res) => res.send("resp1"));

app.get("/resp2", (req, res) => res.send("resp1"));
app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;