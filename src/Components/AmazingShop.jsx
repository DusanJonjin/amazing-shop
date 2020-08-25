import React from 'react';
import { Navbar } from './Navbar/Navbar';
import { HomePage } from './Home page/HomePage';
import { ProductDetailsPage } from './Product details page/ProductDetailsPage';
import { ShoppingCartPage } from './Shopping cart page/ShoppingCartPage';

export function AmazingShop() {
    return (
        <React.Fragment>
            <Navbar />
            <HomePage />
            <ProductDetailsPage />
            <ShoppingCartPage />
        </React.Fragment>
    )
}
