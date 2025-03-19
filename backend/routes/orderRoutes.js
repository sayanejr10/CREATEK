const express = require('express');
const router = express.Router();
const db = require('../config/db');
const { createOrder } = require('../controllers/orderController');

router.post('/orders', createOrder);

router.get('/orders', async (req, res) => {
    console.log("Requête pour récupérer les commandes reçue");
    const query = `
        SELECT o.id AS order_id, o.total_price, o.status, o.promo_code, 
               d.name, d.surname, d.city, d.neighborhood, d.phone,
               i.product_name, i.product_price, i.quantity
        FROM orders o
        JOIN delivery_info d ON o.delivery_id = d.id
        JOIN order_items i ON o.id = i.order_id
    `;
    
    try {
        const result = await db.query(query);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Aucune commande trouvée' });
        }

        const orders = result.rows.reduce((acc, row) => {
            const { order_id, total_price, status, promo_code, name, surname, city, neighborhood, phone, product_name, product_price, quantity } = row;
            if (!acc[order_id]) {
                acc[order_id] = {
                    id: order_id,
                    total_price,
                    status,
                    promo_code,
                    name,
                    surname,
                    city,
                    neighborhood,
                    phone,
                    products: []
                };
            }
            acc[order_id].products.push({ product_name, product_price, quantity });
            return acc;
        }, {});
    } catch (error) {
        console.error("Erreur lors de la récupération des commandes", error);
        res.status(500).json({ message: 'Erreur lors de la récupération des commandes', error: error });
    }
});

module.exports = router;
