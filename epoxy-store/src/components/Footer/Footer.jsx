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
                        <li><Link to="/products">Proizvodi</Link></li>
                        <li><Link to="info/about">O nama</Link></li>
                        <li><Link to="/contact">Kontakt</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Kontakt</h3>
                    <ul>
                        <li><a href="mailto:info@epoxystolovi.rs">info@epoxystolovi.rs</a></li>
                        <li><a href="tel:+381601234567">+381 60 123 4567</a></li>
                        <li>Pirot, Srbija</li>
                    </ul>
                </div>

                <div className="footer-section social-section">
                    <h3>Društvene mreže</h3>
                    <div className="social-links">
                        <a href="https://www.instagram.com/luka_vlatkovic/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram">📸</i>
                            <span>Instagram</span>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f">👍</i>
                            <span>Facebook</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Epoxy Stolovi Pirot</p>
            </div>
        </footer>
    );
}

export default Footer;