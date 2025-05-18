import { API_CONFIG } from "../config";
import { ENDPOINTS } from "../endpoints";

export const productService = {
    getAllProducts: async() => {
        const response = await fetch(`${API_CONFIG.BASE_URL}${ENDPOINTS.PRODUCTS.ALL}`);
        if(!response.ok) {
            throw new Error('Failed to fetch products');
        }
        return response.json();
    },

    getProductById: async(id) => {
        try {
            const response = await fetch(`${API_CONFIG.BASE_URL}${ENDPOINTS.PRODUCTS.BY_ID(id)}`);

            if(!response.ok) {
                throw new Error('Product not found');
            }
            const data = await response.json();
            return data;
            
        } catch(error) {
            console.error('Error fetching product:', error);
            throw error;
        }
    },

    getHighlightedProducts: async() => {
        const response = await fetch(`${API_CONFIG.BASE_URL}${ENDPOINTS.PRODUCTS.HIGHLIGHTED}`);
        if(!response.ok) {
            throw new Error('Failed to fetch highlighted products');
        }
        return response.json();
    },

    getGalleryProducts: async() => {
        const response = await fetch(`${API_CONFIG.BASE_URL}${ENDPOINTS.PRODUCTS.GALLERY}`);
        if(!response.ok) {
            throw new Error('Failed to fetch gallery Products');
        }
        return response.json();
    }


};
