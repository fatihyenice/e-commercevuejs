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
    return res.status(200).json({message: "ok"});
})
  

module.exports = router;