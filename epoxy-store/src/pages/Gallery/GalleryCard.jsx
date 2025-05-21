import React from 'react';
import { Link } from 'react-router-dom';
import Image from "../../components/Image/Image";
import './Gallery.css';

const GalleryCard = ({ item }) => {
    return (
        <div className="highlight-grid">
            <div className="highlight-card gallery-card">
                <Image 
                    src={item.image_url} 
                    alt={item.name} 
                    size="large" 
                    className="highlight-image" 
                />
                <div className="highlight-content">
                    <h3>{item.name}</h3>
                    <p>{item.description || "Ručno izrađen epoxy projekat"}</p>
                    
                    {item.dimensions && (
                        <p className="gallery-dimensions">
                            <strong>Dimenzije:</strong> {item.dimensions.length}x{item.dimensions.width}x{item.dimensions.height}cm
                        </p>
                    )}
                    
                    {item.materials && (
                        <p className="gallery-materials">
                            <strong>Materijali:</strong> {item.materials}
                        </p>
                    )}
                    
                    <Link 
                        to={`/product/${item.id}?fromGallery=true`} 
                        className="view-button"
                    >
                        Pogledaj detalje
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GalleryCard; 