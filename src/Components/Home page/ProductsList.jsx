import React from 'react';
import { Product } from './Product';


export function ProductsList({ products }) {

    //We map products array to get the array of all category names:
    const categoriesAllArr = products.map(product => product.category);

    /*Because categoriesAllArr contains multiple duplicated values, 
    we will have to remove duplicate names of categories by using Set: */
    const categoriesSet = new Set(categoriesAllArr);

    //Now we have the array of unique category names:
    const categoriesCleanArr = [...categoriesSet];

    const productsList = categoriesCleanArr.map((category, i) => 
        <li key={i}>
            {category}
            <ul>
                {products.reduce((acc, product) => 
                    product.category === category ?
                        [...acc, <li key={product.id}><Product product={product} /></li>]
                    : acc, [])
                }
            </ul>
        </li>
    );

    return (
        <section className='product-list'>
            <ul>
                {productsList}
            </ul>
        </section>
    )
}
