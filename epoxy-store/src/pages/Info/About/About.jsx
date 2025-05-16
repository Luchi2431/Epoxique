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
                    <h2>Ko smo mi?</h2>
                    <p>
                        Epoxique je porodična radionica posvećena izradi unikatnih epoksi stolova i nameštaja od prirodnog drveta. Naša strast prema zanatstvu i dizajnu inspiriše nas da stvaramo komade koji oplemenjuju svaki prostor.
                    </p>
                </div>
                <div className="about-section">
                    <h2>Naša Vizija</h2>
                    <p>
                        Želimo da spojimo lepotu prirode sa savremenom estetikom. Svaki naš sto je pažljivo izrađen kako bi istakao jedinstvene šare drveta i eleganciju epoksija, stvarajući funkcionalnu umetnost za vaš dom ili poslovni prostor.
                    </p>
                </div>
                <div className="about-section">
                    <h2>Zašto izabrati nas?</h2>
                    <p>
                        Svaki komad nameštaja pravimo ručno, koristeći najkvalitetnije materijale i proverene tehnike. Ponosni smo na transparentnost procesa, posvećenost detaljima i lični pristup svakom klijentu. Vaša ideja i želje su nam na prvom mestu.
                    </p>
                </div>
                <div className="about-section">
                    <h2>Naš Proces</h2>
                    <p>
                        Od izbora drveta do završnog sloja epoksija, svaki korak je vođen ljubavlju prema zanatu. Konsultujemo se sa vama tokom celog procesa, kako bismo zajedno stvorili komad koji će trajati generacijama.
                    </p>
                </div>
                <div className="about-section">
                    <h2>Kontaktirajte nas</h2>
                    <p>
                        Imate ideju ili pitanje? Rado ćemo vas saslušati i pomoći da realizujete svoj savršeni sto. Kontaktirajte nas putem <a href="/kontakt">kontakt forme</a> ili nas posetite u našoj radionici.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
};

export default About;
