import React, { useEffect, useState, useContext } from "react";
import { products } from "../../data/products";
import { useParams } from "react-router-dom";
import './ProductDetails.css';
import { CartContext } from "../../context/CartContext";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import {toast,ToastContainer} from 'react-toastify';

const ProductDetails = () => {
  const { dispatch } = useContext(CartContext);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const product = products.find((p) => p.id === parseInt(id));

  useEffect(() => {
    if (product) {
      setIsLoading(false);
    } else {
      setError('Nema produkta');
      setIsLoading(false);
    }
  }, [product]);

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
    toast.success("Proizvod je dodat u korpu!", {
      position:"top-right",
      autoClose:2000,
      hideProgressBar:false,
      closeOnClick:true,
      pauseOnHover:true,
      draggable:true,
    });
    
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
    <div className="product-details">
      <div className="product-image">
        <img src={`/${product.image}`} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">${product.price}</p>
        <div className="description">
          <h2>Opis</h2>
          <p>Rucno izradjen epoxy sto od premijum materijala</p>
        </div>
        <div className="specifications">
          <h2>Specifikacije</h2>
          <ul>
            <li>Dimenzije: Custom sizes available</li>
            <li>Material: Wood and epoxy resin</li>
            <li>Finalna obrada: High gloss</li>
          </ul>
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Dodaj u korpu
        </button>
      </div>
    </div>
    <ToastContainer/>
    </>
  );
};

export default ProductDetails;