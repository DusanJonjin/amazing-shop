import React from 'react';
import './Styles/ProductInCart.css';
import { ProductName, ProductImg, ProductPrice } from '../- Joint components -/AllJointComponents';
import { calcSubTotal } from '../../Utilities/HelperFunctions';

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

    const purchaseLimit = cartQuantity >= stock;

    const subTotal = calcSubTotal(product).toFixed(2);

    return (
        <div className='cart-product'>           
            <ProductImg productImage={image}
                        productName={name}
            />
            <ProductName productName={name} />
            <ProductPrice productPrice={price} />
            <div id='quantity-inc-dec'>
                <p>{cartQuantity}</p>
                <div className='plus-minus'>
                    <p onClick={() => decreaseCartQuantity(product)}
                       className={cartQuantity <= 1 ? 'num-reached' : ''}
                    >
                        -
                    </p>
                    <p onClick={() => increaseCartQuantity(product)}
                       className={purchaseLimit ? 'num-reached' : ''}
                    >
                        +
                    </p>
                </div>
            </div>
            <p id='sub-total'>€{subTotal}</p>
            <div id='cart-remove-wrap'>
                <div className={`max ${purchaseLimit && 'reached'}`}>Purchase limit reached!</div>
                <p onClick={() => removeProductFromCart(product)}>
                    Remove from cart
                </p>
            </div>
        </div>
    );
}
