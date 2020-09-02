import React from 'react';
import { ProductInCart } from './ProductInCart';
import './Styles/ProductsInCartList.css';

export function ProductsInCartList(props) {

    const { 
        products, 
        removeProductFromCart, 
        increaseCartQuantity,
        decreaseCartQuantity
    } = props;

    const allProducts = products.map(product =>
        <li key={product.id}>
            <ProductInCart product={product}
                           removeProductFromCart={removeProductFromCart}
                           increaseCartQuantity={increaseCartQuantity}
                           decreaseCartQuantity={decreaseCartQuantity}
            />
        </li>
    );

    return (
        <ul id='cart-product-ul' >
            {allProducts}
        </ul>
    );
}