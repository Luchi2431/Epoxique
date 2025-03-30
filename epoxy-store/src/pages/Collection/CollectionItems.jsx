import React from "react";
import { useParams } from "react-router-dom";
import { collections } from "../../data/collections";
import { products } from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Collection.css";

const CollectionItems = () => {
    const { id } = useParams();
    const collection = collections.find(c => c.id === id);
    
    if (!collection) {
        return <div>Collection not found</div>;
    }

    const collectionProducts = products.filter(product => 
        collection.items.includes(product.id)
    );

    return (
        <div className="collection-container">
            <div className="collection-header">
                <h1>{collection.name}</h1>
                <p>{collection.description}</p>
            </div>
            <div className="products-grid">
                {collectionProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default CollectionItems;
