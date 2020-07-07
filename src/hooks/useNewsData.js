import React, { useState, useEffect } from 'react';
import { fetchTopHeadlines, fetchAllNews } from '../services/api';

const useNewsData = (endpoint, params) => {
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isRefreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (news.length === 0) {
            fetchNews();
        }   
    }, []);

    const fetchNews = async(page = 1) => {
        setLoading(true);
        setError('');
        let data = null;

        try {
            switch (endpoint) {
                case 'top-headlines':
                    data = await fetchTopHeadlines({ ...params, page });
                    break;
                case 'all':
                    data = await fetchAllNews({ ...params, page});
                    break;
                default:
                    throw new Error('Unexpected endpoint entry');
            }
        } catch (e) {
            setError(e.message);
            console.dir(e);
        }

        if (data) {
            console.log(data);
            setNews([...news, ...data.articles]);
        }
        
        setLoading(false);
        setRefreshing(false);
    };

    const onRefresh = () => {
        setRefreshing(true);
        fetchNews();
    }

    const fetchMoreNews = () => {
        fetchNews(currentPage + 1);
        setCurrentPage(currentPage + 1);
    }

    return { news, loading, setLoading, onRefresh, isRefreshing, error, fetchNews, currentPage, fetchMoreNews}
};

export default useNewsData;
