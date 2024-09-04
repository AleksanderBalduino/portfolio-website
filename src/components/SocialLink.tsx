/* React Router */
import { Link } from 'react-router-dom';

interface SocialLinkProps {
    link: string
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export function SocialLink({link, icon}: SocialLinkProps) {
    const IconComponent = icon;

    return (
        <Link to={link} className="hover:text-red-500 transition-all" target="_blank">
            <IconComponent className='size-5' />
        </Link>
    );
}