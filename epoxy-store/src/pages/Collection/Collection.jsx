import React from "react";
import { Link } from "react-router-dom";
import { collections } from "../../data/collections";
import "./Collection.css";
import HeroProduct from "../../components/HeroProductPage/HeroProduct";

const Collection = () => {
    return (
        <>
        <HeroProduct />
        <div className="collection-container">
            <div className="collection-header">
                <h1>Nasa kolekcija</h1>
            </div>
            <div className="collections-grid">
                {collections.map((collection) => (
                    <div key={collection.id} className="collection-card">
                        <img src={collection.image} alt={collection.name} />
                        <div className="collection-info">
                            <h2>{collection.name}</h2>
                            <p>{collection.description}</p>
                            <Link to={`/collection/${collection.id}`} className="view-collection">
                                View Collection
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Collection;
