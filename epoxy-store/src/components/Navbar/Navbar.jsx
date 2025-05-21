import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const navRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
                setActiveDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close menu when window is resized
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 968) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (isOpen) {
            setActiveDropdown(null);
        }
    };

    const toggleDropdown = (name) => (e) => {
            e.preventDefault();
            setActiveDropdown(current => current === name ? null : name );
    };

    const handleLinkClick = () => {
        setIsOpen(false);
        setActiveDropdown(null);
    };

    return (
        <header className="header1">
            <nav className="nav container" ref={navRef}>
                <Link to="/" className="nav__logo" onClick={handleLinkClick}>
                    <span className="nav__logo-text">Epoxique</span>
                </Link>

                <div className={`nav__menu ${isOpen ? 'show-menu' : ''}`}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="/collection" className="nav__link" onClick={handleLinkClick}>
                                Kolekcija
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link to="/tableconfigurator" className="nav__link" onClick={handleLinkClick}>
                                Narudžbina po meri
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link to="/gallery" className="nav__link" onClick={handleLinkClick}>
                                Galerija
                            </Link>
                        </li>
                        
                        <li className="nav__item">
                            <Link to="/contact" className="nav__link" onClick={handleLinkClick}>
                                Kontakt
                            </Link>
                        </li>
                        
                        <li className={`nav__item dropdown ${activeDropdown === 'info' ? 'dropdown-active' : ''}`}>
                            <div className="nav__link dropdown__button" onClick={toggleDropdown('info')} role="button" tabIndex={0}>
                                Informacije
                                <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                            </div>

                            <ul className="dropdown__menu">
                                <li className="dropdown__item">
                                    <Link to="/info/about" className="dropdown__link" onClick={handleLinkClick}>
                                        O nama
                                    </Link>
                                </li>
                                
                                <li className="dropdown__item">
                                    <Link to="/info/reviews" className="dropdown__link" onClick={handleLinkClick}>
                                        Recenzije
                                    </Link>
                                </li>
                                
                                <li className="dropdown__item">
                                    <Link to="/info/warranty" className="dropdown__link" onClick={handleLinkClick}>
                                        Garancija
                                    </Link>
                                </li>
                                
                                <li className="dropdown__item">
                                    <Link to="/info/dimensions" className="dropdown__link" onClick={handleLinkClick}>
                                        Dimenzije
                                    </Link>
                                </li>
                                
                                <li className="dropdown__item">
                                    <Link to="/info/core" className="dropdown__link" onClick={handleLinkClick}>
                                        Materijali
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        
                        <li className="nav__item">
                            <Link to="/checkout" className="nav__link" onClick={handleLinkClick}>
                                <i className="ri-shopping-cart-line"></i>
                            </Link>
                        </li>
                    </ul>

                    <div className="nav__close" onClick={toggleMenu}>
                        <i className="ri-close-line"></i>
                    </div>
                </div>

                <div className="nav__toggle" onClick={toggleMenu}>
                    <i className="ri-menu-line"></i>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;