import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { categoryService } from '../../api/services/categoryService';
import ProductCard from '../ProductCard/ProductCard';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './CollectionItems.css';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

const CollectionItems = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const data = await categoryService.getProductsByCategoryId(id);
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [id]); // Only re-run when id changes

    if (loading) return <LoadingSpinner />;
    if (error) return <div>Error: {error}</div>;
    if (!products || products.length === 0) return <div>No products found in this category</div>;

    return (
        <div className="collection-container">
            <Breadcrumbs />
            <h1>{products[0]?.category_name || 'Kolekcija'}</h1>
            <div className="products-grid">
                {products.map((product) => (
                    <ProductCard 
                        key={product.id} 
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
};

export default CollectionItems;