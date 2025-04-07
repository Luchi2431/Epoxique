import React from 'react';
import './About.css';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';

const About = () => {
    return (
        <>
        <Breadcrumbs />
        <div className="about-container">
            <h1>O Nama</h1>
            <div className="about-content">
                <div className="about-section">
                    <h2>Naša Priča</h2>
                    <p>Započeli smo kao mala porodična radionica sa strašću prema stvaranju jedinstvenog nameštaja. Danas smo ponosni što možemo da ponudimo vrhunske epoksi stolove koji spajaju tradicionalno zanatstvo sa modernim dizajnom.</p>
                </div>
                <div className="about-section">
                    <h2>Naša Misija</h2>
                    <p>Naša misija je da stvorimo jedinstvene komade nameštaja koji će trajati generacijama. Svaki sto koji napravimo je umetničko delo koje odražava prirodnu lepotu drveta u kombinaciji sa savremenim epoksi materijalima.</p>
                </div>
                <div className="about-section">
                    <h2>Naš Proces</h2>
                    <p>Svaki sto se pravi ručno, sa pažnjom posvećenom svakom detalju. Koristimo samo najkvalitetnije materijale i najsavremenije tehnike kako bismo osigurali vrhunski kvalitet svakog komada.</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default About;
