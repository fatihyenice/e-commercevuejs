const session = require('express-session');

const sess = session({
  secret: 'unSecretLongEtFort',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === "production", // true en prod HTTPS seulement
    httpOnly: true,
    maxAge: 1000 * 60 * 60 // 1 heure
  }
});

module.exports = sess;
