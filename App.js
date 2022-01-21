import React from 'react';
import Carslist from './src/components/CarList';
import Header from './src/components/Header';
import {View, StyleSheet} from 'react-native';
const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Carslist />
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
