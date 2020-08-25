import React from 'react';
import { ProductInCart } from './ProductInCart';

export function ProductsInCartList({ products }) {

    const allProducts = products.map(product =>
        <li key={product.id}>
            <ProductInCart product={product} />
        </li>);

    return (
        <ul id='cart-product-ul' >
            {allProducts}
        </ul>
    );
}