import React, { useState, useEffect } from 'react';
import { fetchTopHeadlines, fetchAllNews } from '../services/api';

const useNewsData = (endpoint, params) => {
    const [news, setNews] = useState([]);
    const [isRefreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (news.length === 0) {
            fetchNews();
        }   
    }, []);

    const fetchNews = async() => {
        setLoading(true);
        setError('');
        let data = null;

        try {
            switch (endpoint) {
                case 'top-headlines':
                    data = await fetchTopHeadlines(params);
                    break;
                case 'all':
                    data = await fetchAllNews(params);
                    break;
                default:
                    throw new Error('Unexpected endpoint entry');
            }
        } catch (e) {
            setError(e.message);
            console.dir(e);
        }
        
        console.log(data);
        setNews(data.articles);
        setLoading(false);
        setRefreshing(false);
    };

    const onRefresh = () => {
        setRefreshing(true);
        fetchNews();
    }

    return { news, loading, setLoading, onRefresh, isRefreshing, error, fetchNews}
};

export default useNewsData;
