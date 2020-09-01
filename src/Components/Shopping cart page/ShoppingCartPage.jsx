import React, { useState } from 'react';
import { ProductsInCartList } from './ProductsInCartList';
import { Modal } from './Modal';
import { CartTotalSum } from './CartTotalSum';
import { Link } from 'react-router-dom';
import './Styles/ShoppingCartPage.css'

export function ShoppingCartPage({ productsInCart, removeProductFromCart, handleModalClose}) {

    const [modalOpen, setModalOpen] = useState(false);

    const isNotEmpty = productsInCart.length > 0;

    const handleModalOpen = () => {
        setModalOpen(true);
    }

    return (
        <main id='shopping-cart'>
            <Link to='/' className='link'>
                <p className='back'>&lsaquo;&nbsp;Back to store</p>
            </Link>
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
                    <ProductsInCartList products={productsInCart}
                                        removeProductFromCart={removeProductFromCart}
                    />
                    <CartTotalSum products={productsInCart} />
                    <div id='submit-btn-wrap'>
                        <button id='submit-btn'
                                onClick={handleModalOpen}
                        >
                            Submit your order
                        </button>
                    </div>
                    <Modal modalOpen={modalOpen}
                           handleModalClose={() => handleModalClose(setModalOpen)}
                    />
                </React.Fragment>
              : <div id='empty-cart-div'>
                    <img src={require('./../../Images/emptyCart.png')} alt='empty-cart'
                         id='empty-cart-img' />
                    <p id='empty-cart-p'>Your shopping Cart is empty!</p>
                </div>
            }
        </main>
    )
}
