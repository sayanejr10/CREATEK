const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();
const port = 5000;

// Utiliser CORS et body-parser
app.use(cors());
app.use(bodyParser.json());

// Configurer le middleware de session
app.use(session({
    secret: 'd2c3987e9e42e3f403cb0c3a920ce71968b50eae4b5c313a638799b93a577731f2180dd407516c499172c0d7d5a0da1f1e53eb18de2816a0cd5e2d70655b3a29',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// Middleware de logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Utiliser les routes
app.use('/api', authRoutes);
app.use('/api', orderRoutes);
app.use('/api', adminRoutes);

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
