import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { categoryService } from "../../api/services/categoryService";
import ProductCard from "../ProductCard/ProductCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "./CollectionItems.css";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const CollectionItems = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        //Prvo uzimamo ime kategorije
        const category = await categoryService.getCategoryById(id);
        setCategoryName(category.name);
        //Pa proveravamo da li ima proizvoda u toj kategoriji
        const data = await categoryService.getProductsByCategoryId(id);
        setProducts(data);
      } catch (err) {
        setError("no-products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [id]); // Only re-run when id changes

  if (loading) return <LoadingSpinner />;
  if (error === "no-products") {
    return (
      <>
        <Breadcrumbs />
        <div className="collection-container">
          <div className="no-products-message">
            <h1>{categoryName || "Kolekcija"}</h1>
            <p>Trenutno nema dostupnih proizvoda u ovoj kolekciji</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Breadcrumbs />
      <div className="collection-container">
        <h1>{categoryName || "Kolekcija"}</h1>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CollectionItems;
