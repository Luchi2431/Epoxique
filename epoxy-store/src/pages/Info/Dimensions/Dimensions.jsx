import React from 'react';
import './Dimensions.css';

const Dimensions = () => {
    return (
        <div className="dimensions-container">
            <h1>Vodič za Dimenzije</h1>
            <div className="dimensions-content">
                <div className="dimensions-section">
                    <h2>Trpezarijski Stolovi</h2>
                    <ul>
                        <li>
                            <strong>Standardna visina:</strong> 75cm
                        </li>
                        <li>
                            <strong>Preporučena širina:</strong> 90-100cm
                        </li>
                        <li>
                            <strong>Dužina po osobi:</strong> 60-70cm
                        </li>
                        <li>
                            <strong>Prostor za noge:</strong> Minimum 30cm od ivice
                        </li>
                    </ul>
                </div>

                <div className="dimensions-section">
                    <h2>Klub Stolovi</h2>
                    <ul>
                        <li>
                            <strong>Standardna visina:</strong> 45cm
                        </li>
                        <li>
                            <strong>Preporučena širina:</strong> 60-80cm
                        </li>
                        <li>
                            <strong>Standardna dužina:</strong> 120-140cm
                        </li>
                    </ul>
                </div>

                <div className="dimensions-section">
                    <h2>Konzolni Stolovi</h2>
                    <ul>
                        <li>
                            <strong>Standardna visina:</strong> 85cm
                        </li>
                        <li>
                            <strong>Preporučena dubina:</strong> 35-45cm
                        </li>
                        <li>
                            <strong>Standardna dužina:</strong> 100-120cm
                        </li>
                    </ul>
                </div>

                <div className="dimensions-section guide">
                    <h2>Kako Izabrati Pravu Veličinu</h2>
                    <p>Kada birate dimenzije vašeg stola, razmislite o:</p>
                    <ul>
                        <li>Veličini prostorije</li>
                        <li>Broju osoba koje će koristiti sto</li>
                        <li>Minimalno 90cm prostora oko stola za kretanje</li>
                        <li>Dodatnom prostoru za stolice</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dimensions;
