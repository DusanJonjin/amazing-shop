import React from 'react';
import { Product } from './Product';
import './Styles/ProductsList.css'


export function ProductsList({ products, addProductInCart, productsInCart }) {

    //We map products array to get the array of all category names:
    const categoriesAllArr = products.map(product => product.category);

    /*Because categoriesAllArr contains multiple duplicated values, 
    we will have to remove duplicate names of categories by using Set: */
    const categoriesSet = new Set(categoriesAllArr);

    //Now we have the array of unique category names:
    const categoriesCleanArr = [...categoriesSet];

    const productsList = categoriesCleanArr.map((category, i) => 
        <li key={i} className='category-name-li'>
            {category}
            <ul className='category-products-ul'>
                {products.reduce((acc, product) => 
                    product.category === category ?
                        [
                            ...acc, 
                            <li key={product.id}>
                                <Product product={product}
                                         addProductInCart={() => addProductInCart(product)}
                                         productsInCart={productsInCart} 
                                />
                            </li>
                        ]
                    :   acc, [])
                }
            </ul>
        </li>
    );

    return (
        <section className='products-list'>
            <ul>
                {productsList}
            </ul>
        </section>
    )
}
