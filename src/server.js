const express = require("express");
const db = require("./database/");



const app = express();

app.use(express.json())

app.listen (3000, () => {
    console.log("Servidor rodando na porta: 3000")
    db.connection();
});