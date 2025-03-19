const validateOrder = (orderData) => {
    if (!orderData.name || !orderData.surname || !orderData.city) {
        throw new Error('Les informations de livraison sont incomplètes');
    }
};

module.exports = { validateOrder };
