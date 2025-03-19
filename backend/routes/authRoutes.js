const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const db = require('../config/db');
const router = express.Router();

router.post('/login', [
    check('email').isEmail(),
    check('password').isLength({ min: 6 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        const query = 'SELECT * FROM users WHERE email = $1';
        const result = await db.query(query, [email]);

        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
        }

        const user = result.rows[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
        }

        const token = jwt.sign({ userId: user.id }, 'SECRET_KEY', { expiresIn: '1h' });
        req.session.token = token;
        res.json({ token });
    } catch (error) {
        console.error('Erreur lors de la connexion', error);
        res.status(500).json({ error: 'Erreur lors de la connexion' });
    }
});

module.exports = router;
