import React from 'react';
import './Contact.css';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const Contact = () => {
    return (
        <>
         <Breadcrumbs />
        <div className="contact-page">
            <div className="contact-header">
                <h1>Kontakt</h1>
                <p>Molim vas popunite formu ispod. Odgovaramo u roku od 24h.</p>
            </div>
            <div className="contact-content">
                <div className="contact-info">
                    <div className="info-section">
                        <h3>Telefon</h3>
                        <p>+381 60 123 4567</p>
                    </div>
                    <div className="info-section">
                        <h3>Email</h3>
                        <p>info@epoxystolovi.rs</p>
                    </div>
                    <div className="info-section">
                        <h3>Radno vreme</h3>
                        <p>Od Ponedeljka do Petka: 9am - 5pm</p>
                        <p>Subota i Nedelja: Zatvoreno</p>
                    </div>
                </div>
                <form className="contact-form">
                    <div className="form-row">
                        <div className="form-group">
                            <input type="text" id="name" name="name" placeholder="Ime *" required />
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" name="email" placeholder="Email *" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="tel" id="phone" name="phone" placeholder="Broj telefona *" required />
                    </div>
                    <div className="form-group">
                        <textarea id="message" name="message" placeholder="Poruka *" required></textarea>
                    </div>
                    <button type="submit">Posalji Upit</button>
                </form>
            </div>
        </div>
        </>
    );
};

export default Contact;