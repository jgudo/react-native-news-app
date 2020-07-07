import React, { useLayoutEffect, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Button } from 'react-native';
import SearchHeader from './SearchHeader';
import NewsItem from '../news/NewsItem';
import {  fetchAllNews } from '../../services/api';

const Search = ({ navigation }) => {
    const [news, setNews] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    useLayoutEffect(() => {
        navigation.setOptions({
            header: () => (
                <SearchHeader 
                    onSubmitSearch={onSubmitSearch} 
                    setValue={setInputValue} 
                    navigation={navigation} 
                />
            )
        });
    }, [inputValue]);

    const onSubmitSearch = async(page = 1) => {
        setLoading(true);

        try {
            const data = await fetchAllNews({ q: inputValue, page });

            if (data.totalResults >= 1) {
                setNews([...news, ...data.articles]);
                setError('');
            } else {
                setError('No News Found.');
            }
        } catch(e) {
            setError(e?.message);
        }

        setLoading(false);
    };
    
    return (
        <View style={{ flex: 1 }}>
            {(news.length === 0 && !error && !loading) ? (
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ fontSize: 30, color: '#5a5a5a', textAlign: 'center' }}>Search for News</Text>
                </View>
            ) : loading ? (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color="#0034c2" />
                </View>
            ) : error ? (
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ fontSize: 30, color: '#5a5a5a', textAlign: 'center' }}>{error}</Text>
                </View>
            ) : (
                <FlatList 
                    data={news} 
                    initialNumToRender={10}
                    extraData={news}
                    renderItem={({ item }) => <NewsItem news={item}/>}
                    keyExtractor={(news) => `${news.url}_${news.publishedAt}`}
                    ListFooterComponent={<Button title={loading ? 'Getting more news...' : 'Show More'} disabled={loading} onPress={() => onSubmitSearch(currentPage + 1)}/>}
                />
            )}
        </View>
    );
};

export default React.memo(Search);
