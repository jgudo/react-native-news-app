import * as React from 'react';
import { StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';
import About from './src/screens/About';

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
            headerTintColor: '#fff'
          }}
        >
          <Stack.Screen 
              name="Home" 
              component={Home}
              options={{
                screen: 'News'
              }}
          />
          <Stack.Screen name="About" component={About}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
