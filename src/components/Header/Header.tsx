/* Import React */
import { useEffect, useState } from "react";

/* React Router */
import { Link } from "react-router-dom";

/* Imports - Components */
import { Logo } from "./Logo/Logo.tsx";
import { Navbar } from "./Navbar/Navbar.tsx";
import { MobileNavbar } from "./Navbar/MobileNavbar.tsx";

/* Icons (Lucide React) */
import { Menu } from 'lucide-react';

export function Header() {
    const[header, setHeader] = useState(false);
    const[toggle, setShowMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 0 ? setHeader(true) : setHeader(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    });

    function handleClick() {
        setShowMenu((prevToggle) => !prevToggle);
    }

    return (
        <header className={`${header ? 'bg-white xl:bg-[rgba(255,255,255,0.25)] xl:py-4 xl:backdrop-blur-[8px]' : 'bg-white xl:py-4 xl:backdrop-blur-none'} w-full fixed bottom-0 shadow-[0_-1px_25px_rgba(0,0,0,0.15)] xl:shadow-none xl:sticky xl:top-0 z-30 transition-all`}>
            <div className="container mx-auto hidden xl:block">
                <div className="flex justify-between items-center p-5 xl:p-0">
                    <Logo />

                    <Navbar />
                </div>
            </div>

            <div className="block xl:hidden">
                <div className="flex justify-between items-center p-5 xl:p-0">
                    <Link to={'/'}>
                        <span className="font-medium text-xl">Aleksander Balduino</span>
                    </Link>

                    <Menu size={32} className='cursor-pointer hover:text-red-500 transition-all' onClick={handleClick} />
                </div>

                <MobileNavbar toggle={toggle} showMenubar={handleClick} />
            </div>
        </header>
    );
}