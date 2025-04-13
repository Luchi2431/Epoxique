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
        const response = await fetch(`${API_CONFIG.BASE_URL}${ENDPOINTS.PRODUCTS.BY_ID(id)}`);
        if(!response.ok) {
            throw new Error('Product not found');
        }
        return response.json();
    },

    getHighlightedProducts: async() => {
        const response = await fetch(`${API_CONFIG.BASE_URL}${ENDPOINTS.PRODUCTS.HIGHLIGHTED}`);
        if(!response.ok) {
            throw new Error('Failed to fetch highlighted products');
        }
        return response.json();
    }


};
