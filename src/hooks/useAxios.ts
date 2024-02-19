import { useState, useEffect } from 'react';
import axiosInstance from '../config/axios';

const UseAxios = (url: string, initialOptions = {}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axiosInstance(url, initialOptions);
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
        };

        fetchData();
    }, [url]);
    return { data, error, loading };
};

export default UseAxios;
