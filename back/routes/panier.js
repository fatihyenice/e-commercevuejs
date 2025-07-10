const express = require('express');
const db = require ('../db.js')
const router  = express.Router();
const auth = require('../middlewares/auth.js');

router.post("/countpanier", auth, (req, res) => {
  const userid = req.session.logged;
  if (!userid) {
    return res.status(400).json({ message: "Le paramètre 'id' est requis." });
  }

  const sql = "SELECT SUM(quantity) as total FROM panier WHERE id_users = ?";
  const donnee = [userid];

  db.query(sql, donnee, (err, result) => {
    if (err) {
      console.error("Impossible de récupérer le panier de l'utilisateur !");
      return res.status(500).json({ message: "Erreur serveur." });
    }

    const total = result[0].total || 0;  

    return res.status(200).json(total);  
  });
});

router.post('/getpanier', auth, (req, res) => {
    const sql = "SELECT * FROM panier pan INNER JOIN produits prod ON pan.id_produit = prod.id_produit WHERE pan.id_users = ?";
    const donnees = [req.session.logged];

    db.query(sql, donnees, (err, result) => {
        if(err){
          return res.status(500).json({ message: "Erreur serveur." });
        } 

        if (!result.length) {
          return res.status(200).json([]);
        }
        return res.status(200).json(result);
    })
})

router.post("/addpanier", auth, (req, res) => {
  const idProduit = req.body.idProduit;
  const userId = req.session.logged;

  if (!idProduit || !userId) {
    return res.status(400).json({ status: "error", message: "Données manquantes (idProduit ou userId)" });
  }

  const sqlGetActive = "SELECT * FROM panier WHERE id_produit = ? AND id_users = ? AND inactive = 0";
  db.query(sqlGetActive, [idProduit, userId], (err, activeRows) => {
    if (err) {
      console.error("Erreur SQL SELECT :", err);
      return res.status(500).json({ status: "error", message: "Erreur lors de la vérification du panier actif", error: err });
    }

    if (activeRows.length > 0) {
      const row = activeRows[0];
      const newQuantity = row.quantity + 1;

      const sqlUpdate = "UPDATE panier SET quantity = ? WHERE id_panier = ?";
      db.query(sqlUpdate, [newQuantity, row.id_panier], (err) => {
        if (err) {
          console.error("Erreur SQL UPDATE :", err);
          return res.status(500).json({ status: "error", message: "Erreur lors de la mise à jour de la quantité", error: err });
        }
        return res.status(200).json({ status: "success", message: "Quantité mise à jour", quantity: newQuantity });
      });

    } else {
      // Génère un identifiant simple pour numerocommande
      const numerocommande = `NC-${userId}-${Date.now()}`;

      const sqlInsert = `
        INSERT INTO panier (quantity, dateheure, commande_valider, numerocommande, id_produit, id_users) 
        VALUES (?, NOW(), 0, ?, ?, ?)`;

      db.query(sqlInsert, [1, numerocommande, idProduit, userId], (err) => {
        if (err) {
          console.error("Erreur SQL INSERT :", err);
          return res.status(500).json({ status: "error", message: "Erreur lors de l'insertion du produit dans le panier", error: err });
        }
        return res.status(200).json({ status: "success", message: "Produit ajouté au panier", quantity: 1 });
      });
    }
  });
});



module.exports = router;