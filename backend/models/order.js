const db = require('../config/db');

const create = (orderData) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO orders (delivery_id) VALUES (?)';
        db.query(query, [orderData.delivery_id, orderData.total_price], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

module.exports = { create };
