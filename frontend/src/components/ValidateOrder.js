import React, { useState } from 'react';

const ValidateOrder = ({ items, totalPrice, onEmptyCart }) => {
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: '',
    surname: '',
    city: '',
    neighborhood: '',
    phone: '',
  });
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo({ ...deliveryInfo, [name]: value });
  };

  const handleOrderSubmit = async () => {
    setIsSubmitting(true);
    setMessage('Envoi de la commande...');
    console.log('Envoi de la commande avec les données:', { items, deliveryInfo, totalPrice });

    try {
      // Envoyer les articles de commande au backend
      const orderResponse = await fetch(' https://link-repository.onrender.com/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items, deliveryInfo, totalPrice }),
      });
      const orderResponseData = await orderResponse.json();
      console.log('Réponse du backend pour les commandes:', orderResponseData);

      if (orderResponse.ok) {
        setMessage('Commande validée avec succès!');
        onEmptyCart();
      } else {
        setMessage('Erreur lors de la validation de la commande');
        console.error('Erreur lors de la validation de la commande:', orderResponseData);
      }
    } catch (error) {
      console.error('Erreur lors de la communication avec le serveur:', error);
      setMessage('Impossible de se connecter au serveur');
    }
  
    setIsSubmitting(false);
  };

  return (
    <div>
      <h2>Valider la commande</h2>
      <input name="name" placeholder="Nom" onChange={handleInputChange} />
      <input name="surname" placeholder="Prénom" onChange={handleInputChange} />
      <input name="city" placeholder="Ville" onChange={handleInputChange} />
      <input name="neighborhood" placeholder="Quartier" onChange={handleInputChange} />
      <input name="phone" placeholder="Téléphone" onChange={handleInputChange} />
      <button onClick={handleOrderSubmit} disabled={isSubmitting}>Valider</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ValidateOrder;
