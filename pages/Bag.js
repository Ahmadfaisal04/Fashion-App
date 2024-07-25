import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Bag = () => {
  return (
    <View style={styles.container}>
      <Text>Ini Halaman Bag</Text>
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

export default Bag;
