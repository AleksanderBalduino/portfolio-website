/* Imports - Components */
import { NavbarLink } from "../Links/NavbarLink.tsx";

export function Navbar() {
    return (
        <nav className="flex items-center">
            <ul className="grid grid-cols-3 gap-x-8">
                <NavbarLink path="/" title="home" />
                <NavbarLink path="/projetos" title="projetos" />
                <NavbarLink path="/contato" title="contato" />
            </ul>
        </nav>
    );
}