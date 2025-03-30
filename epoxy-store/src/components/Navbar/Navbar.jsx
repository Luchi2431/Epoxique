import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="navbar">
            <nav className="navbar-container">
                <Link to="/" className="logo" onClick={closeMenu}>
                    Epoxique
                </Link>

                <button 
                    className={`hamburger ${isOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Menu"
                    aria-expanded={isOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`nav-elements ${isOpen ? 'active' : ''}`}>
                    <ul>
                        <li><Link to="/collection" onClick={closeMenu}>Kolekcija</Link></li>
                        <li><Link to="/contact" onClick={closeMenu}>Kontakt</Link></li>
                        <li className="dropdown">
                            <div className="dropdown-trigger">
                                <span>Informacije</span>
                                <svg className="arrow" width="10" height="6" viewBox="0 0 10 6">
                                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                                </svg>
                            </div>
                            <ul className="dropdown-content">
                                <li><Link to="/info/about" onClick={closeMenu}>O nama</Link></li>
                                <li><Link to="/info/reviews" onClick={closeMenu}>Recenzije</Link></li>
                                <li><Link to="/info/warranty" onClick={closeMenu}>Garancija</Link></li>
                                <li><Link to="/info/dimensions" onClick={closeMenu}>Vodič za dimenzije</Link></li>
                                <li><Link to="/info/core" onClick={closeMenu}>Materijali</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/checkout" onClick={closeMenu}>Checkout</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;