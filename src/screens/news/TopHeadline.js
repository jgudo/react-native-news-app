import React from 'react';
import { FlatList, RefreshControl, Button } from 'react-native';
import useNewsData from '../../hooks/useNewsData';
import NewsItem from './NewsItem';
import NewsList from './NewsList';

const News = () => {
    const data = useNewsData('top-headlines', { country: 'ph' });

    return (
        <NewsList {...data}>
            <FlatList 
                data={data.news} 
                initialNumToRender={10}
                extraData={data.news}
                renderItem={({ item }) => <NewsItem news={item}/>}
                keyExtractor={(news) => `${news.url}_${news.publishedAt}`}
                refreshControl={<RefreshControl 
                    refreshing={data.isRefreshing}
                    onRefresh={data.onRefresh}
                    tintColor="#0034c2"
                    colors={['#0034c2']}
                    progressBackgroundColor="#fff"
                />}
                ListFooterComponent={<Button 
                    title={data.loading ? 'Getting more news...' : 'Show More'} 
                    style={{ backgroundColor: '#ffa500', padding: 20 }}
                    disabled={data.loading} 
                    onPress={data.fetchMoreNews}
                />}
            />
        </NewsList>
    );
};

export default React.memo(News);
