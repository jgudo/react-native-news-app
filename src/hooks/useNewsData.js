import React, { useState, useEffect } from 'react';
import { fetchTopHeadlines, fetchAllNews } from '../services/api';

const useNewsData = (endpoint, params) => {
    const [news, setNews] = useState([]);
    const [isRefreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (news.length === 0) {
            setLoading(true);
            fetchNews();
        }   
    }, []);

    const fetchNews = async() => {
        let data = null;
        try {
            switch (endpoint) {
                case 'top-headlines':
                    data = await fetchTopHeadlines(params);
                    setNews(data.articles);
                    break;
                case 'all':
                    data = await fetchAllNews(params);
                    setNews(data.articles);
                    break;
                default:
                    throw new Error('Unexpected endpoint entry');
            }
        } catch (e) {
            console.log(e);
        }
        
        console.log(data);
        setLoading(false);
    };

    const onRefresh = () => {
        setRefreshing(true);
        fetchNews();
    }

    return { news, loading, setLoading, onRefresh, isRefreshing}
};

export default useNewsData;
