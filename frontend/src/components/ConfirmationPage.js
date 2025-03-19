import React from 'react';
import { useNavigate } from 'react-router-dom';
import './confirmation.css';  // Assurez-vous d'ajouter les styles nécessaires

function ConfirmationPage() {
    const navigate = useNavigate();

    const handleGoToMenu = () => {
        navigate('/menu');
    };

    return (
        <div className="confirmation-container">
            <h1>Commande Confirmée</h1>
            <p>Merci pour votre commande. Votre commande a été confirmée et sera traitée sous peu.</p>
            <p>Pour toute information et demande d'historique de commande, veuillez nous contacter au <a href="tel:+22943839821">00229 0143839821</a>.</p>
            <button className="menu-button" onClick={handleGoToMenu}>Retourner au Menu</button>
        </div>
    );
}

export default ConfirmationPage;
