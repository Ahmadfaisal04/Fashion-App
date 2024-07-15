import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/banner/big_banner.png')} style={styles.image} />
        <View style={styles.overlay}>
          <Text style={styles.headerText}>Fashion Sale</Text>
          <TouchableOpacity style={styles.checkButton} onPress={() => navigation.navigate('HomeMain')}>
            <Text style={styles.checkButtonText}>Check</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.newSection}>
        <View style={styles.newHeader}>
          <Text style={styles.newTitle}>New</Text>
          <TouchableOpacity onPress={() => navigation.navigate('NewItemsScreen')}>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.newSubtitle}>You've never seen it before!</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.newItems}>
          <View style={styles.newItem}>
            <Image source={require('../assets/products/product1.png')} style={styles.newItemImage} />
            <Text style={styles.newLabel}>NEW</Text>
          </View>
          <View style={styles.newItem}>
            <Image source={require('../assets/products/product2.png')} style={styles.newItemImage} />
            <Text style={styles.newLabel}>NEW</Text>
          </View>
          <View style={styles.newItem}>
            <Image source={require('../assets/products/product3.png')} style={styles.newItemImage} />
            <Text style={styles.newLabel}>NEW</Text>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    height: 400,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 30,
    left: 20,
  },
  headerText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFF',
  },
  checkButton: {
    width: 160,
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FF0000',
    borderRadius: 25,
  },
  checkButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  newSection: {
    padding: 20,
  },
  newHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  newTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    
  },
  viewAll: {
    color: 'gray',
  },
  newSubtitle: {
    color: 'gray',
    marginVertical: 10,
  },
  newItems: {
    flexDirection: 'row',
  },
  newItem: {
    width: 200,
    marginRight: 10,
    position: 'relative',
    
  },
  newItemImage: {
    width: '150',
    height: 218,
    borderRadius: 10,
    resizeMode: 'contain',
    marginTop: 10,
  },
  newLabel: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'black',
    color: '#FFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 29,
    fontSize: 12,
  },
});

export default HomeScreen;
