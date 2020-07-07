import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Button } from 'react-native';
import SearchHeader from './SearchHeader';
import NewsItem from '../news/NewsItem';
import Error from '../../components/Error';
import {  fetchAllNews } from '../../services/api';

const Search = ({ navigation }) => {
    const [news, setNews] = useState({
        totalResults: 0,
        articles: []
    });
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);
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
                setNews({ totalResults: data.totalResults, articles: [...news.articles, ...data.articles]});
                setError('');
            } else {
                setError('No News Found.');
            }
        } catch(e) {
            setError(e?.message);
        }

        setLoading(false);
    };

    const onShowMore = () => {
        setLoadingMore(true);
        onSubmitSearch(currentPage + 1);
    };
    
    return (
        <View style={{ flex: 1 }}>
            {(news.articles.length === 0 && !error && !loading) ? (
                <View style={styles.container}>
                    <Text style={{ fontSize: 30, color: '#5a5a5a', textAlign: 'center' }}>Search for News</Text>
                </View>
            ) : loading && !loadingMore ? (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#0034c2" />
                </View>
            ) : error ? (
                <Error error={error} onRefresh={onSubmitSearch} />
            ) : (
                <FlatList 
                    data={news.articles} 
                    initialNumToRender={10}
                    extraData={news.articles}
                    renderItem={({ item }) => <NewsItem news={item}/>}
                    keyExtractor={(news) => `${news.url}_${news.publishedAt}`}
                    ListHeaderComponent={(
                        <View style={{ padding: 10 }}>
                            <Text style={{ color: '#bababa' }}>Found {news.totalResults} articles.</Text>
                        </View>
                    )}
                    ListFooterComponent={<Button title={loading ? 'Getting more news...' : 'Show More'} disabled={loading} onPress={onShowMore}/>}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default React.memo(Search);
