import React, { useEffect, useState } from "react";
import './Gallery.css';
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { productService } from "../../api/services/productService";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [galleryItems, setGalleryItems] = useState([]);
    
    useEffect(() => {
        const fetchGalleryItems = async() => {
            try {
                setLoading(true);
                const data = await productService.getGalleryProducts();
                setGalleryItems(data);
            } catch(err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchGalleryItems();
    }, []);

    if(loading) return <LoadingSpinner/>;
    if(error) return <div>Error: {error}</div>;

    return (
        <div className="gallery-container">
            <Breadcrumbs/>
            <h1>Galerija Radova</h1>
            <div className="gallery-grid">
                {galleryItems.map(item => (
                    <GalleryCard 
                        key={item.id} 
                        item={item}
                    />
                ))}
            </div>
        </div>
    );
};

export default Gallery;