export const API_CONFIG = {
    BASE_URL: import.meta.env.VITE_API_URL || 'https://api/epoxique.rs',
    HEADERS: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
}