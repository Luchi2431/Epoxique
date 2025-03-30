import React from 'react';
import './Materials.css';

const Materials = () => {
    return (
        <div className="materials-container">
            <h1>Materijali i Izrada</h1>
            <div className="materials-content">
                <div className="materials-section">
                    <h2>Drvo</h2>
                    <p>Koristimo samo pažljivo odabrano i sušeno drvo najvišeg kvaliteta:</p>
                    <ul>
                        <li>Hrast</li>
                        <li>Orah</li>
                        <li>Javor</li>
                        <li>Bagrem</li>
                    </ul>
                    <p>Svaki komad drveta se suši prirodno i u sušarama da bi se osigurala stabilnost.</p>
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
    );
};

export default Materials;
