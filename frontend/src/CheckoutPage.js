import React, { useState } from 'react';
import axios from 'axios';

const CheckoutPage = () => {
  const [cart, setCart] = useState([]); // Replace with your cart state
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: '',
    address: '',
    city: '',
    phone: '',
  });
  const [totalPrice, setTotalPrice] = useState(0);

  const envoyerCommande = async () => {
    const orderData = {
      cartItems: cart, // Liste des articles du panier
      deliveryInfo: deliveryInfo, // Informations de livraison
      totalPrice: totalPrice, // Prix total
    };

    try {
      const response = await axios.post('https://link-repository.onrender.com/api/orders', orderData);
      console.log('Commande envoyée avec succès', response.data);
      alert('Commande validée !');
    } catch (error) {
      console.error('Erreur lors de l\'envoi de la commande', error);
      alert('Erreur lors de la validation de la commande.');
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      {/* Add form inputs for delivery information */}
      <button onClick={envoyerCommande}>Valider la commande</button>
    </div>
  );
};

export default CheckoutPage;
