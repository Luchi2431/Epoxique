import React from 'react';
import './Warranty.css';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';

const Warranty = () => {
    return (
        <>
        <Breadcrumbs />
        <div className="warranty-container">
            <h1>Garancija</h1>
            <div className="warranty-content">
                <div className="warranty-section">
                    <h2>Naša Garancija</h2>
                    <p>Svi naši proizvodi dolaze sa 5-godišnjom garancijom koja pokriva sve proizvodne defekte i strukturalne probleme.</p>
                </div>

                <div className="warranty-section">
                    <h2>Šta Pokriva Garancija</h2>
                    <ul>
                        <li>Strukturalni integritet stola</li>
                        <li>Kvalitet epoksi smole</li>
                        <li>Završna obrada drveta</li>
                        <li>Spojevi i lepljeni delovi</li>
                        <li>Stabilnost nogu stola</li>
                    </ul>
                </div>

                <div className="warranty-section">
                    <h2>Održavanje</h2>
                    <p>Da biste održali garanciju važećom, pridržavajte se naših uputstava za negu i održavanje:</p>
                    <ul>
                        <li>Izbegavajte direktnu sunčevu svetlost</li>
                        <li>Koristite podmetače za vruće predmete</li>
                        <li>Čistite mekanom, vlažnom krpom</li>
                        <li>Odmah obrišite prosute tečnosti</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
};

export default Warranty;
