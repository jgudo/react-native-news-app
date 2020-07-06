import { NEWS_API } from 'react-native-dotenv';

const setURLParams = (url, params = {}) => {
    const newURL = new URL(url);
    const combinedParams = { 
        apiKey: (NEWS_API || '16d923d6e2fd4ef48860cab9bc42dea3'), 
        page: 1,
        ...params 
    };
    Object.keys(combinedParams).forEach(key => newURL.searchParams.append(key, combinedParams[key]));

    return newURL;
};

export const fetchTopHeadlines = async(params) => {
    const url = setURLParams('https://newsapi.org/v2/top-headlines', params);

    try {
        const res = await fetch(url);
        const data = await res.json();

        return Promise.resolve(data);
    } catch(e) {
        return Promise.reject(e);
    }
};

export const fetchAllNews = async(params) => {
    const url = setURLParams('https://newsapi.org/v2/everything', params);

    try {
        const res = await fetch(url);
        const data = await res.json();

        return Promise.resolve(data);
    } catch(e) {
        return Promise.reject(e);
    }
};