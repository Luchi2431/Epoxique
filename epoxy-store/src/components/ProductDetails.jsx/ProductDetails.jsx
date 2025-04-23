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
  const [selectedDimension, setSelectedDimension] = useState("");
  const [customDimension, setCustomDimension] = useState("");
  const [useCustom, setUseCustom] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await productService.getProductById(id);
        setProduct(data);
        if(data.dimensions) {
          setSelectedDimension(
            typeof data.dimensions === "string" ? data.dimensions : JSON.stringify(data.dimensions)
          );
        }
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
    const dimensionToAdd = useCustom ? customDimension : selectedDimension;
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1, selectedDimension: dimensionToAdd } });
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
          <Image src={product.image_url} alt={product.name} size="large" className="main-image"/>
        </div>
        <div className="product-summary">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-price">${product.price}</p>

          <div className="dimension-selector">
            <h3>Izaberi dimenzije</h3>
            {!useCustom && (
              <select value={selectedDimension} onChange={(e)=>setSelectedDimension(e.target.value)}>
                {dimensionOptions.map((dim,index) => (
                  <option key={index} value={typeof dim==="string" ? dim: JSON.stringify(dim)}>
                    {typeof dim === "string" ? dim : JSON.stringify(dim)}
                  </option>
                ))}
              </select>
            )}
            <div style={{marginTop: "10px"}}>
              <label>
                <input type="checkbox" checked={useCustom} onChange={() => setUseCustom(!useCustom)}></input>
                Zelim da unesem svoje dimenzije
              </label>
              {useCustom && (
                <input type="text" value={customDimension} onChange={(e) => setCustomDimension(e.target.value)} 
                placeholder="Unesite dimenzije npr. 120*80*60 cm"
                style={{marginTop: "10px",width:"100%"}}
                ></input>
              )}
            </div>

          </div>

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
              <li>Dimenzije: {selectedDimension || "Po narudzbini"}</li>
              <li>Material: Wood and epoxy resin</li>
              <li>Finalna obrada: High gloss</li>
            </ul>
          </div>
        </div>
        <ToastContainer/>
      </div>
    </>
  );
};

export default ProductDetails;