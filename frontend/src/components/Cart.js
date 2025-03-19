import React, { useState } from 'react';
import './cart.css';

function Cart({ cartItems, onRemoveFromCart }) {
    const [promoCode, setPromoCode] = useState('');
    const [isValidCode, setIsValidCode] = useState(null);

    // Liste des codes promo valides
    const validPromoCodes = ['PROMO10', 'DISCOUNT20', 'SAVE30'];

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handlePromoCodeChange = (e) => {
        setPromoCode(e.target.value);
    };

    const validatePromoCode = () => {
        if (validPromoCodes.includes(promoCode.toUpperCase())) {
            setIsValidCode(true);
        } else {
            setIsValidCode(false);
        }
    };

    return (
        <div className="cart-page">
            <h2>Mon Panier</h2>
            {cartItems.length === 0 ? (
                <p>Votre panier est vide</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.imgSrc} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-info">
                                <h3>{item.name}</h3>
                                <p>Quantité: {item.quantity}</p>
                                <p>Prix: {item.price} FCFA</p>
                                <button 
                                    className="remove-button"
                                    onClick={() => onRemoveFromCart(item.id)}
                                >
                                    Retirer
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-total">
                        <h3>Total: {calculateTotalPrice()} FCFA</h3>
                    </div>
                    
                    {/* Section Code Promo */}
                    <div className="promo-code-section">
                        <input 
                            type="text" 
                            placeholder="Entrez votre code promo" 
                            value={promoCode} 
                            onChange={handlePromoCodeChange}
                        />
                        <button onClick={validatePromoCode}>Appliquer</button>
                        {isValidCode !== null && (
                            <p className={isValidCode ? "valid-code" : "invalid-code"}>
                                {isValidCode ? "Code promo appliqué!" : "Code invalide"}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
