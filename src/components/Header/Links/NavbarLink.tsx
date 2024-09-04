/* React Router */
import { NavLink } from 'react-router-dom';

/* Framer Motion */
import { motion } from 'framer-motion';

interface NavBarLinkProps {
    path: string,
    title: string,
}

export function NavbarLink({path, title}: NavBarLinkProps) {
    return (
        <li>
            <NavLink to={path} className={({isActive}) => `${isActive && 'text-red-500'} capitalize relative hover:text-red-500 transition-all`}>
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
                                    className='absolute left-0 top-full h-[2px] bg-red-500 w-full'
                                />
                            )}
                        </>
                    )
                }
            </NavLink>
        </li>
    );
}