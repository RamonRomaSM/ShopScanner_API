const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/resp1", (req, res) => res.send("resp1"));
app.get("/resp2", (req, res) => res.send("resp1"));
app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;