import * as React from "react";
import { Link } from 'gatsby';

const Navbar = () => {
    return (
        <nav>
            <ul className="flex gap-8">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/about">Sobre</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li>Projetos</li>
                <li>Contato</li>
            </ul>
        </nav>
    )
}

export default Navbar;