import React from 'react'

export function StockedOrNot({ productStock }) {
    
    const inStock = productStock > 0;

    if (inStock) {
        return (
            <div className='stocked'>
                <p>In stock</p>
                <p>Add to cart(In Cart)</p>
            </div>
        );
    }

    else return <p className='no-stock'>Out of stock</p>
}
