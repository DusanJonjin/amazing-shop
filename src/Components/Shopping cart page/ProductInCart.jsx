import React from 'react';
import './Styles/ProductInCart.css'

export function ProductInCart({ product, removeProductFromCart }) {

    return (
        <div id='cart-product'>           
            <img src={product.image} alt={product.name + 'image'} />
            <h4>{product.name}</h4>
            <p id='cart-price'>{product.price}</p>
            <div id='quantity-inc-dec'>
                <p>{product.cartQuantity}</p>
                <div id='plus-minus'>
                    <p>-</p>
                    <p>+</p>
                </div>
            </div>
            <p id='sub-total'>€Subtotal</p>
            <div id='cart-remove-wrap'>
                <div className='max'>Purchase limit reached!</div>
                <p onClick={() => removeProductFromCart(product)}>
                    Remove
                </p>
            </div>
        </div>
    );
}
