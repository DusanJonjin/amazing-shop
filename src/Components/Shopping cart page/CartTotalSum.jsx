import React from 'react';
import './Styles/CartTotalSum.css';
import { calcSubTotal } from '../../Utilities/HelperFunctions';

export function CartTotalSum({ productsInCart }) {
    
    //Returns an array off all subtotal values in cart:
    const allProductsSubTotal = productsInCart.map(product => 
        calcSubTotal(product)
    );
    //Sum of all values from array above:
    const totalSum = allProductsSubTotal.reduce((acc, value) => 
        acc + value).toFixed(2);

    return (
        <div id='total-sum'>
            Total: €{totalSum}
        </div>
    );
} 