import React from 'react';
import './Styles/Modal.css';

export function Modal({ modalOpen, handleModalClose }) {

    return (
        <section className={`modal ${modalOpen && 'm-opened'}`}>
            <div id='modal-content'>
                <div id='modal-head'>
                    <div id='modal-icon'>
                        Amazing&nbsp;
                        <img src={require('./../../Images/shop.png')} alt='store-icon' />
                        &nbsp;shop
                    </div>
                    <span onClick={handleModalClose}>&times;</span>
                </div>
                <div id='modal-body'>
                    <p>Thank you for purchasing from our shop!<br />
                    Ordered items will be delivered to your address, within next three days.</p>
                </div>
                <div id='modal-foot'>
                    <p>© 2020. AmazingShop.com</p>
                </div>
            </div>
        </section>
    );
}
