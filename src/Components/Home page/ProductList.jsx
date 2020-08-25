import React from 'react';
import { Product } from './Product';


export function ProductList() {

    return (
        <section className='product-list'>
            <ul>
                <li><Product /></li>
            </ul>
        </section>
    )
}
