import { useState,useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(dropdownRef.current && !dropdownRef.current.contains(event.target) && !event.target.closest('.dropdown-trigger')) {
                setIsDropdownOpen(false);
            }
        };
        if(window.innerWidth <= 768) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);   
    };

    const toggleDropdown = (e) => {
        //Prevent toggle on desktop
        if(window.innerWidth > 768) return;
        e.preventDefault();
        e.stopPropagation();
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLinkClick = () => {
        closeMenu();
        setIsDropdownOpen(false);  
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
                        <li><Link to="/gallery" onClick={handleLinkClick}>Galerija</Link></li>                        
                        <li><Link to="/collection" onClick={handleLinkClick}>Kolekcija</Link></li>
                        <li><Link to="/contact" onClick={handleLinkClick}>Kontakt</Link></li>
                        <li className="dropdown" ref={dropdownRef}>
                            <div className="dropdown-trigger" onClick={toggleDropdown} role="button" tabIndex={0}>
                                <span className="span">Informacije</span>
                                <svg className={`arrow ${isDropdownOpen ? 'rotate' : ''}`} width="10" height="6" viewBox="0 0 10 6">
                                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                                </svg>
                            </div>
                            <ul className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                                <li><Link to="/info/about" onClick={handleLinkClick}>O nama</Link></li>
                                <li><Link to="/info/reviews" onClick={handleLinkClick}>Recenzije</Link></li>
                                <li><Link to="/info/warranty" onClick={handleLinkClick}>Garancija</Link></li>
                                <li><Link to="/info/dimensions" onClick={handleLinkClick}>Dimenzije</Link></li>
                                <li><Link to="/info/core" onClick={handleLinkClick}>Materijali</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/checkout" onClick={handleLinkClick}>Korpa</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;