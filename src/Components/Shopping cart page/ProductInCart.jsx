import React from 'react';
import './Styles/ProductInCart.css';
import { ProductName, ProductImg, ProductPrice } from '../- Joint components -/AllJointComponents';

export function ProductInCart(props) {

    const {
        product,
        removeProductFromCart,
        increaseCartQuantity,
        decreaseCartQuantity
    } = props;

    const {
        name,
        image,
        price,
        cartQuantity,
        stock
    } = product;

    return (
        <div className='cart-product'>           
            <ProductImg productImage={image}
                        productName={name}
            />
            <ProductName productName={name} />
            <ProductPrice productPrice={price} />
            <div id='quantity-inc-dec'>
                <p>{cartQuantity}</p>
                <div id='plus-minus'>
                    <p onClick={() => decreaseCartQuantity(product)}>
                        -
                    </p>
                    <p onClick={() => increaseCartQuantity(product)}>
                        +
                    </p>
                </div>
            </div>
            <p id='sub-total'>€Subtotal</p>
            <div id='cart-remove-wrap'>
                <div className='max'>Purchase limit reached!</div>
                <p onClick={() => removeProductFromCart(product)}>
                    Remove from cart
                </p>
            </div>
        </div>
    );
}
