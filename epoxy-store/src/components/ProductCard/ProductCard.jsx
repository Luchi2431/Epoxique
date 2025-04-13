import { Link } from "react-router-dom";
import "./ProductCard.css";
import Image from "../Image/Image";

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <Image
                src={product.image_url}
                alt={product.name}
                size="medium"
                className="product-thumbnail"
            ></Image>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`}>
                Pogledaj detalje
            </Link>
        </div>
    );
};

export default ProductCard;