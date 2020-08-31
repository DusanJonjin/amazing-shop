import React, { useState } from 'react';
import { Navbar } from './Navbar/Navbar';
import { HomePage } from './Home page/HomePage';
import { ProductDetailsPage } from './Product details page/ProductDetailsPage';
import { ShoppingCartPage } from './Shopping cart page/ShoppingCartPage';
import { products } from '../Fixtures/Data';
import { Route, Switch } from 'react-router-dom';
import './AmazingShop.css';

export function AmazingShop() {

    // eslint-disable-next-line no-unused-vars
    const [allProducts, setAllProducts] = useState(products);


    return (
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <HomePage allProducts={allProducts} />
                </Route>
                <Route path='/:productDetails'>
                    <ProductDetailsPage allProducts={allProducts} />
                </Route>
            </Switch>         
        </React.Fragment>
    )
}
