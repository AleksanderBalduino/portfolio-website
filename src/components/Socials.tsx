/* Icons (Lucide React) */
import { Instagram, Linkedin, Github } from 'lucide-react';

/* Import Components */
import { SocialLink } from './SocialLink.tsx';

interface SocialProps {
    style?: string
}

export function Socials({ style }: SocialProps) {
    return (
        <div className={`flex gap-x-6 mx-auto xl:mx-0 ${style}`}>
            <SocialLink link={'https://www.instagram.com/aleksander_balduino/'} icon={Instagram}/>
            <SocialLink link={'https://www.linkedin.com/in/aleksander-balduino/'} icon={Linkedin}/>
            <SocialLink link={'https://github.com/AleksanderBalduino'} icon={Github}/>
        </div>
    );
}