import { useState,memo } from "react";
import { API_CONFIG } from "../../api/config";
import './Image.css';

const Image = memo(({src, alt, className, size = 'medium'}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const imageUrl = src?.startsWith('http')
        ? src
        : src?.startsWith('/images')
        ? `${API_CONFIG.BASE_URL}${src}`
        : `/fallback-image.jpg`;

    return (
        <div className={`image-wrapper ${size} ${className || ''}`}>
            {isLoading && <div className="image-skeleton"/>}
            <img
                src={hasError? '/fallback-image.jpg' : imageUrl}
                alt={alt}
                className={`product-image ${isLoading ? 'loading' : 'loaded'}`}
                loading="lazy"
                onLoad={() => setIsLoading(false)}
                onError={() => {
                    console.log('Image failed to load:', imageUrl);
                    setHasError(true);
                    setIsLoading(false);
                }}
            ></img>
        </div>
    );
});

Image.displayName = 'Image';

export default Image;