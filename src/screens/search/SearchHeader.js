import React from 'react'; 
import { View, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const SearchHeader = ({ navigation, onSubmitSearch, setValue }) => {
    const onSubmit = () => onSubmitSearch();

    return (
        <View style={styles.container}>
            <AntDesign.Button 
                name="arrowleft" 
                size={23} 
                color="#fff" 
                backgroundColor="transparent"
                onPress={navigation.goBack}
            />
            <TextInput
                textContentType='name'
                style={styles.searchInput}
                autoFocus
                underlineColorAndroid="#fff"
                onSubmitEditing={onSubmit}
                placeholder='Search...'
                placeholderTextColor='white'
                onChangeText={(text) => setValue(text)}
                // placeholderStyle={{ marginLeft: 50 }} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row', 
        backgroundColor: '#0034c2', 
        padding: 10, 
        paddingLeft: 5
    },
    searchInput: {
        // backgroundColor: '#2450c6',
        padding: 10,
        flexGrow: 1,
        color: '#fff'
    }
});

export default SearchHeader;
