// components/ProductDetailPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../productsData'; // Assurez-vous que ce chemin est correct
import './ProductDetailPage.css'; // Importez le fichier CSS pour les styles

function ProductDetailPage() {
    const { productId } = useParams();
    const product = productsData.find(p => p.id === parseInt(productId)); // Assurez-vous que l'ID est un nombre
    const [mainImage, setMainImage] = useState(product.imgSrcs[0]); // État pour l'image principale
    const [isVideoVisible, setIsVideoVisible] = useState(false); // État pour gérer l'affichage de la vidéo
    const [quantity, setQuantity] = useState(1); // État pour la quantité

    return (
        <div className="product-detail-container">
            <div className="product-detail-content">
                <div className="media-container">
                    <div className="image-gallery">
                        {isVideoVisible ? (
                            <video controls className="main-video" onClick={handleVideoClick}>
                                <source src={videoPath} type="video/mp4" />
                                Votre navigateur ne supporte pas la vidéo.
                            </video>
                        ) : (
                            <img
                                src={imagePath}
                                alt={product.name}
                                className="main-image"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = '';
                                }}
                            />
                        )}
                    </div>
                    <div className="thumbnail-container">
                        {product.imgSrcs.map((imgSrc, index) => (
                            <img
                                key={index}
                                src={process.env.PUBLIC_URL + imgSrc}
                                alt={`Thumbnail ${index + 1}`}
                                className="thumbnail"
                                onMouseEnter={() => {
                                    setMainImage(imgSrc); // Change l'image principale au survol
                                }}
                                onClick={() => handleThumbnailClick(imgSrc)} // Change l'image principale au clic
                            />
                        ))}
                        {product.videoSrc && (
                            <img
                                src={process.env.PUBLIC_URL + product.videoThumbnail} // Assurez-vous d'avoir une vignette pour la vidéo
                                alt="Thumbnail vidéo"
                                className="thumbnail"
                                onClick={handleVideoClick} // Affiche la vidéo au clic
                            />
                        )}
                    </div>
                </div>
                <div className="product-info">
                    <h2 className="product-title">{product.name}</h2>
                    <p className="product-price">
                        Prix: {product.price.toLocaleString()} FCFA
                        <span style={{ textDecoration: 'line-through', marginLeft: '10px', color: 'red' }}>
                            {product.originalPrice.toLocaleString()} FCFA
                        </span>
                    </p>
                    <p className="product-stock">Stock: <span style={{ color: 'green' }}>{product.stock}</span></p>
                    <p className="product-description">{product.description}</p>
                    <p className="modal-description">{product.modalDescription}</p>

                    {/* Conteneur pour la quantité */}
                    <div className="quantity-container">
                        <label htmlFor="quantity" className="quantity-label">Quantité:</label>
                        <input
                            type="number"
                            value={quantity}
                            min="1"
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                        />
                    </div>
                    {/* Conteneur pour le bouton "Ajouter au panier" */}
                    <div className="add-to-cart-container">
                        <button className="add-to-cart-button" onClick={handleAddToCart}>
                            Ajouter au panier
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailPage;
