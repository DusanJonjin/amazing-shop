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

    const [productsInCart, setProductsInCart] = useState([]);

    const addProductInCart = product => {
        if (productsInCart.some(prdct => prdct.id === product.id)) return;
        const productInCart = {...product, cartQuantity: 1}
        setProductsInCart(prevProductsInCart => 
            [...prevProductsInCart, productInCart]
        )
    };

    const removeProductFromCart = product => {
        const removeProduct = productsInCart.filter(prdct => 
            prdct !== product);
        setProductsInCart(removeProduct);
    };

    return (
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <HomePage allProducts={allProducts}
                              addProductInCart={addProductInCart}
                              productsInCart={productsInCart}
                    />
                </Route>
                <Route path='/shopping_cart'>
                    <ShoppingCartPage productsInCart={productsInCart}
                                      removeProductFromCart={removeProductFromCart} />
                </Route>
                <Route path='/:productDetails'>
                    <ProductDetailsPage allProducts={allProducts}
                                        addProductInCart={addProductInCart}
                                        productsInCart={productsInCart}
                    />
                </Route>
            </Switch>         
        </React.Fragment>
    )
}
