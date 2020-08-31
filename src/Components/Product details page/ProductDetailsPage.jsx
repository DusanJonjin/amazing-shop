import React from 'react';
import { DetailsBox } from './DetailsBox';
import { Link, useLocation } from 'react-router-dom';
import './Style/ProductDetailsPage.css'

export function ProductDetailsPage({ allProducts }) {

    const { state } = useLocation();

    const productsExist = allProducts.length > 0

    const selectedProduct = productsExist && allProducts.filter(product => 
        product.id === state.productId)[0]
    ;


    return (
        <main className='product-details'>
            <Link to='/' className='link'>
                <p className='back'>&lsaquo;&nbsp;Back to store</p>
            </Link>
            <h3>Product details</h3>
            <h4><span>Category:</span> {selectedProduct.category}</h4>
            <DetailsBox product={selectedProduct} />
        </main>
    );
}
