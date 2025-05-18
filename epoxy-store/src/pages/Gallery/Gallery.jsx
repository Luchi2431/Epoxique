import React, { useEffect,useState } from "react";
import './Gallery.css';
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Image from "../../components/Image/Image";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { productService } from "../../api/services/productService";

const Gallery = () => {
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [galleryItems, setGalleryItems] = useState([]);
    
    useEffect(() => {
        const fetchGalleryItems = async() => {
            try {
                setLoading(true);
                const data = await productService.getGalleryProducts();
                setGalleryItems(data);
            }catch(err) {
                setError(err.message);

            }finally {
                setLoading(false);
            }
        };
        fetchGalleryItems();
    }, []);

    if(loading) return <LoadingSpinner/>
    if(error) return <div>Error: {error}</div>;

    return (
        <>
            <Breadcrumbs/>
            <div className="gallery-container">
                <h1>Galerija Radova</h1>
                <div className="gallery-grid">
                    {galleryItems.map(item => (
                        <div key={item.id} className="gallery-item">
                            <Image src={item.image_url} alt={item.name} size="large" className="gallety-image"/>
                            <div className="gallery-info">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>      
                    ))}
                </div>
            </div>
        </>
    );
};


export default Gallery;