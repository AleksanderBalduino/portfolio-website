/* Icons (Lucide React) */
import { Home, BriefcaseBusiness, SendHorizontal, X } from 'lucide-react';

/* Imports - Components */
import { MobileNavbarLink } from '../Links/MobileNavbarLink.tsx';

interface MobileNavbarProps {
    toggle: boolean
    showMenubar: () => void
}

export function MobileNavbar({ toggle, showMenubar } : MobileNavbarProps) {
    return (
        <nav className={`${toggle && '-translate-y-full'} bg-white p-[2rem_4rem] fixed right-0 w-full shadow-[0_-1px_25px_rgba(0,0,0,0.15)] rounded-t-3xl transition duration-300`}>
            <ul className="grid grid-cols-3 gap-x-8 text-center">
                <MobileNavbarLink path="/" title="home" icon={Home} />
                <MobileNavbarLink path="/projetos" title="projetos" icon={BriefcaseBusiness} />
                <MobileNavbarLink path="/contato" title="contato" icon={SendHorizontal} />
            </ul>

            <div className='absolute right-0 top-0 pt-4 pr-4'>
                <X size={32} className='cursor-pointer hover:text-red-500 transition-all' onClick={showMenubar} />
            </div>
        </nav>
    );
}