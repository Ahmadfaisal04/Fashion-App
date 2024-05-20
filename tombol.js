import React from 'react';
import { View, Text } from 'react-native';

const CustomButton = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      flexDirection: 'row',
      padding: 20,
      marginBottom: 80
    }}>
      <View style={{
        backgroundColor: 'red',
        width: 100,
        height: 50,
        marginRight: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold'
        }}>
          Login
        </Text>
      </View>
      <View style={{
        backgroundColor: 'blue',
        width: 100,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
          Register
        </Text>
      </View>
    </View>
  );
}

export default CustomButton;
