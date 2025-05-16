import React from 'react';
import './Filler1.css'; // Assuming you will add some styles in this CSS file

const Filler1 = () => {
    return (
        <div className="filler-container">
            <div className="filler-item">
                <h3>Konfiguracija</h3>
                <p>Konfigurišite vaš sto prema ličnim željama i u željenim dimenzijama po meri.</p>
            </div>
            <div className="filler-item">
                <h3>Istražite</h3>
                <p>Istražite našu široku ponudu plemenitog drveta (hrast, maslina, orah, brest, kesten i drugo).</p>
            </div>
            <div className="filler-item">
                <h3>Kvalitet</h3>
                <p>Naša epoksi smola je netoksična i dolazi sa 10-godišnjom garancijom proizvođača protiv žućenja.</p>
            </div>  
        </div>
    );
};

export default Filler1;