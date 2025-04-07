import React from 'react';
import './Reviews.css';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';

const Reviews = () => {
    return (
        <>
        <Breadcrumbs />
        <div className="reviews-container">
            <h1>Recenzije Klijenata</h1>
            <div className="reviews-content">
                <div className="reviews-section">
                    <div className="review-card">
                        <div className="review-header">
                            <h3>Marko Petrović</h3>
                            <div className="stars">★★★★★</div>
                        </div>
                        <p>"Izuzetan kvalitet izrade. Sto je tačno onakav kakav sam želeo, a izrada je bila brza i profesionalna."</p>
                    </div>
                    <div className="review-card">
                        <div className="review-header">
                            <h3>Ana Jovanović</h3>
                            <div className="stars">★★★★★</div>
                        </div>
                        <p>"Predivan komad nameštaja koji je postao centralna tačka našeg dnevnog boravka. Vredi svake pare!"</p>
                    </div>
                    <div className="review-card">
                        <div className="review-header">
                            <h3>Milan Đorđević</h3>
                            <div className="stars">★★★★★</div>
                        </div>
                        <p>"Oduševljen sam kvalitetom i profesionalnošću. Definitivno ću ih preporučiti prijateljima."</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Reviews;
