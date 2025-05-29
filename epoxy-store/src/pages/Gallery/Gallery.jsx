import React, { useEffect, useState } from "react";
import './Gallery.css';
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { productService } from "../../api/services/productService";
import GalleryCard from "./GalleryCard";
import SEO from "../../components/SEO/SEO";

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
        <>
            <SEO
                title="Galerija"
                description="Pogledajte našu galeriju epoksi stolova i ostalih proizvoda. Inspirišite se našim najlepšim radovima."
                canonical="https://epoxique.rs/gallery"
            />
            <Breadcrumbs/>
            <div className="gallery-container">
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
        </>
    );
};

export default Gallery;