import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home/Home';

const Stack = createStackNavigator();

export default const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="first-rnative">
        <Stack.Screen
          name="first-rnative"
          component={Home} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
