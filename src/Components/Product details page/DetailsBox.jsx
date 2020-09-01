import React from 'react';
import { ProductImg, ProductName, ProductPrice, StockedOrNot } from '../- Joint components -/AllJointComponents';
import { DetailsTable } from './DetailsTable';
import './Style/DetailsBox.css'
import { useState } from 'react';


export function DetailsBox({ product, addProductInCart, isInCart }) {

    const { 
        name,
        image,
        price,
        details,
        stock
    } = product;

    const cartStyle = 'added-from-details';

    return (
        <section className='details-box'>
            <ProductImg productImage={image}
                        productName={name}
            />
            <div id='details-text-box'>
                <ProductName productName={name} />
                <ProductPrice productPrice={price} />
                <DetailsTable details={details} />
                <StockedOrNot productStock={stock}
                              addProductInCart={() => addProductInCart(product)}
                              isInCart={isInCart}
                              cartStyle={cartStyle}
                />
            </div>
        </section>
    );
}
