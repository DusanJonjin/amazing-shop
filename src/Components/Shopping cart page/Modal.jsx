import React from 'react';

export function Modal() {

    return (
        <div>
        <div id='modal-content'>
            <div id='modal-head'>
                <div id='modal-icon'>
                    Amazing&nbsp;
                    <img src={require('./../../Images/shop.png')} alt='store-icon' />
                    &nbsp;store
                </div>
                <span>&times;</span>
            </div>
            <div id='modal-body'>
                <p>Thank you for purchasing from our store!<br />
                Ordered items will be delivered to your address, within next three days.</p>
            </div>
            <div id='modal-foot'>
                <p>© 2020. AmazingStore.com</p>
            </div>
        </div>
    </div>
    );
}
