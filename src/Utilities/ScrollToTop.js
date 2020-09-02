import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {

    const { pathname } = useLocation();

    const homeURL = '/';

    useEffect(()=> {
        if (pathname === homeURL) return;
        else window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTop;