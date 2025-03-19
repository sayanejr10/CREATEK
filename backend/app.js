const express = require('express');
const session = require('express-session');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'azertyukil15344254485dfsgd554443222s',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));


app.listen(5000, () => {
    console.log('Serveur en cours d\'exécution sur  https://onrender.com');
});
