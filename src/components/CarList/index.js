import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import CarItem from '../Car_Item';
import carlist from './carlist';
const Carslist = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={carlist}
        renderItem={({item}) => <CarItem car={item} />}
        snapToAlignment={'Start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Carslist;
