import React from 'react';
import { FlatList, StyleSheet, RefreshControl, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useNewsData from '../../hooks/useNewsData';
import NewsItem from './NewsItem';

const AllNews = () => {
    const { news, loading, onRefresh, isRefreshing } = useNewsData('all', { q: 'covid' });

    return (
        <SafeAreaView style={styles.container}>
        {loading ? (
            <ActivityIndicator size="large" color="#0034c2" />
        ) : (
            <FlatList 
            data={news} 
            initialNumToRender={10}
            extraData={news}
            renderItem={({ item }) => <NewsItem news={item}/>}
            keyExtractor={(news) => news.url}
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

export default React.memo(AllNews);
