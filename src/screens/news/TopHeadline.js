import React from 'react';
import { FlatList, StyleSheet, RefreshControl, ActivityIndicator, View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useNewsData from '../../hooks/useNewsData';
import NewsItem from './NewsItem';
import Error from '../../components/Error';

const News = () => {
    const { 
        news, 
        loading, 
        onRefresh, 
        isRefreshing, 
        error, 
        fetchNews
    } = useNewsData('top-headlines', { country: 'ph' });

    return (
        <SafeAreaView style={styles.container}>
            {loading && !isRefreshing ? (
                <ActivityIndicator size="large" color="#0034c2" />
            ) : error ? (
                <Error onRefresh={fetchNews} error={error} />
            ) : (
                <FlatList 
                data={news} 
                initialNumToRender={10}
                extraData={news}
                renderItem={({ item }) => <NewsItem news={item}/>}
                keyExtractor={(news) => `${news.url}_${news.publishedAt}`}
                refreshControl={<RefreshControl 
                    refreshing={isRefreshing}
                    onRefresh={onRefresh}
                    tintColor="#0034c2"
                    colors={['#0034c2']}
                    progressBackgroundColor="#fff"
                />}
                />
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
        justifyContent: 'center'
    }
});

export default React.memo(News);
