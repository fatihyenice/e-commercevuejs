require('dotenv').config();
const express = require('express');
const connec = require('./db.js');
const produits = require('./routes/produit.js');
const panier = require('./routes/panier.js');
const auth = require('./routes/auth.js');
const cors = require('cors'); 
const sess = require('./middlewares/session.js'); 

const app = express();
app.use(express.json()); 

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(sess);

connec.getConnection((err, connection) => {
    connection.release();

    if(err){
        console.error("Impossible de se connecter à la base de donnée !");
    }else{
        console.log("Connexion réussie !");
    }
})

app.use("/api/products", produits);
app.use("/api/panier", panier);
app.use("/api/auth", auth);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré et écoute sur le port ${PORT}`);
});