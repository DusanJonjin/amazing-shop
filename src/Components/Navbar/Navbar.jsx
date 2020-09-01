import React from 'react';
import './Navbar.css';
import { Link, useLocation} from 'react-router-dom';

export function Navbar() {

    const { pathname } = useLocation();

    const shoppingCartURL = '/shopping_cart';

    const isShoppingCartURL = pathname === shoppingCartURL;

    return (
        <nav>
            <div id='nav-icon'>
                Amazing&nbsp;
                <img src={require('./../../Images/shop.png')} alt='store-icon' />
                &nbsp;shop
            </div>
            <div className={`link-wrap ${isShoppingCartURL && 'disabled'}`}> 
                <Link to={shoppingCartURL} className='link'>      
                    <div id='cart-link'>
                        <div id='cart-quantity'>0</div>
                        <div id='cart-name'>Cart</div>
                    </div>
                </Link> 
            </div>
        </nav>
    );
}
