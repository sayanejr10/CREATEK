const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ error: 'Accès n token fourni' });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Accès non autorisé, aucun token fourni' });
    }

    jwt.verify(token, 'SECRET_KEY', (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Token invalide' });
        }

        req.user = decoded;
        next();
    });
};

module.exports = authMiddleware;
