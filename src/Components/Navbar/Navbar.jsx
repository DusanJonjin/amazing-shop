import React from 'react';
import './Navbar.css'

export function Navbar() {
    return (
        <nav>
            <div id='nav-icon'>
                Amazing&nbsp;
                <img src={require('./../../Images/shop.png')} alt='store-icon' />
                &nbsp;shop
            </div>        
            <div id='cart-link'>
                <div id='cart-quantity'>0</div>
                <div id='cart-name'>Cart</div>
            </div>
        </nav>
    );
}
