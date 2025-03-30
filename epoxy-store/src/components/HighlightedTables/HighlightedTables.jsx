import React from 'react';
import { Link } from 'react-router-dom';
import './HighlightedTables.css';

const highlightedTables = [
    {
        id: 1,
        name: "Ocean Blue Dining Table",
        price: 2500,
        image: "/epoxySto1.jpg",
        description: "Stunning dining table with ocean blue epoxy river"
    },
    {
        id: 2,
        name: "Forest Green Console",
        price: 1800,
        image: "/epoxySto2.jpg",
        description: "Elegant console table with forest green epoxy inlay"
    },
    {
        id: 3,
        name: "Clear Crystal Coffee Table",
        price: 2200,
        image: "/EpoxySto3.jpg",
        description: "Modern coffee table with clear epoxy highlights"
    },
    {
        id: 4,
        name: "Azure Living Room Table",
        price: 2800,
        image: "/epoxySto1.jpg",
        description: "Luxurious living room table with azure epoxy design"
    }
];

const HighlightedTables = () => {
    return (
        <section className="highlighted-tables">
            <h2>Featured Tables</h2>
            <div className="highlighted-grid">
                {highlightedTables.map((table) => (
                    <div key={table.id} className="highlight-card">
                        <img src={table.image} alt={table.name} />
                        <div className="highlight-content">
                            <h3>{table.name}</h3>
                            <p>{table.description}</p>
                            <p className="price">${table.price}</p>
                            <Link to={`/product/${table.id}`} className="view-button">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HighlightedTables;
