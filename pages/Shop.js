import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { View, Text, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

const DATA = [
  {
    id: 'sale1',
    title: 'Evening Dress',
    brand: 'Dorothy Perkins',
    price: '12$',
    originalPrice: '15$',
    discount: '-20%',
    image: require('../assets/banner/image3.png'),
    rating: 5,
  },
  {
    id: 'sale2',
    title: 'Sport Dress',
    brand: 'Sitlly',
    price: '19$',
    originalPrice: '22$',
    discount: '-15%',
    image: require('../assets/banner/image2.png'),
    rating: 4,
  },
  {
    id: 'sale3',
    title: 'Sport Dress',
    brand: 'Sitlly',
    price: '19$',
    originalPrice: '22$',
    discount: '-15%',
    image: require('../assets/banner/image3.png'),
    rating: 4,
  },

  {
    id: 'new1',
    title: 'Sport Dress',
    brand: 'Sitlly',
    price: '19$',
    originalPrice: '22$',
    discount: '-15%',
    image: require('../assets/banner/image4.png'),
    rating: 4,
  },
  {
    id: 'new2',
    title: 'Casual Dress',
    brand: 'Mango',
    price: '25$',
    originalPrice: '30$',
    discount: '-20%',
    image: require('../assets/banner/image4.png'), 
    rating: 3,
  },
  {
    id: 'new3',
    title: 'Casual Dress',
    brand: 'Mango',
    price: '25$',
    originalPrice: '30$',
    discount: '-20%',
    image: require('../assets/banner/image4.png'), 
    rating: 3,
  },
];

const renderStars = (rating) => {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FontAwesome
        key={i}
        name={i < rating ? 'star' : 'star-o'}
        size={16}
        color="#FFD700"
      />
    );
  }
  return stars;
};

const Shop = ({ navigation }) => {
  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (itemId) => {
    setLikedItems(prevState => ({
      ...prevState,
      [itemId]: !prevState[itemId]
    }));
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.itemImage} />
        <View style={styles.heartIconContainer}>
          <TouchableOpacity onPress={() => toggleLike(item.id)}>
            <FontAwesome name={likedItems[item.id] ? "heart" : "heart-o"} size={24} color={likedItems[item.id] ? "#DB3022" : "#888"} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.itemRating}>
        {renderStars(item.rating)}
        <Text style={styles.ratingText}>({item.rating})</Text>
      </View>
      <Text style={styles.itemBrand}>{item.brand}</Text>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemPrice}>
        <Text style={styles.itemOriginalPrice}>{item.originalPrice} </Text>
        {item.price}
      </Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../assets/banner/shop_banner.png')} // Replace with actual image URL
        style={styles.bannerImage}
      />
      <Text style={styles.bannerText}>Street clothes</Text>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Sale</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
            <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.sectionSubtitle}>Super summer sale</Text>
        <FlatList
          data={DATA.filter(item => item.id.startsWith('sale'))}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>New</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionSubtitle}>You've never seen it before!</Text>
        <FlatList
          data={DATA.filter(item => item.id.startsWith('new'))}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bannerImage: {
    width: '100%',
    height: 200,
  },
  bannerText: {
    position: 'absolute',
    top: 130,
    left: 30,
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  viewAllText: {
    fontSize: 16,
    color: '#888',
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#888',
  },
  item: {
    marginRight: 15,
  },
  imageContainer: {
    position: 'relative',
  },
  itemImage: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  heartIconContainer: {
    position: 'absolute',
    top: 170,
    right: -5,
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  itemBrand: {
    fontSize: 14,
    color: '#888',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  ratingText: {
    fontSize: 14,
    color: '#888',
    marginLeft: 5,
  },
  itemPrice: {
    fontSize: 16,
    color: '#DB3022',
  },
  itemOriginalPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navItem: {
    alignItems: 'center',
  },
});

export default Shop;
