import React, { useLayoutEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Item } from 'react-navigation-header-buttons';
import News from './news';
import HeaderButtonIcon from '../icons/HeaderButton';

const Tab = createStackNavigator();

const Home = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Newsmaryosep',
      headerRight: () => (
        <HeaderButtonIcon>
          <Item title="about" iconName="md-information-circle-outline" onPress={() => navigation.navigate('About')} />
          <Item title="search" iconName="md-search" onPress={() => navigation.navigate('Search')} />
        </HeaderButtonIcon>
      ) 
    })
  }, []);
  
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="News" component={News}/>
      </Tab.Navigator>
    </>
  );
};

export default Home;
