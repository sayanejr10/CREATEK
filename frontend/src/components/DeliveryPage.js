import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './delivery.css';

function DeliveryForm() {
    const location = useLocation();
    const navigate = useNavigate();
    const { cart, totalPrice, appliedPromo } = location.state;
    const [deliveryInfo, setDeliveryInfo] = useState({
        name: '',
        surname: '',
        city: '',
        neighborhood: '',
        phone: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDeliveryInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleConfirmDelivery = async () => {
        if (!deliveryInfo.name || !deliveryInfo.surname || !deliveryInfo.city || !deliveryInfo.neighborhood || !deliveryInfo.phone) {
            setErrorMessage('Veuillez remplir tous les champs.');
            return;
        }

        setIsLoading(true);
        try {
            const orderData = {
                items: cart,
                deliveryInfo,
                totalPrice,
                promoCode: appliedPromo || null, // Utilisation du code promo reçu depuis CartPage
            };
            console.log("Données de commande envoyées:", orderData);

            const response = await axios.post('https://link-repository.onrender.com/api/orders', orderData);
            console.log("Réponse du serveur:", response.data);

            navigate('/confirmation');
        } catch (error) {
            console.error('Erreur lors de la validation du panier:', error.response ? error.response.data : error.message);
            setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
        }
        setIsLoading(false);
    };

    return (
        <div className="form-container">
            <h1>Formulaire de Livraison</h1>
            <form>
                <input
                    type="text"
                    name="name"
                    value={deliveryInfo.name}
                    onChange={handleInputChange}
                    placeholder="Prénom"
                />
                <input
                    type="text"
                    name="surname"
                    value={deliveryInfo.surname}
                    onChange={handleInputChange}
                    placeholder="Nom"
                />
                <input
                    type="text"
                    name="city"
                    value={deliveryInfo.city}
                    onChange={handleInputChange}
                    placeholder="Ville"
                />
                <input
                    type="text"
                    name="neighborhood"
                    value={deliveryInfo.neighborhood}
                    onChange={handleInputChange}
                    placeholder="Quartier"
                />
                <input
                    type="text"
                    name="phone"
                    value={deliveryInfo.phone}
                    onChange={handleInputChange}
                    placeholder="Téléphone"
                />
                <button type="button" onClick={handleConfirmDelivery} disabled={isLoading}>
                    {isLoading ? 'Validation en cours...' : 'Confirmer la commande'}
                </button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
        </div>
    );
}

export default DeliveryForm;