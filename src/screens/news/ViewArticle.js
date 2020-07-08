import React from 'react';
import { WebView } from 'react-native-webview';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

const ViewArticle = ({ route }) => {
    const { uri } = route.params;
    console.log(uri);
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#f4f4f4'}}>
            <WebView 
                source={{ uri: uri || 'https://reactnative.dev/' }}
                renderLoading={() => <ActivityIndicator size="large" color="#0034c2" style={styles.loader}/>}
                startInLoadingState 
                renderError={() => <Text>Failed to load page.</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    loader: {
        position: 'absolute',
        left: 0,
        right: 0, 
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ViewArticle;
