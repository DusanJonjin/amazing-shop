import React from 'react';

export function Navbar() {
    return (
        <nav>
            <div id='icon'>
                Amazing&nbsp;
                <img src={require('./../../Images/shop.png')} alt='store-icon' />
                &nbsp;store
            </div>        
            <div id='cart-link'>
                <div id='cart-quantity'>0</div>
                <div id='cart-name'>Cart</div>
            </div>
        </nav>
    );
}
