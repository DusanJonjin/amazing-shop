import React from 'react';
import './Navbar.css';
import { Link, useLocation} from 'react-router-dom';

export function Navbar({ productsInCart }) {

    const { pathname } = useLocation();

    const shoppingCartURL = '/shopping_cart';

    const isShoppingCartURL = pathname === shoppingCartURL;

    const isHomeURL = pathname === '/';

    //Total sum of all products that are in cart:
    const allProductsInCartSum = productsInCart.reduce((acc, product) => {
        const { cartQuantity } = product;
        const sum = acc + cartQuantity;
        return sum;
    } ,0);

    return (
        <nav>
            <div className={`link-wrap ${isHomeURL && 'disabled'}`}> 
                <Link to='/' className='link'>
                    <div id='nav-icon'>
                        Amazing&nbsp;
                        <img src={require('./../../Images/shop.png')} alt='store-icon' />
                        &nbsp;shop
                    </div>
                </Link>
            </div>
            <div className={`link-wrap ${isShoppingCartURL && 'disabled'}`}> 
                <Link to={shoppingCartURL} className='link'>      
                    <div id='cart-link'>
                        <div id='cart-quantity'>{allProductsInCartSum}</div>
                        <div id='cart-name'>Cart</div>
                    </div>
                </Link> 
            </div>
        </nav>
    );
}
