import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://link-repository.onrender.com/api/auth/login', {
                email,
                password,
            });
            setToken(response.data.token);
            alert('Connexion réussie !');
        } catch (error) {
            console.error('Erreur de connexion', error);
            alert('Identifiants incorrects');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Connexion</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Se connecter</button>
        </form>
    );
};

export default LoginPage;
