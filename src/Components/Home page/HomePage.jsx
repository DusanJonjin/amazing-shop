import React from 'react';
import { ProductList } from './ProductList';

export function HomePage() {

    return (
        <main className='home-page'>
            <fieldset>
                <div className='fieldset-wrapper'>
                    <input type='search' placeholder='Search for products...'
                           onChange={e => (e)}
                           value='filterText' 
                    />                   
                    <input type='checkbox' name='checkbox'
                           onChange={e => (e)}
                            //checked={inStockOnly}
                           style={{margin: '10px 3px 0 2px'}}
                    />                   
                    <label>Only show products in stock</label>
                </div>
            </fieldset>
            <ProductList />
        </main>
    );
}
