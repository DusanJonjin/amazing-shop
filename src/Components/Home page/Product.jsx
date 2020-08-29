import React from 'react';
import { ProductImg, ProductName, ProductPrice, StockedOrNot } from '../- Joint components -/AllJointComponents';

export function Product({ product }) {

    const { 
        name,
        image,
        price,
        stock
    } = product;

    return (
         <div className='product'>
            <ProductImg productName={name}
                        productImage={image} 
            />
            <div id='product-text-box'>
                <ProductName productName={name} />
                <ProductPrice productPrice={price} />
                <StockedOrNot productStock={stock} />
            </div>
        </div>
    )
}
