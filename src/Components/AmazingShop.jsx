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

    const increaseCartQuantity = product => {
        setProductsInCart(prevPrdctsInCart => {
            const increasePrdctCartQuant = prevPrdctsInCart.map(prevPrdct => {
                if (prevPrdct.id === product.id) {
                    if (prevPrdct.stock === product.cartQuantity) return prevPrdct;
                    else return {...prevPrdct, cartQuantity: prevPrdct.cartQuantity + 1};
                }
                else return prevPrdct;
            })
            return increasePrdctCartQuant;
        });  
    };

    const decreaseCartQuantity = product => {
        setProductsInCart(prevPrdctsInCart => {
            const decreasePrdctCartQuant = prevPrdctsInCart.map(prevPrdct => {
                if (prevPrdct.id === product.id) {
                    if (product.cartQuantity <= 1) return prevPrdct;
                    else return {...prevPrdct, cartQuantity: prevPrdct.cartQuantity - 1};
                }
                else return prevPrdct;
            })
            return decreasePrdctCartQuant;
        });
    };

    const handleModalClose = setModalOpen => {
        setModalOpen(false);
        setProductsInCart([]);
    };

    return (
        <React.Fragment>
            <Navbar productsInCart={productsInCart} />
            <Switch>
                <Route exact path='/'>
                    <HomePage allProducts={allProducts}
                              addProductInCart={addProductInCart}
                              productsInCart={productsInCart}
                    />
                </Route>
                <Route path='/shopping_cart'>
                    <ShoppingCartPage productsInCart={productsInCart}
                                      removeProductFromCart={removeProductFromCart}
                                      handleModalClose={handleModalClose}
                                      increaseCartQuantity={increaseCartQuantity}
                                      decreaseCartQuantity={decreaseCartQuantity}
                    />
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
