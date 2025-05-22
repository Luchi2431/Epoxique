// src/pages/NotFound/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="Sorry, we couldn't find the page you're looking for."
        canonical="https://epoxique.com/404"
      />
      <div className="not-found-container">
        <h1>Page Not Found</h1>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <div className="suggested-links">
          <h2>You might be looking for:</h2>
          <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/collection">Our Collection</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NotFound;