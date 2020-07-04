import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const NewsItem = ({ news }) => {
    return (
        <View>
            <Text>{news.title}</Text>
            <Image source={{ uri: news.urlToImage }} style={styles.thumbnail}/>
        </View>
    )
};

const styles = StyleSheet.create({
    thumbnail: {
        width: 200,
        height: 150
    }
});

export default NewsItem;
