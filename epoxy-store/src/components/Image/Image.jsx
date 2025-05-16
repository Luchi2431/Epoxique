import { useState,memo } from "react";
import { API_CONFIG } from "../../api/config";
import './Image.css';

const Image = memo(({ src, alt, className, size = 'medium' }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    // Clean up the URL construction
    const imageUrl = src?.startsWith('http')
        ? src
        : `${API_CONFIG.BASE_URL}${src}`;

    return (
        <div className={`image-wrapper ${size} ${className || ''}`}>
            {isLoading && <div className="image-skeleton"/>}
            <img
                src={imageUrl}
                alt={alt}
                className={`product-image ${isLoading ? 'loading' : 'loaded'}`}
                loading="lazy"
                onLoad={() => setIsLoading(false)}
                onError={(e) => {
                    console.error('Image failed to load:', imageUrl);
                    setIsLoading(false);
                }}
            />
        </div>
    );
});

Image.displayName = 'Image';

export default Image;