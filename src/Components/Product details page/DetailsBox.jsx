import React from 'react';
import { ProductImg, ProductName, ProductPrice, StockedOrNot } from '../- Joint components -/AllJointComponents';
import { DetailsTable } from './DetailsTable';
import './Style/DetailsBox.css'


export function DetailsBox({ product }) {

    const { 
        name,
        image,
        price,
        details,
        stock
    } = product;

    return (
        <section className='details-box'>
            <ProductImg productImage={image}
                        productName={name}
            />
            <div id='details-text-box'>
                <ProductName productName={name} />
                <ProductPrice productPrice={price} />
                <DetailsTable details={details} />
                <StockedOrNot productStock={stock} />
            </div>
        </section>
    );
}
