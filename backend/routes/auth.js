const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.session.token;

    if (!token) return res.sendStatus(401);

    jwt.verify(token, 'SECRETEY', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;
