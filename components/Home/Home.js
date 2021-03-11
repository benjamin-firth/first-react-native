import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EventList from '../EventList/EventList';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>TESTING</Text>
      <EventList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Home;