import * as React from 'react';
import { StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';
import About from './src/screens/About';
import Search from './src/screens/search/Search';
import ViewArticle from './src/screens/news/ViewArticle';

const Stack = createStackNavigator();

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0034c2" />
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: {
              backgroundColor: '#0034c2'
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff'
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ViewArticle" component={ViewArticle} options={{ title: 'View Article' }}/>
          <Stack.Screen name="About" component={About}/>
          <Stack.Screen name="Search" component={Search}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
