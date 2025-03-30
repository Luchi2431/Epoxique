import React from 'react';
import './PopularCategories.css'; // Assuming you will add some styles here
import { useNavigate } from 'react-router-dom';
import { collections } from '../../data/collections';

const PopularCategories = () => {
    const navigate = useNavigate();

    const handleCategoryClick = (categoryId) => {
        navigate(`/collection/${categoryId}`);
    };

    return (
        <div className="popular-categories">
            <h1 className="header">Popularne Kategorije</h1>
            <div className="categories">
                <div className="category" onClick={() => handleCategoryClick('dining')}>
                    <img src="/epoxySto1.jpg" alt="Category 1" />
                    <p>Kuhinjski sto</p>
                </div>
                <div className="category" onClick={() => handleCategoryClick('coffee')}>
                    <img src="/epoxySto2.jpg" alt="Category 2" />
                    <p>Sto za dnevni boravak</p>
                </div>
                <div className="category" onClick={() => handleCategoryClick('console')}>
                    <img src="/EpoxySto3.jpg" alt="Category 3" />
                    <p>Daska za secenje</p>
                </div>
            </div>
        </div>
    );
};

export default PopularCategories;