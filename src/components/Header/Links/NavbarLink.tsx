/* Import React */
import { useEffect } from "react";

/* React Router */
import { NavLink, useLocation } from 'react-router-dom';

/* Framer Motion */
import { motion } from 'framer-motion';

interface NavBarLinkProps {
    path: string,
    title: string,
}

export function NavbarLink({path, title}: NavBarLinkProps) {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === path) {
            window.scrollTo(0, 0);
        }
    }, [location, path]);

    return (
        <li>
            <NavLink to={path} className={({isActive}) => `${isActive && 'text-red-500'} text-lg capitalize relative hover:text-red-500 transition-all`}>
                {
                    ({isActive}) => (
                        <>
                            {title}

                            {isActive && (
                                <motion.span
                                    initial={{ y: '-100%' }}
                                    animate={{ y: 0 }}
                                    transition={{ type: 'tween' }}
                                    layoutId='underline'
                                    className='absolute left-0 top-full rounded-full h-[3px] bg-red-500 w-full'
                                />
                            )}
                        </>
                    )
                }
            </NavLink>
        </li>
    );
}