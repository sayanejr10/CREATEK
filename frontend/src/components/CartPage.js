import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './cart.css';

function CartPage({ cart, onRemoveFromCart }) {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [promoCode, setPromoCode] = useState('');
    const [isPromoValid, setIsPromoValid] = useState(null);

    const validPromoCodes = {
        "FREESHIP": 1,
        "RCY_01": 0.9,
        "4KULTURE_4": 0.9,
        "DEVS20": 0.9,
        "RICO_02": 0.9,
        "WHILFCART_1": 0.9
    };

    const calculateTotal = () => {
    };

    const handlePromoChange = (e) => {
        const code = e.target.value.toUpperCase();
        setPromoCode(code);
        if (validPromoCodes[code]) {
            setIsPromoValid(true);
            setErrorMessage('');
        } else {
            setIsPromoValid(false);
            setErrorMessage('Code promo invalide.');
        }
    };

    const handleProceedToDelivery = () => {
        if (cart.length > 0) {
            navigate('/delivery', { state: { cart, totalPrice: calculateTotal(), appliedPromo: promoCode } });
        } else {
            setErrorMessage('Votre panier est vide. Ajoutez des articles avant de valider la commande.');
        }
    };

    return (
        <div className="cart-page">
            <button className="back-button" onClick={() => navigate(-1)}>Retour</button>
            
            <h2>Votre Panier</h2>
            <div id="cart-items">
                {cart.length > 0 ? (
                    cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={`${process.env.PUBLIC_URL}${item.imgSrcs[0]}`} alt={item.name} className="cart-item-image" />
                            <span className="cart-item-name">{item.name}</span>
                            <span className="cart-item-quantity">Quantité: {item.quantity}</span>
                            <span className="cart-item-price">Prix unitaire: {item.price} FCFA</span>
                            <span className="cart-item-total">Total: {item.quantity * item.price} FCFA</span>
                            <button onClick={() => onRemoveFromCart(item.id)} className="remove-button">
                                Retirer
                            </button>
                        </div>
                    ))
                ) : (
                    <p>Votre panier est vide</p>
                )}
            </div>

            <div className="cart-summary">
                <span className="total-general">Total Général ({cart.length} articles) = <span className={isPromoValid === true ? "valid-total" : isPromoValid === false ? "invalid-total" : ""}>{calculateTotal()} FCFA</span></span>
                <button className="validate-button" onClick={handleProceedToDelivery}>
                    Procéder à la livraison
                </button>
            </div>
        </div>
    );
}

export default CartPage;
