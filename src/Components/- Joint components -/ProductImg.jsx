import React from 'react';

export function ProductImg({ productImage, productName }) {

    return (
        <div className='img-wrap'>
            <img src={productImage} 
                 alt={productName}
            />
        </div>
    );
}
