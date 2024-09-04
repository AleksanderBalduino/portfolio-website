/* React */
import { useEffect } from 'react';

/* React Router */
import { useLocation } from 'react-router-dom';

interface ScrollToTopProps {
    behavior?: 'auto' | 'smooth' | 'instant';
}

export function ScrollToTop({ behavior = 'auto' }: ScrollToTopProps) {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({top:0, behavior});
    }, [pathname, behavior]);

    return null;
}