import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, ScrollView } from 'react-native';
// import RangeSlider from 'react-native-range-slider-expo';

const FiltersScreen = () => {
  const [priceRange, setPriceRange] = useState([78, 143]);
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const colors = ['black', 'white', 'red', 'grey', 'beige', 'blue'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const categories = ['All', 'Women', 'Men', 'Boys', 'Girls'];

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Price range</Text>
        <View style={styles.sliderContainer}>
          <Text style={styles.priceLabel}>${priceRange[0]}</Text>
          <RangeSlider
            min={0}
            max={200}
            step={1}
            low={priceRange[0]}
            high={priceRange[1]}
            style={styles.rangeSlider}
            thumbStyle={styles.thumb}
            lineStyle={styles.line}
            selectedStyle={styles.selected}
            onValueChanged={(low, high) => setPriceRange([low, high])}
          />
          <Text style={styles.priceLabel}>${priceRange[1]}</Text>
        </View>
        
        <Text style={styles.label}>Colors</Text>
        <View style={styles.colorsContainer}>
          {colors.map(color => (
            <TouchableOpacity
              key={color}
              style={[
                styles.colorButton,
                { backgroundColor: color, borderColor: selectedColor === color ? 'red' : 'transparent' }
              ]}
              onPress={() => setSelectedColor(color)}
            />
          ))}
        </View>
        
        <Text style={styles.label}>Sizes</Text>
        <View style={styles.sizesContainer}>
          {sizes.map(size => (
            <TouchableOpacity
              key={size}
              style={[
                styles.sizeButton,
                { backgroundColor: selectedSize === size ? '#FF3B30' : 'white' }
              ]}
              onPress={() => setSelectedSize(size)}
            >
              <Text style={{ color: selectedSize === size ? 'white' : 'black' }}>{size}</Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <Text style={styles.label}>Category</Text>
        <View style={styles.categoriesContainer}>
          {categories.map(category => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                { backgroundColor: selectedCategory === category ? '#FF3B30' : 'white' }
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text style={{ color: selectedCategory === category ? 'white' : 'black' }}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <Text style={styles.label}>Brand</Text>
        <View style={styles.brandContainer}>
          <Text style={styles.brandText}>adidas Originals, Jack & Jones, s.Oliver</Text>
        </View>
        
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.discardButton} onPress={() => console.log('Discard')}>
            <Text style={styles.buttonText}>Discard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.applyButton} onPress={() => console.log('Apply')}>
            <Text style={styles.buttonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white'
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rangeSlider: {
    flex: 1,
    marginHorizontal: 8
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: '#FF3B30',
    borderRadius: 10
  },
  line: {
    height: 4,
    backgroundColor: '#000000'
  },
  selected: {
    backgroundColor: '#FF3B30'
  },
  priceLabel: {
    fontSize: 16,
    width: 50,
    textAlign: 'center'
  },
  colorsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8
  },
  colorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2
  },
  sizesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8
  },
  sizeButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'black'
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginVertical: 8
  },
  categoryButton: {
    width: '30%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 4
  },
  brandContainer: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginVertical: 8
  },
  brandText: {
    fontSize: 16,
    color: '#555'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16
  },
  discardButton: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 8
  },
  applyButton: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FF3B30',
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 8
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default FiltersScreen;
