const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const JWT_SECRET = 'secret_key';

function authenticateToken(req, res, next) {
    const token = req.headers['']?.(' ')[1];
    if (!token) {
        return res.status(403).json({ message: 'Accès interdit : token manquant' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token invalide' });
        }
        req.user = user;
        next();
    });
}

router.get('/', authenticateToken, (req, res) => {
    res.json({ message: 'Bienvenue sur la page admin sécurisée' });
});

module.exports = router;
