import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton/index';
const CarItem = ({car}) => {
  const {name, tagline, taglineCTA, image} = car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}&nbsp;
          <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.button}>
        <StyledButton text="Custom Order" type="primary" />
        <StyledButton text="Existing Inventory" type="secondary" />
      </View>
    </View>
  );
};

export default CarItem;
