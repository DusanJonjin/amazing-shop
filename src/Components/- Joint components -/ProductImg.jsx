import React from 'react';

export function ProductImg({ productImage, productName }) {
    
    return (
        <img src={productImage} alt={productName} />
    );
}
