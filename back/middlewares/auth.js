const express = require('express');

module.exports = (req, res, next) => {
if (!req.session || !req.session.userId) {
    return res.status(401).json({ message: "Accès refusé. Vous devez être connecté." });
}
next();  
};