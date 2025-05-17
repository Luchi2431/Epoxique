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
  //Distructure both cart and dispatch from context
  const { cart,dispatch } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

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
  const isInCart = cart.some(item => item.id === product.id);
    
    if(isInCart) {
      toast.warning("Ovaj sto je vec u korpi!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        toastId: 'already-in-cart'
      });
      return;
    }

    dispatch({ type: 'ADD_TO_CART', payload: { ...product } });
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

  const dimensionOptions = Array.isArray(product.dimensions) ? product.dimensions : [product.dimensions];

  return (
    <>
      <Breadcrumbs />
      <div className="product-details-container">
        <div className="product-gallery">
          {/* Main Image */}
            <Image 
              src={product.images?.[selectedImage]?.image_url} 
              alt={product.name} 
              size="large" 
              className="main-image"
            />
          {/* Thumbnail Images */}
          <div className="thumbnail-container">
            {product.images?.map((image, index) => (
              <div 
                key={image.id} 
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <Image 
                  src={image.image_url} 
                  alt={`${product.name} view ${index + 1}`} 
                  size="small" 
                />
              </div>
            ))}
          </div>
        </div>
        <div className="product-summary">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-price">${product.price}</p> 

          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Dodaj u korpu
          </button>

          <div className="product-description">
            <h2>Opis proizvoda</h2>
            <p>{product.description || "Rucno izradjen epoxy sto od premijum materijala"}</p>
          </div>
          <div className="product-specs">
            <h2>Specifikacije</h2>
            <ul>
              <li><b>Dimenzije:</b> {product.dimensions.length}x{product.dimensions.width}x{product.dimensions.height}cm</li>
            </ul>
          </div>
        </div>
        <ToastContainer/>
      </div>
    </>
  );
};

export default ProductDetails;