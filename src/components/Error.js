import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Error = ({ error, onRefresh }) => (
    <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
        <Button title="Try Again" onPress={onRefresh} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    error: {
        fontSize: 20,
        color: '#1a1a1a',
        marginBottom: 20
    }
});

export default Error;
