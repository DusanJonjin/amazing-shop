import React from 'react';
import { ProductImg, ProductName, ProductPrice, StockedOrNot } from '../- Joint components -/AllJointComponents';
import { DetailsTable } from './DetailsTable';

export function ProductDetailsBox() {

    return (
        <section className='product-detail-box'>
            <ProductImg />
            <div id='detail-text-box'>
                <ProductName />
                <ProductPrice />
                <DetailsTable />
                <StockedOrNot />
            </div>
        </section>
    );
}
