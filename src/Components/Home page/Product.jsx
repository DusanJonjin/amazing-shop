import React from 'react';
import { ProductImg, ProductName, ProductPrice, StockedOrNot } from '../- Joint components -/AllJointComponents';

export function Product({ product }) {

    return (
         <div className='product'>
            <ProductImg />
            <div id='product-text-box'>
                <ProductName />
                <ProductPrice />
                <StockedOrNot />
            </div>
        </div>
    )
}
