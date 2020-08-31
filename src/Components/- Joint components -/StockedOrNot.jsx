import React from 'react'

export function StockedOrNot({ productStock }) {
    
    const inStock = productStock > 0;

    if (inStock) {
        return (
            <div className='stocked'>
                <p className='stock'>In stock</p>
                <p className='cart'>Add to cart</p>
            </div>
        );
    }

    else return <p className='no-stock'>Out of stock</p>
}
