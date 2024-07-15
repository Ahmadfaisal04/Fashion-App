import React from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, StatusBar, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const HomeMain = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ImageBackground source={require('./assets/banner/main1.png')} style={styles.image}>
        <Text style={styles.imageText}>New collection</Text>
      </ImageBackground>
      <View style={styles.row}>
        <View style={styles.column}>
          <View style={[styles.box, { backgroundColor: 'white' }]}>
            <Text style={[styles.text, { color: 'red' }]}>Summer sale</Text>
          </View>
          <ImageBackground source={require('./assets/banner/main3.png')} style={styles.imageSmall}>
            <Text style={styles.imageText}>Black</Text>
          </ImageBackground>
        </View>
        <View style={styles.column}>
          <ImageBackground source={require('./assets/banner/main2.png')} style={styles.imageMan}>
            <Text style={styles.imageText}>Men’s hoodies</Text>
          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '375',
    height: 366,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
  },
  imageSmall: {
    width: '187',
    height: 187,
    justifyContent: 'flex-end',
    padding: 10,
  },
  imageMan: {
    width: '188',
    height: width * 1,
    justifyContent: 'flex-end',
    padding: 10,
  },
  imageText: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flex: 1,
  },
  box: {
    height: 186,
    width: 187,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 11,
  },
});

export default HomeMain;
