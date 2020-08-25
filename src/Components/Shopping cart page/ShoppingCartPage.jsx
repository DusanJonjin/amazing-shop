import React from 'react';
import { ProductsInCartList } from './ProductsInCartList';
import { Modal } from './Modal';
import { CartTotalSum } from './CartTotalSum';

export function ShoppingCartPage({ productsInCart }) {

    const isNotEmpty = productsInCart.length > 0;

    return (
        <main>
            <p className='back'>&lsaquo;&nbsp;Back to store</p>
            <h2>Shopping Cart</h2>
            { isNotEmpty ?
                <React.Fragment>
                    <div id='header'>
                        <p id='head-name'>Name</p>
                        <p id='head-price'>Price</p>
                        <p id='head-quant'>Quantity</p>
                        <p id='head-sub'>Subtotal</p>
                        <p id='plcholder'></p>
                    </div>
                    <ProductsInCartList products={productsInCart} />
                    <CartTotalSum products={productsInCart} />
                    <div id='submit-btn-wrap'>
                        <button id='submit-btn' >
                            Submit your order
                        </button>
                    </div>
                    <Modal />
                </React.Fragment>
            : <div id='empty-cart-div'>
                <img src={require('./../../Images/emptyCart.png')} alt='empty-cart'
                    id='empty-cart-img' />
                <p id='empty-cart-p'>Your shopping Cart is empty!</p>
            </div> }
        </main>
    )
}
