const express = require('express');
const connec = require("./db.js");
const router = express.Router();


router.get("/", (req,res) => {
    const sql = "SELECT * FROM produits ORDER BY id_produit DESC LIMIT 10";

    connec.query(sql, (err, result) => {
        if(err){
            console.error('Erreur SQL:', err);
            return res.status(500).json({ message: 'Erreur serveur' });
        }

        res.json(result);
    })
});

router.get("/nolimit", (req, res) => {
    const sql = "SELECT * FROM produits ORDER BY id_produit DESC";

    connec.query(sql, (err, result) => {
        if(err){
            console.error('Erreur SQL:', err);
            return res.status(500).json({ message: 'Erreur serveur' });
        }

        res.json(result);
    })
})

module.exports = router;