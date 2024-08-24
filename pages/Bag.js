import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CartScreen = () => {
  const [productItems, setProductItems] = useState([
    {
      name: 'Scarves',
      image: require('../assets/products/product1.png'),
      color: 'Black',
      size: 'L',
      price: 50000,
      quantity: 1,
    },
    {
      name: 'Abiel-Blouse',
      image: require('../assets/products/product2.png'),
      color: 'Grey',
      size: 'L',
      price: 250000,
      quantity: 1,
    },
    {
      name: 'Ginny-Dress',
      image: require('../assets/products/image 4.png'),
      color: 'Black',
      size: 'M',
      price: 450000,
      quantity: 1,
    },
    {
      name: 'Gemma-Coat',
      image: require('../assets/products/product3.png'),
      color: 'Black',
      size: 'M',
      price: 900000,
      quantity: 1,
    },
  ]);

  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (index, change) => {
    const updatedProducts = productItems.map((item, i) => 
      i === index ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    );
    setProductItems(updatedProducts);
  };

  const calculateTotal = () => {
    return productItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const formatCurrency = (amount) => {
    return `Rp ${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Bag</Text>
        <MaterialIcons name="search" size={28} color="#333" style={styles.searchIcon} />
      </View>

      <FlatList
        data={productItems}
        renderItem={({ item, index }) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productTitle}>{item.name}</Text>
              <Text style={styles.productDetail}>Color: {item.color}</Text>
              <Text style={styles.productDetail}>Size: {item.size}</Text>
              <Text style={styles.productPrice}>{formatCurrency(item.price)}</Text>
            </View>
            <View style={styles.quantityControl}>
              <TouchableOpacity onPress={() => updateQuantity(index, -1)} style={styles.quantityButton}>
                <Text style={styles.quantityText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => updateQuantity(index, 1)} style={styles.quantityButton}>
                <Text style={styles.quantityText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => String(index)}
        style={styles.productList}
      />

      <View style={styles.promoSection}>
        <TextInput
          style={styles.promoInput}
          placeholder="Enter Your Promo Code"
          value={promoCode}
          onChangeText={(text) => setPromoCode(text)}
        />
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.checkoutSection}>
        <Text style={styles.totalAmountText}>Total amount: {formatCurrency(calculateTotal())}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>CHECK OUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },
  searchIcon: {
    width: 28,
    height: 28,
  },
  productList: {
    marginTop: 12,
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  productImage: {
    width: 90,
    height: 90,
    borderRadius: 8,
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  productDetail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 16,
    color: '#333',
    marginHorizontal: 8,
  },
  promoSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  promoInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333',
  },
  applyButton: {
    paddingVertical: 13,
    paddingHorizontal: 25,
    backgroundColor: '#333',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  applyButtonText: {
    fontSize: 16,
    color: '#fff',
    
  },
  checkoutSection: {
    marginTop: 20,
    alignItems: 'center',
  },
  totalAmountText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 130,
    borderRadius: 50,
  },
  checkoutButtonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CartScreen;
