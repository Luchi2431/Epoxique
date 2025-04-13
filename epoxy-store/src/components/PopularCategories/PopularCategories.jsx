import React, {useEffect, useState} from 'react';
import './PopularCategories.css'; // Assuming you will add some styles here
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { categoryService } from '../../api/services/categoryService';

const PopularCategories = () => {
    const navigate = useNavigate();
    const [categories,setCategories] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async() => {
            try{
                setLoading(true);
                const data = await categoryService.getFeaturedCategories();
                setCategories(data);
            }catch(err) {
                setError(err.message);
            }finally {
                setLoading(false);
            }
        };
        fetchCategories();
    }, []);

    if(loading) return <LoadingSpinner/>;
    if(error) return null;
    if(!categories.length) return null;

    return (
        <div className="popular-categories">
            <h1 className="header">Popularne Kategorije</h1>
            <div className="categories">
                {categories.map(category => (
                    <div
                        key={category.id}
                        className='category'
                        onClick={() => navigate(`/collection/${category.id}`)}
                    >
                        <img
                            src={category.image_url}
                            alt={category.name}
                        ></img>
                        <p>{category.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularCategories;