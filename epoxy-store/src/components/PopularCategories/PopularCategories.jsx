import React, { useEffect, useState } from 'react';
import './PopularCategories.css';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { categoryService } from '../../api/services/categoryService';
import Image from '../Image/Image';

const PopularCategories = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async() => {
            try {
                setLoading(true);
                const data = await categoryService.getFeaturedCategories();
                setCategories(data);
            } catch(err) {
                setError(err.message);
                console.error('Failed to fetch categories:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchCategories();
    }, []);

    const handleCategoryClick = (categoryId) => {
        navigate(`/collection/${categoryId}`);
    };

    if(loading) return <LoadingSpinner />;
    if(error) return null;
    if(!categories.length) return null;

    return (
        <section className="popular-categories">
            <h1 className="header">Popularne Kategorije</h1>
            <div className="categories">
                {categories.map(category => (
                    <div
                        key={category.id}
                        className="category"
                        onClick={() => handleCategoryClick(category.id)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                handleCategoryClick(category.id);
                            }
                        }}
                    >
                        <Image 
                            src={category.image_url} 
                            alt={category.name} 
                            size="large" 
                            className="category-image" 
                        />
                        <p>{category.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularCategories;