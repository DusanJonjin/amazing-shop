import React from 'react';
import { ProductDetailsBox } from './ProductDetailsBox';

export function ProductDetailsPage({ allProducts }) {
    
    return (
        <main id='product-details'>
            <p className='back'>&lsaquo;&nbsp;Back to store</p>
            <h3 id='product-details-h3'>Product details</h3>
            <h4>Category: products.category</h4>
            <ProductDetailsBox />
        </main>
    );
}
