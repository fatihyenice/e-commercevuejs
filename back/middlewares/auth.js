module.exports = (req, res, next) => {
    if (!req.session || !req.session.logged) {
      return res.status(401).json({ message: "Accès refusé. Vous devez être connecté." });
    }
    next();
  };
  