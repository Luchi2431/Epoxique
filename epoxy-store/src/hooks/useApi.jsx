import { useState, useEffect } from 'react';

export const useApi = (apiFunc) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try 
            {
                const result = await apiFunc();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [apiFunc]);

    return { loading, error, data };
};