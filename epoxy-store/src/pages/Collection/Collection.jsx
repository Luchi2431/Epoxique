import React from 'react';
import { Link } from 'react-router-dom';
import './Collection.css';
import { useApi } from '../../hooks/useApi';
import { categoryService } from '../../api/services/categoryService';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Image from '../../components/Image/Image';

const Collection = () => {
    const { loading, error, data: categories } = useApi(categoryService.getAllCategories);


    if (loading) return <LoadingSpinner />;
    if (error) return <div>Error: {error}</div>;
    if (!categories || categories.length === 0) return <div>No categories found</div>;

    return (
        <div className="collection-container">
            <Breadcrumbs />
            <h1>Our Collections</h1>
            <div className="collections-grid">
                {categories.map((category) => (
                    <div key={category.id} className="collection-card">
                        <Image src={category.image_url} alt={category.name} size="large" className="category-image" />
                        <div className="collection-info">
                            <h2>{category.name}</h2>
                            <p>{category.description}</p>
                            <Link to={`/collection/${category.id}`} className="view-collection">
                                View Collection
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Collection;