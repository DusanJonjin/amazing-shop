import React from 'react'

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
                <div>Purchase limit reached!</div>
                <p onClick={() => removeProductFromCart(product)}>
                    Remove from Cart
                </p>
            </div>
        </div>
    );
}
