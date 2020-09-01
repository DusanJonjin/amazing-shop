import React from 'react';
import { ProductImg, ProductName, ProductPrice, StockedOrNot } from '../- Joint components -/AllJointComponents';
import { Link } from 'react-router-dom';
import './Styles/Product.css'

export function Product({ product, addProductInCart, productsInCart }) {

    const { 
        id,
        name,
        image,
        price,
        stock
    } = product;

    const productDetailsLink = {
        pathname: `/${name}_details`,
        state: {
            productId: id
        }
    };

    const isInCart = productsInCart.some(prdct =>
        prdct.id === id
    );

    const cartStyle = 'added-from-home'; 

    return (
         <div className='product'>
            <Link to={productDetailsLink}
                  className='link'
            >
                <ProductImg productName={name}
                            productImage={image} 
                />
            </Link>
            <div id='product-text-box'>
                <div style={{height: '45px'}}> 
                    <Link to={productDetailsLink}
                          className='link'
                    >
                        <ProductName productName={name} />
                    </Link>
                 </div>
                <ProductPrice productPrice={price} />
                <StockedOrNot productStock={stock}
                              addProductInCart={addProductInCart}
                              isInCart={isInCart}
                              cartStyle={cartStyle}
                />
            </div>
        </div>
    )
}
