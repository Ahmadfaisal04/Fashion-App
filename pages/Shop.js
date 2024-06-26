import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Shop = () => {
  return (
    <View style={styles.container}>
      <Text>Ini Halaman Shop</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Shop;
