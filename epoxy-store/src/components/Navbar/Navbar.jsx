import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {

    const showSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = "flex";
    }

    const hideSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = "none";
    }

    return (
        <header>
                <nav>
                    <ul className="sidebar">
                        <li onClick={hideSidebar}><label><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></label></li>
                        <li><Link to="/">Epoxique</Link></li>
                        <li><Link to="/collection">Kolekcija</Link></li>
                        <li><Link to="/contact">Kontakt</Link></li>
                        <li className="dropdown">
                            <span>Informacije</span>
                            <ul className="dropdown-content">
                                <li><Link to="/info/about">O nama</Link></li>
                                <li><Link to="/info/reviews">Recenzije</Link></li>
                                <li><Link to="/info/warranty">Garancija</Link></li>
                                <li><Link to="/info/dimensions">Vodič za dimenzije</Link></li>
                                <li><Link to="/info/core">Materijali</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/checkout">Checkout</Link></li>
                    </ul>
                    
                    <ul>
                        <li><Link to="/">Epoxique</Link></li>
                        <li className="hideOnMobile"><Link to="/collection">Kolekcija</Link></li>
                        <li className="hideOnMobile"><Link to="/contact">Kontakt</Link></li>
                        <li className="hideOnMobile dropdown">
                            <span>Informacije</span>
                            <ul className="dropdown-content">
                                <li><Link to="/info/about">O nama</Link></li>
                                <li><Link to="/info/reviews">Recenzije</Link></li>
                                <li><Link to="/info/warranty">Garancija</Link></li>
                                <li><Link to="/info/dimensions">Vodič za dimenzije</Link></li>
                                <li><Link to="/info/core">Materijali</Link></li>
                            </ul>
                        </li>
                        <li className="hideOnMobile"><Link to="/checkout">Checkout</Link></li>
                        <li className="menuButton" onClick={showSidebar}><label><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></label></li>
                    </ul>
                </nav>
        </header>

    )
}
export default Navbar;