import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import './ProductDetails.css';
import { CartContext } from "../../context/CartContext";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { productService } from "../../api/services/productService";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Image from "../Image/Image";

const ProductDetails = () => {
  const { dispatch } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await productService.getProductById(id);
        setProduct(data);
      } catch(err) {
        console.error("Failed to fetch product:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
    setTimeout(() => {
      toast.success("Proizvod je dodat u korpu!", {
        position:"top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        toastId: 'add-to-cart'
      });
    }, 0);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <>
      <Breadcrumbs />
      <div className="product-details">
        <div className="product-image">
          <Image src={product.image_url} alt={product.name} size="large" className="detail-image"/>
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">${product.price}</p>
          <div className="description">
            <h2>Opis</h2>
            <p>{product.description || "Rucno izradjen epoxy sto od premijum materijala"}</p>
          </div>
          <div className="specifications">
            <h2>Specifikacije</h2>
            <ul>
              <li>Dimenzije: {product.dimensions ? JSON.stringify(product.dimensions) : "Custom sizes available"}</li>
              <li>Material: Wood and epoxy resin</li>
              <li>Finalna obrada: High gloss</li>
            </ul>
          </div>
          <button className="add-to-cart" onClick={handleAddToCart}>
            Dodaj u korpu
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;