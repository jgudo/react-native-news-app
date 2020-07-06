import React from 'react';
import { StyleSheet, ActivityIndicator, ScrollView, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Error from '../../components/Error';

const NewsList = ({ loading, isRefreshing, news, fetchNews, error, children }) => {
    return (
        <SafeAreaView style={styles.container}>
            {(loading && !isRefreshing && news.length === 0) ? (
                <ActivityIndicator size="large" color="#0034c2" />
            ) : error ? (
                <Error onRefresh={fetchNews} error={error} />
            ) : children}
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

export default React.memo(NewsList);
