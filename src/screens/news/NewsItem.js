import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const NewsItem = ({ news }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: news.urlToImage }} style={styles.thumbnail}/>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{news.title}</Text>
                <Text>Source:</Text>
            </View>
        </View>
    )
};

const win = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 7,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,

        elevation: 9,
    },
    thumbnail: {
        width: 100,
        height: 100
    },
    title: {
        fontWeight: 'bold',
        flex: 1,
        flexWrap: 'wrap'
    },
    titleContainer: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between',
        padding: 10
    }
});

export default NewsItem;
