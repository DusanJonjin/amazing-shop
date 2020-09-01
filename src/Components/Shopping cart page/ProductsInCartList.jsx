import React from 'react';
import { ProductInCart } from './ProductInCart';

export function ProductsInCartList({ products, removeProductFromCart}) {

    const allProducts = products.map(product =>
        <li key={product.id}>
            <ProductInCart product={product}
                           removeProductFromCart={removeProductFromCart} />
        </li>);

    return (
        <ul id='cart-product-ul' >
            {allProducts}
        </ul>
    );
}