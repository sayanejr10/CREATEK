import React, { useState, useMemo, useEffect } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import './menu.css';
import ValidateOrder from './components/ValidateOrder';
import Product from './components/Product';
import CartPage from './components/CartPage';
import Modal from './components/Modal';
import DeliveryPage from './components/DeliveryPage';
import ConfirmationPage from './components/ConfirmationPage';
import AdminPage from './components/AdminPage';
import AdminLoginPage from './components/AdminLoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import products from './productsData';

function App() {
    const [cart, setCart] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('tous');
    const [shuffledProducts, setShuffledProducts] = useState([]);

    useEffect(() => {
        const shuffleProducts = (products) => {
            return [...products].sort(() => Math.random() - 0.5);
        };
        setShuffledProducts(shuffleProducts(products));
    }, []);



    /////////////////
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    const filteredProducts = useMemo(() => {
        const calculateRelevance = (product) => {
            let relevanceScore = 0;
            const searchLower = searchQuery.toLowerCase();

            if (product.name.toLowerCase().includes(searchLower)) relevanceScore += 3;
            if (product.category.toLowerCase().includes(searchLower)) relevanceScore += 2;
            if (product.description && product.description.toLowerCase().includes(searchLower)) relevanceScore += 1;

            return relevanceScore;
        };

        const filtered = shuffledProducts.filter(
            product =>
                (filter === 'tous' || product.category === filter) &&
                (
                    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()))
                )
        );

        const lessRelevantProducts = shuffledProducts.filter(
            product =>
                !(
                    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()))
                )
        );

        const sortedFilteredProducts = filtered.sort((a, b) => calculateRelevance(b) - calculateRelevance(a));

        return [...sortedFilteredProducts, ...lessRelevantProducts];
    }, [shuffledProducts, searchQuery, filter]);

    const addToCart = (product, quantity) => {
        setCart(prevCart => {
            const existingProductIndex = prevCart.findIndex(item => item.id === product.id);
            if (existingProductIndex >= 0) {
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex].quantity += quantity;
                return updatedCart;
            } else {
                return [...prevCart, { ...product, quantity }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const emptyCart = () => {
        setCart([]);
    };

    const handleProductClick = product => {
        setSelectedProduct(product);
    };

    const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="App">
            <div className="top-bar-first-line">
                <div className="logo-line">
                    <img src={`${process.env.PUBLIC_URL}/whilfcart.png`} alt="Logo Whilf Rede" />
                </div>
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Rechercher un produit ...."
                    onChange={e => setSearchQuery(e.target.value)}
                    style={{
                        borderRadius: '8px',
                        border: '2px solid orange',
                        padding: '8px',
                        width: '200px',
                        textAlign: 'center'
                    }}
                />
                <Link to="/cart" className="cart-icon">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-count">{totalItemsInCart}</span>
                </Link>
            </div>

            <div className="separator"></div>

            <div className="top-bar-second-line">
                <div className="filter-container">
                    {['tous', 'habillement', 'cuisine', 'electronique', 'decoration', 'beauté'].map(category => (
                        <button
                            key={category}
                            className={`filter-button ${filter === category ? 'active' : ''}`}
                            onClick={() => setFilter(category)}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            <Routes>
                <Route path="/" element={<Navigate to="/menu" replace />} />
                <Route
                    path="/menu"
                    element={
                        <div className="content">
                            {filteredProducts.map(product => (
                                <Product key={product.id} product={product} onProductClick={handleProductClick} />
                            ))}
                        </div>
                    }
                />
                <Route path="/cart" element={<CartPage cart={cart} onRemoveFromCart={removeFromCart} />} />
                <Route path="/delivery" element={<DeliveryPage />} />
                <Route
                    path="/validate-order"
                    element={<ValidateOrder cartItems={cart} totalPrice={totalPrice} onEmptyCart={emptyCart} />}
                />
                <Route path="/confirmation" element={<ConfirmationPage />} />
                <Route path="/login" element={<AdminLoginPage />} />
                <Route path="/admin" element={
                    <ProtectedRoute>
                        <AdminPage />
                    </ProtectedRoute>
                } />
            </Routes>

            {selectedProduct && (
                <Modal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                    onAddToCart={addToCart}
                />
            )}
            {showScrollButton && (
                <button className="scroll-to-top" onClick={scrollToTop}>
                    ⬆
                </button>
            )}
        </div>
    );
}

export default App;
