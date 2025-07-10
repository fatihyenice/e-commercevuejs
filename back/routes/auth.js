const express = require('express');
const connect = require('../db.js');
const bcrypt = require('bcrypt');
const router = express.Router();
const session = require('express-session'); 
const auth = require('../middlewares/auth.js');
 
router.post("/loggin", (req,res) => {
    const { mail, passwordv } = req.body; 
    if(!mail || !passwordv){
        return res.status(400).json({ message: "L'adresse mail et le mot de passe sont requis!" });
    }

    const verifMailreq = "SELECT id_users,email, password FROM users WHERE email = ?";
    const donneemail = [mail];

    connect.query(verifMailreq,donneemail, (err, result) => {
        if(err){
            return res.status(500).json({message: "Impossible d'executer la requête de recherche de mail !"})
        }

        if(result.length < 1){
            return res.status(404).json({message: "L'adresse mail est introuvable !"})
        }

        const user = result[0]; 

        bcrypt.compare(passwordv, user.password, (err, isMatch) => {
            if (err) {
                return res.status(500).json({ message: "Erreur lors de la vérification du mot de passe." });
            } 
            if (!isMatch) {
                return res.status(401).json({ message: "Mot de passe incorrect !" });
            }
 
            req.session.logged = user.id_users;
            req.session.save((err) => {
                if(err){
                    return res.status(500).json({message: "Impossible d'enregistrer la session !"});
                }
                return res.status(200).json({ message: "L'utilisateur a bien été trouvé !", id: user.id_users });
            })
        });
    })
});

router.post('/checksession', (req, res) => {
    if(req.session.logged){
        return res.status(200).json({connected: true})
    }else{
        return res.status(200).json({connected: false})
    }
});
router.post('/logout', (req, res) => {
    if (req.session.logged) {
        req.session.destroy(err => {
            if (err) {
                return res.status(500).json({ message: "Impossible de détruire la session !" });
            } 
            res.clearCookie('connect.sid'); 
            return res.status(200).json({ connected: false, message: "Déconnexion réussie." });
        });
    } else { 
        return res.status(200).json({ connected: false, message: "Pas de session active." });
    }
});


module.exports = router;