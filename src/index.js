import React from 'react';
import ReactDOM from 'react-dom';
import { AmazingShop } from './Components/AmazingShop';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './Utilities/ScrollToTop';
import './index.css';


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ScrollToTop />
            <AmazingShop />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
