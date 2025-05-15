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
                    <h2>Garancija kvaliteta</h2>
                    <p>Svi epoxy stolovi koje izrađujem rađeni su ručno, sa posebnom pažnjom na kvalitet izrade i upotrebu pouzdanih materijala. Kao nezavisni proizvođač (fizičko lice), nudim neformalnu garanciju od 12 meseci od datuma kupovine, koja pokriva:</p>
                    <ul>
                        <li>Pucanje epoxy smole usled fabričkog defekta</li>
                        <li>Vidljive deformacije drveta koje nisu posledica neadekvatnog održavanja</li>
                        <li>Probleme u vezi sa spajanjem elemenata stola (nogare, konstrukcija i sl.)</li>
                    </ul>
                </div>

                <div className="warranty-section">
                    <h2>Garancija ne pokriva</h2>
                    <ul>
                        <li>Mehanička oštećenja nastala korišćenjem (ogrebotine, udarci, padovi)</li>
                        <li>Oštećenja izazvana vlagom, prekomernim izlaganjem suncu, grejačima ili lošim uslovima u prostoriji</li>
                        <li>Habanje usled normalne upotrebe</li>
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
                 <div className='warranty-section'>
                    <h2>Politika reklamacije i povraćaja</h2>
                    <p>Zbog prirode proizvoda koji se izrađuju ručno i često po meri, ne primam povrat proizvoda osim u slučaju oštećenja prilikom transporta ili ozbiljnog defekta u izradi.<br/>
                       Reklamacije se primaju u roku od 7 dana od prijema proizvoda. Potrebno je poslati slike i opis problema. Ako je reklamacija opravdana, dogovaramo se o zameni, popravci ili povraćaju novca.
                    </p>
                </div>
                <div className='warranty-section'>
                    <h2>Pravna napomena</h2>
                    <p>Prodaja se obavlja kao fizičko lice, bez registrovane firme. 
                       Kupovina je bazirana na međusobnom poverenju i dogovoru.
                    </p>

                </div>
            </div>
        </div>
        </>
    );
};

export default Warranty;
