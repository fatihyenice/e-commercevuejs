const express = require('express');
const connec = require("../db.js");
const router = express.Router();


router.get("/", (req,res) => {
    const sql = "SELECT * FROM produits ORDER BY id_produit DESC LIMIT 6";

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

router.post("/idproduct", (req, res) => {
    const id = req.body.idproduct;
 
    if (!id) {
        return res.status(400).json({ message: "Le paramètre 'idproduct' est requis." });
    }
 
    const parsedId = parseInt(id, 10);
    if (isNaN(parsedId) || parsedId <= 0) {
        return res.status(400).json({ message: "Le paramètre 'idproduct' doit être un nombre entier positif." });
    }

    const sql = "SELECT * FROM produits WHERE id_produit = ? LIMIT 1";

    connec.query(sql, [parsedId], (err, result) => {
        if (err) {
            console.error("Erreur SQL:", err);
            return res.status(500).json({ message: "Erreur serveur" });
        }

        if (result.length === 0) {
            return res.status(404).json({ message: "Produit non trouvé." });
        }

        res.json(result[0]);
    });
});


module.exports = router;