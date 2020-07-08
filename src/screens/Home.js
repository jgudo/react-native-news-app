import React, { useLayoutEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Item } from 'react-navigation-header-buttons';
import { Dimensions, Text } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import TopHeadline from './news/TopHeadline';
import AllNews from './news/AllNews';
import HeaderButtonIcon from '../icons/HeaderButton';

const Tab = createStackNavigator();

const Home = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'top', title: 'TOP NEWS' },
    { key: 'all', title: 'ALL NEWS' },
  ]);
  const initialLayout = { width: Dimensions.get('window').width };

  const handleIndexChange = index => {
    setIndex(index);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Newsmaryosep',
      headerRight: () => (
        <HeaderButtonIcon>
          <Item title="search" iconName="md-search" onPress={() => navigation.navigate('Search')} />
        </HeaderButtonIcon>
      ),
      headerLeft: () => (
        <HeaderButtonIcon>
          <Item title="about" iconName="md-information-circle-outline" onPress={() => navigation.navigate('About')} />
        </HeaderButtonIcon>
      )
    })
  }, []);

  const tabBarRender = ({ route, focused, color }) => (
    <Text style={{ 
      color: '#0034c2', 
      fontWeight: focused ? 'bold' : 'normal',
      opacity: focused ? 1 : 0.5,
      fontSize: 14,
      margin: 8,
      
    }}>
      {route.title}
    </Text>
  );
  
  return (
    <TabView
        navigationState={{ index, routes }}
        renderScene={({ route, jumpTo }) => {
          switch (route.key) {
            case 'top':
              return <TopHeadline jumpTo={jumpTo} />
            case 'all':
              return <AllNews jumpTo={jumpTo} />
            default:
              return <TopHeadline jumpTo={jumpTo} />
          }
        }}
        lazy={true}
        onIndexChange={(i) => setIndex(i)}
        initialLayout={initialLayout}
        onRequestChangeTab={handleIndexChange}
        renderTabBar={props => (
          <TabBar
            {...props}
            renderLabel={tabBarRender}
            getLabelText={({route: {title}}) => title}
            indicatorStyle={{ backgroundColor: '#ffa500' }}
            style={{ backgroundColor: '#fff' }}
          />
        )}
      />
  );
};

export default Home;
