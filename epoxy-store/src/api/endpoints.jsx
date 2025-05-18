export const ENDPOINTS = {
    PRODUCTS: {
        ALL: '/products',
        BY_ID: (id) => `/products/${id}`,
        HIGHLIGHTED: '/products/highlighted',
        GALLERY: '/products/gallery'
    },
    CATEGORIES: {
        ALL: '/categories',
        PRODUCTS_BY_CATEGORY: (id) => `/categories/${id}/products`,
        FEATURED: '/categories/featured'
    },
   
}