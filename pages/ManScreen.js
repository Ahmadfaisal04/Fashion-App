import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const categories = [
  { name: 'New', image: require('../assets/banner/image4.png') },
  { name: 'Clothes', image: require('../assets/banner/image.png') },
  { name: 'Shoes', image: require('../assets/banner/image2.png') },
  { name: 'Accessories', image: require('../assets/banner/image3.png') },
];

const ManScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>SUMMER SALES</Text>
        <Text style={styles.bannerSubText}>Up to 50% off</Text>
      </View>
      {categories.map((category, index) => (
        <TouchableOpacity key={index} style={styles.categoryContainer}>
          <Text style={styles.categoryText}>{category.name}</Text>
          <Image source={category.image} style={styles.categoryImage} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    backgroundColor: 'red',
    padding: 20,
    alignItems: 'center',
    width: 343,
    height: 100,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 15,
  },
  bannerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  bannerSubText: {
    color: '#fff',
    fontSize: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    width: 343,
    height: 100,
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3, 
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoryImage: {
    width: 171,
    height: 100,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 8,
    position: 'absolute',
    right: 0,
  },
});

export default ManScreen;
