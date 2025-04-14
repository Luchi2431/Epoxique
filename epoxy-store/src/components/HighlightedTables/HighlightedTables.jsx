import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './HighlightedTables.css';
import { productService } from '../../api/services/productService';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { API_CONFIG } from '../../api/config';
import Image from '../Image/Image';

const HighlightedTables = () => {
    const [tables, setTables] = useState();
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=> {
        const fetchHighlightedTables = async() => {
            try {
                setLoading(true);
                const data = await productService.getHighlightedProducts();
                setTables(data);
            }catch(err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchHighlightedTables();
    }, []);

   

    if(loading) return <LoadingSpinner/>;
    if(error) return <div>Error loading highligted products </div>;
    if(!tables.length) return null;
   
    return (
        <section className="highlighted-tables">
            <h2>Izdvojeno iz kolekcije</h2>
            <div className="highlighted-grid">
                {tables.map((table) => (
                    <div key={table.id} className='highlight-card'>
                        <Image src={table.image_url} alt={table.name} size="large" className="highlight-image" />
                        <div className='highlight-content'>
                            <h3>{table.name}</h3>
                            <p>{table.description}</p>
                            <p className='price'>${table.price}</p>
                            <Link to={`/product/${table.id}`} className="view-button">
                                Vidite detalje
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HighlightedTables;
