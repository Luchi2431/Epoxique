import { API_CONFIG } from "../config";
import { ENDPOINTS } from "../endpoints";

export const categoryService = {
    getAllCategories: async() => {
        const response = await fetch(`${API_CONFIG.BASE_URL}${ENDPOINTS.CATEGORIES.ALL}`);
        if(!response.ok) {
            throw new Error('Failed to fetch categories');
        }
        return response.json();
    },

    getProductsByCategoryId: async(id) => {
        const response = await fetch(`${API_CONFIG.BASE_URL}${ENDPOINTS.CATEGORIES.PRODUCTS_BY_CATEGORY(id)}`);
        if(!response.ok) {
            throw new Error('Failed to fetch category products');
        }
        return response.json();
    }
};