import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const NewsItem = ({ news }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('ViewArticle', { uri: news.url })}>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text numberOfLines={3} style={styles.title}>{news.title}</Text>
                    <View style={styles.sourceContainer}>
                        <Text style={styles.source}>Source:</Text>
                        <Text style={styles.sourceName}> {news.source.name}</Text>
                    </View>
                </View>
                <Image source={{ uri: news.urlToImage }} style={styles.thumbnail}/>
            </View>
        </TouchableOpacity>
    )
};

const win = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 5,
        marginHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 7,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 4,
    },
    thumbnail: {
        width: 100,
        height: 100,
        backgroundColor: '#f6f6f6'
    },
    title: {
        fontWeight: 'bold',
        flex: 1,
        flexWrap: 'wrap',
        color: '#0034c2'
    },
    sourceContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    source: {
        color: '#bababa',
        fontSize: 10
    }, 
    sourceName: {
        fontSize: 12,
        color: '#a1a1a1'
    },
    titleContainer: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between',
        padding: 10
    }
});

export default NewsItem;
