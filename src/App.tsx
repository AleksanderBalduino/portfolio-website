/* React Router */
import { Outlet } from 'react-router-dom';

/* Imports - Components */
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export function App() {
    return (
        <div>
            <ScrollToTop behavior='instant' />
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}