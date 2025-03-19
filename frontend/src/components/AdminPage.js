import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './admin.css';

function AdminPage() {
    const [orders, setOrders] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('https://link-repository.onrender.com/api/orders');
                console.log(response.data);
                setOrders(response.data);
            } catch (error) {
                setErrorMessage('Erreur lors du chargement des commandes. Veuillez réessayer.');
            }
        };

        fetchOrders();
    }, []);

    const handleStatusChange = async (orderId, newStatus) => {
        try {
            await axios.put(`https://link-repository.onrender.com/api/orders/${orderId}/status`, { status: newStatus });
            setOrders(prevOrders =>
                prevOrders.map(order =>
                    order.id === orderId ? { ...order, status: newStatus } : order
                )
            );
        } catch (error) {
            setErrorMessage('Erreur lors de la mise à jour du statut. Veuillez réessayer.');
        }
    };

    const getStatusClassName = (status) => {
        switch (status) {
            case 'pending':
                return 'status-pending';
            case 'processed':
                return 'status-processed';
            case 'shipped':
                return 'status-shipped';
            case 'delivered':
                return 'status-delivered';
            case 'cancelled':
                return 'status-cancelled';
            default:
                return '';
        }
    };

    return (
        <div className="admin-container">
            <h1>Gestion des Commandes</h1>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <table className="orders-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Client</th>
                        <th>Ville</th>
                        <th>Quartier</th>
                        <th>Téléphone</th>
                        <th>Total</th>
                        <th>Statut</th>
                        <th>Actions</th>
                        <th>Produits</th>
                        <th>Code Promo</th> {/* Nouvelle colonne */}
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => {
                        const className = getStatusClassName(order.status);
                        console.log(`Statut: ${order.status}, Classe CSS: ${className}`);
                        return (
                            <tr key={order.id} className={className}>
                                <td>{order.id}</td>
                                <td>{`${order.name} ${order.surname}`}</td>
                                <td>{order.city}</td>
                                <td>{order.neighborhood}</td>
                                <td>{order.phone}</td>
                                <td>{order.total_price} FCFA</td>
                                <td>{order.status}</td>
                                <td>
                                    <select 
                                        value={order.status}
                                        onChange={e => handleStatusChange(order.id, e.target.value)}
                                    >
                                        <option value="pending">En attente</option>
                                        <option value="processed">Traitée</option>
                                        <option value="shipped">Expédiée</option>
                                        <option value="delivered">Livrée</option>
                                        <option value="cancelled">Annulée</option>
                                    </select>
                                </td>
                                <td>
                                    <ul>
                                        {order.products.map(product => (
                                            <li key={product.product_name}>
                                                {product.product_name} - {product.product_price} FCFA (Quantité : {product.quantity})
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td>{order.promo_code || 'N/A'}</td> {/* Ajout de la colonne promo */}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default AdminPage;
