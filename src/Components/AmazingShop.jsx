import React, { useState } from 'react';
import { Navbar } from './Navbar/Navbar';
import { HomePage } from './Home page/HomePage';
import { ProductDetailsPage } from './Product details page/ProductDetailsPage';
import { ShoppingCartPage } from './Shopping cart page/ShoppingCartPage';
import { products } from '../Fixtures/Data';

export function AmazingShop() {

    const [allProducts, setAllProducts] = useState(products);


    return (
        <React.Fragment>
            <Navbar />
            <HomePage allProducts={allProducts} />
            <ProductDetailsPage allProducts={allProducts} />
            
        </React.Fragment>
    )
}
