import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="footer-content-container">
                <div className="footer-section">
                    <h3>Navigacija</h3>
                    <ul>
                        <li><Link to="/">Početna</Link></li>
                        <li><Link to="/collection">Kolekcija</Link></li>
                        <li><Link to="/contact">Kontakt</Link></li>
                        <li><Link to="/checkout">Korpa</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Kontakt</h3>
                    <ul>
                        <li><a href="mailto:info@epoxystolovi.rs">info@epoxystolovi.rs</a></li>
                        <li><a href="tel:+381601234567">+381 69 312 213</a></li>
                        <li>Pirot, Srbija</li>
                    </ul>
                </div>

                <div className="footer-section social-section">
                    <h3>Društvene mreže</h3>
                    <div className="social-links">
                        <a href="https://www.instagram.com/luka_vlatkovic/" target="_blank" rel="noopener noreferrer">
                            <i className="ri-instagram-line"></i>
                            <span>Instagram</span>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="ri-facebook-circle-fill"></i>
                            <span>Facebook</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; Epoxique</p>
            </div>
        </footer>
    );
}

export default Footer;