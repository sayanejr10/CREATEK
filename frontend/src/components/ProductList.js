import React from 'react';

function Product({ product, onProductClick }) {
    return (
        <div className="product" onClick={() => onProductClick(product)}>
            <img src={product.imgSrc} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price} FCFA</p>
        </div>
    );
}

export default Product;
