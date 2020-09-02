import React from 'react';
import { DetailsBox } from './DetailsBox';
import { Link, useLocation } from 'react-router-dom';
import './Style/ProductDetailsPage.css'

export function ProductDetailsPage({ allProducts, addProductInCart, productsInCart}) {

    const { state } = useLocation();

    const productsExist = allProducts.length > 0

    const selectedProduct = productsExist && allProducts.filter(product => 
        product.id === state.productId)[0]
    ;

    const isInCart = productsInCart.some(product =>
        product.id === selectedProduct.id);

    return (
        <main className='product-details'>
            <Link to='/' className='link'>
                <p className='back'>&lsaquo;&nbsp;Back to shop</p>
            </Link>
            <h3>Product details</h3>
            <h4><span>Category:</span> {selectedProduct.category}</h4>
            <DetailsBox product={selectedProduct}
                        addProductInCart={addProductInCart}
                        isInCart={isInCart}
            />
        </main>
    );
}
