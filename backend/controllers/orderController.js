const db = require('../config/db');

const createOrder = (req, res) => {
    const { items, deliveryInfo, totalPrice, promoCode } = req.body;
    console.log('Requête reçue:', JSON.stringify(req.body, null, 2));

    if (!items || !deliveryInfo || !totalPrice) {
        return res.status(400).json({ message: 'Données manquantes dans la requête.' });
    }

    const queryDelivery = 'INSERT INTO delivery_info (name, surname, city, neighborhood, phone) VALUES ($1, $2, $3, $4, $5) RETURNING id';
    db.query(queryDelivery, [deliveryInfo.name, deliveryInfo.surname, deliveryInfo.city, deliveryInfo.neighborhood, deliveryInfo.phone], (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'ajout des informations de livraison:', err);
            return res.status(500).json({ message: 'Erreur lors de l\'ajout des informations de livraison.', error: err });
        }

        const deliveryId = result.rows[0].id;
        console.log('Informations de livraison ajoutées avec l\'ID:', deliveryId);

        const queryOrder = 'INSERT INTO orders (delivery_id) VALUES ($1) RETURNING id';
        db.query(queryOrder, [deliveryId, totalPrice, promoCode || null], (err, result) => {
            if (err) {
                console.error('Erreur lors de la création de la commande:', err);
                return res.status(500).json({ message: 'Erreur lors de la création de la commande.', error: err });
            }

            const orderId = result.rows[0].id;
            console.log('Commande créée avec l\'ID:', orderId);

            if (!Array.isArray(items)) {
                return res.status(400).json({ message: 'Les articles doivent être un tableau.' });
            }

            const orderItems = items.map(item => [orderId, item.name, item.price, item.quantity]);
            const queryOrderItems = 'INSERT INTO order_items (product_price, quantity) VALUES ($1, $4)';

            orderItems.forEach(orderItem => {
                db.query(queryOrderItems, orderItem, (err) => {
                    if (err) {
                        console.error('Erreur lors de l\'commande:', err);
                        return res.status(500).json({ message: 'Erreur lors de l\'ajout des articles à la commande.', error: err });
                    }
                });
            });

            console.log('Articles succès pour la commande ID:', orderId);
            res.status(201).json({ message: 'Commande validée avec succès', orderId });
        });
    });
};

module.exports = { createOrder };
