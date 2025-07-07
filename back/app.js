const express = require('express');
const connec = require('./db.js');

const app = express();
app.use(express.json());

connec.getConnection((err, connection) => {
    connection.release();

    if(err){
        console.error("Impossible de se connecter à la base de donnée !");
    }else{
        console.log("Connexion réussie !");
    }
})