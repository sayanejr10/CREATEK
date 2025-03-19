import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './auth.css'; // Importer le fichier CSS

function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            await axios.post(' https://link-repository.onrender.com/api/login', { email, password });
            navigate('/admin');
        } catch (error) {
            setError('Erreur lors de l\'enregistrement');
        }
    };

    return (
        <div className="auth-container">
            <h1>Inscription Admin</h1>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mot de passe"
            />
            <button onClick={handleRegister}>S'inscrire</button>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}

export default RegisterPage;
