/* React Router */
import { Link } from "react-router-dom";

/* Imagem */
import logo from '../../../assets/logo-3.svg';

export function Logo() {
    return (
        <Link to={'/'}>
            <img className="rounded-lg size-14 hidden xl:block" src={logo}></img>
        </Link>
    );
}