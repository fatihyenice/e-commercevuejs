const express = require('express');
const connec = require('./db.js');
const produits = require('./produit.js');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))

connec.getConnection((err, connection) => {
    connection.release();

    if(err){
        console.error("Impossible de se connecter à la base de donnée !");
    }else{
        console.log("Connexion réussie !");
    }
})

app.use("/api/products", produits);

app.listen(3000, () => {
    console.log(`Serveur démarré et écoute sur le port 3000`);
})