/* Import React */
import { useEffect, useState } from "react";

/* React Router */
import { Link, useLocation } from "react-router-dom";

/* Imports - Components */
// import { Logo } from "./Logo/Logo.tsx";
import { Navbar } from "./Navbar/Navbar.tsx";
import { MobileNavbar } from "./Navbar/MobileNavbar.tsx";

/* Icons (Lucide React) */
import { Menu } from 'lucide-react';

export function Header() {
    const[header, setHeader] = useState(false);
    const[toggle, setShowMenu] = useState(false);

    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 0 ? setHeader(true) : setHeader(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (location.pathname === '/') {
            window.scrollTo(0, 0);
        }

        setShowMenu(false);
    }, [location]);

    function handleClick() {
        setShowMenu((prevToggle) => !prevToggle);
    }

    return (
        <header className={`${header ? 'bg-white xl:bg-[rgba(255,255,255,0.25)] xl:py-4 xl:px-16 xl:backdrop-blur-[8px]' : 'bg-white xl:py-4 xl:px-16 xl:backdrop-blur-none'} w-full fixed bottom-0 shadow-[0_-1px_25px_rgba(0,0,0,0.15)] xl:shadow-none xl:sticky xl:top-0 z-30 transition-all`}>
            <div className="container mx-auto hidden xl:block">
                <div className="flex justify-between items-center p-5 xl:p-0">
                    {/* <Logo /> */}

                    <Link to={'/portfolio-website/'}>
                        <span className="font-medium text-xl">Aleksander Balduino</span>
                    </Link>

                    <Navbar />
                </div>
            </div>

            <div className="block xl:hidden">
                <div className="flex justify-between items-center p-6 xl:p-0">
                    <Link to={'/portfolio-website/'}>
                        <span className="font-medium text-lg md:text-xl">Aleksander Balduino</span>
                    </Link>

                    <Menu className='size-6 md:size-8 cursor-pointer hover:text-red-500 transition-all' onClick={handleClick} />
                </div>

                <MobileNavbar toggle={toggle} showMenubar={handleClick} />
            </div>
        </header>
    );
}