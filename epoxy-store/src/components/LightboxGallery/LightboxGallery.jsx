import React, { useState, useEffect, useCallback } from 'react';
import './LightboxGallery.css';
import { API_CONFIG } from "../../api/config";

const LightboxGallery = ({ images, initialIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [zoomOrigin, setZoomOrigin] = useState({ x: 0, y: 0 });

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowRight') {
      navigateNext();
    } else if (e.key === 'ArrowLeft') {
      navigatePrev();
    }
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  const navigateNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setIsZoomed(false);
  };

  const navigatePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setIsZoomed(false);
  };

  const toggleZoom = (e) => {
    if (!isZoomed) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      setZoomOrigin({ x, y });
      setZoomPosition({ x, y });
    }
    
    setIsZoomed(!isZoomed);
  };

  const handleMouseMove = (e) => {
    if (isZoomed) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      setZoomPosition({ x, y });
    }
  };

  if (!images || images.length === 0) return null;

  const rawImageUrl = images[currentIndex]?.image_url;
  if (!rawImageUrl) return null;
  
  // Construct the proper image URL just like in the Image component
  const imageUrl = rawImageUrl.startsWith('http')
    ? rawImageUrl
    : `${API_CONFIG.BASE_URL}${rawImageUrl}`;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        <div 
          className={`lightbox-image-container ${isZoomed ? 'zoomed' : ''}`}
          onClick={toggleZoom}
          onMouseMove={handleMouseMove}
        >
          <img 
            src={imageUrl} 
            alt={`Gallery image ${currentIndex + 1}`} 
            className="lightbox-image"
            style={
              isZoomed 
                ? { 
                    transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%`,
                    objectPosition: `${zoomPosition.x}% ${zoomPosition.y}%`
                  } 
                : {}
            }
          />
        </div>
        
        <div className="lightbox-navigation">
          <button className="nav-button prev" onClick={navigatePrev}>
            &#10094;
          </button>
          <div className="image-counter">
            {currentIndex + 1} / {images.length}
          </div>
          <button className="nav-button next" onClick={navigateNext}>
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default LightboxGallery; 