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

router.post('/register', (req, res) => { 
    const { email, name, lastname, mdpunn, mdpdeuxx } = req.body;

    if (!email || !name || !lastname || !mdpunn || !mdpdeuxx) {
        return res.status(400).json({ message: "Adresse mail, nom, prénom et/ou mot de passe requis !" });
    }

    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\-'\s]{2,30}$/;

    if (!nameRegex.test(name) || !nameRegex.test(lastname)) {
        return res.status(400).json({ message: "Le nom ou le prénom contient des caractères invalides." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!emailRegex.test(email)){
        return res.status(400).json({ message: "Adresse mail invalide." });
    }

    if (mdpunn !== mdpdeuxx) {
        return res.status(400).json({ message: "Les mots de passe ne correspondent pas !" });
    }

    const reqq = "SELECT email FROM users WHERE email = ?";
    const mail = [email]

    connect.query(reqq, mail, (err,resultats) => {
       if(resultats.length > 0) {
        return res.status(400).json({ message: "L'adresse mail est indisponible !" });
       }

        bcrypt.hash(mdpunn, 10, (err, hash) => {
            if (err) {
                console.error("Erreur de hashage :", err);
                return res.status(500).json({ message: "Erreur lors du hashage du mot de passe" });
            }

            const sql = "INSERT INTO users(nom,prenom, email, password, role) VALUES (?,?,?,?,?)";
            const donnees = [name,lastname,email, hash, "utilisateur"];  

            connect.query(sql, donnees, (err, resultats) => {
                if (err) {
                    console.error("Erreur lors de l'insertion en base :", err);
                    return res.status(500).json({ message: "Erreur lors de la création du compte" });
                }

                res.status(201).json({ message: "Utilisateur enregistré avec succès !" });
            });
        });
    });
});


module.exports = router;