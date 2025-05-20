import React from 'react';
import './Materials.css';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';

const Materials = () => {
    return (
        <>
        <Breadcrumbs />
        <div className="materials-container">
            <h1>Materijali i Izrada</h1>
            <div className="materials-content">
                <div className="materials-section">
                    <h2>Drvo</h2>
                    <h3>Tvrdo drvo (preporučeno):</h3>
                    <ul>
                        <li><b>Hrast</b> - izuzetno čvrst i dugotrajan, sa prepoznatljivim godovima.</li>
                        <li><b>Orah</b> - poznat po bogatoj boji i teksturi, često se koristi za luksuzne stolove.</li>
                        <li><b>Jasen</b> - svetlije boje, ima dobru otpornost.</li>
                        <li><b>Tresnja</b> - toplih tonova, stari s vremenom i dobija bogatiju boju.</li>
                    </ul>
                    <h3>Mekano drvo:</h3>
                </div>

                <div className="materials-section">
                    <h2>Epoksi Smola</h2>
                    <p>Koristimo premium epoksi smolu sa sledećim karakteristikama:</p>
                    <ul>
                        <li>UV otpornost</li>
                        <li>Kristalna providnost</li>
                        <li>Visoka tvrdoća</li>
                        <li>Otpornost na toplotu</li>
                        <li>Bez toksičnih materija</li>
                    </ul>
                </div>

                <div className="materials-section">
                    <h2>Proces Izrade</h2>
                    <ol>
                        <li>Selekcija i priprema drveta</li>
                        <li>Stabilizacija i sušenje</li>
                        <li>Planiranje dizajna</li>
                        <li>Nalivanje epoksida</li>
                        <li>Sušenje i temperiranje</li>
                        <li>Fino brušenje</li>
                        <li>Završna obrada</li>
                    </ol>
                </div>

                <div className="materials-section">
                    <h2>Završna Obrada</h2>
                    <p>Svaki sto dobija višeslojnu zaštitu:</p>
                    <ul>
                        <li>Ulje za drvo</li>
                        <li>Zaštitni lak</li>
                        <li>Anti-UV premaz</li>
                        <li>Vodootporna završnica</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
};

export default Materials;
