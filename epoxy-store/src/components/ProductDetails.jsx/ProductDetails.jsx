import React, { useEffect, useState, useContext } from "react";
import { products } from "../../data/products";
import { useParams } from "react-router-dom";
import './ProductDetails.css';
import { CartContext } from "../../context/CartContext";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

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
      setError('Product not found');
      setIsLoading(false);
    }
  }, [product]);

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={`/${product.image}`} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">${product.price}</p>
        <div className="description">
          <h2>Description</h2>
          <p>Handcrafted epoxy table made with premium materials.</p>
        </div>
        <div className="specifications">
          <h2>Specifications</h2>
          <ul>
            <li>Dimensions: Custom sizes available</li>
            <li>Material: Wood and epoxy resin</li>
            <li>Finish: High gloss</li>
          </ul>
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;