import React, { useState } from 'react';
import { ProductsList } from './ProductsList';
import './Styles/HomePage.css'

export function HomePage({ allProducts }) {

    const [inStockOnly, setInStockOnly] = useState(false);

    const [searchText, setSearchText] = useState('');


    const handleSearchText = e => {
        setSearchText(e.currentTarget.value);
    };

    const handleInStockOnly = e => {
        setInStockOnly(e.currentTarget.checked);
    };

    const productsFiltered = inStockOnly ? 
        allProducts.filter(product => 
            product.stock > 0 && product.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
      : allProducts.filter(product => 
            product.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
    ;


    return (
        <main className='home-page'>
            <fieldset>
                <div className='fieldset-wrapper'>
                    <input type='search' placeholder='Search for products...'
                           onChange={handleSearchText}
                           value={searchText} 
                    />
                    <label>                  
                        <input type='checkbox' name='checkbox'
                            onChange={handleInStockOnly}
                            checked={inStockOnly}
                            style={{margin: '10px 3px 0 2px'}}
                        />                   
                        Only show products in stock
                    </label>
                </div>
            </fieldset>
            <ProductsList products={productsFiltered} />
        </main>
    );
}
