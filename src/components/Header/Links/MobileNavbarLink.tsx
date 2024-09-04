/* React Router */
import { NavLink } from 'react-router-dom';

interface NavBarLinkProps {
    path: string,
    title: string,
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export function MobileNavbarLink({path, title, icon: IconComponent}: NavBarLinkProps) {
    return (
        <li>
            <NavLink to={path} className={({isActive}) => `${isActive && 'text-red-500'} capitalize inline-block hover:text-red-500 transition-all`}>
                {IconComponent && <IconComponent className='size-5 mx-auto' />}
                {title}
            </NavLink>
        </li>
    );
}