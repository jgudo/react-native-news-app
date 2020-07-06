import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchHeader from './SearchHeader';

const Search = ({ navigation }) => {
    const [value, setValue] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            header: () => <SearchHeader navigation={navigation} setValue={setValue} />
        });
    }, [])
    return (
        <View>
            <Text>{value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {}
});

export default Search;
