import { Link } from "react-router-dom";
import "./ProductCard.css";
import Image from "../Image/Image";

const ProductCard = ({ product }) => {
    const formatPrice = (price) => {
        return new Intl.NumberFormat('sr-RS', {
            style: 'currency',
            currency: 'EUR'
        }).format(price);
    };

    return (
        <div className="highlight-grid">
            <div className="highlight-card">
                <Image 
                    src={product.image_url} 
                    alt={product.name} 
                    size="large" 
                    className="highlight-image" 
                />
                <div className="highlight-content">
                    <h3>{product.name}</h3>
                    <p>{product.description || "Ručno izrađen epoxy sto od premijum materijala"}</p>
                    <p className="price">{formatPrice(product.price)}</p>
                    <Link to={`/product/${product.id}`} className="view-button">
                        Vidite detalje
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;