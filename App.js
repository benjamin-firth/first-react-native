import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home/Home';
import { Platform, StyleSheet } from 'react-native';
import Header from './components/Header/Header';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
      <Stack.Navigator initialRouteName="first-rnative" headerMode='screen'>
        <Stack.Screen
          name="first-rnative"
          component={Home} 
          options={{
            header: () => <Header headerDisplay="first-rnative" />
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
